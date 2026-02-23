# Deployment Instructions

This project has been rebuilt using **Next.js 15 (App Router)** and **SQLite with Prisma**. It fulfills the requirement for strict 1-to-1 visual parity while adding a fully functional local admin dashboard for content management.

## 1. Local Development Setup

Before deploying, you can run the project locally.

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Initialize Database** (SQLite):
   ```bash
   npx prisma db push
   npx prisma generate
   ```

3. **Seed Database** (Populate with your initial dummy CV data):
   ```bash
   npx prisma db seed
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   * The public site is at: `http://localhost:3000`
   * The admin panel is at: `http://localhost:3000/admin/login` (Admin defaults: `admin@admin.com` / `password`)

## 2. Deploying to Vercel (or similar Serverless Platform)

Since Next.js is heavily optimized for Vercel, this is the easiest route. **However, Vercel has ephemeral file systems**, meaning the local SQLite database (`dev.db`) and local image uploads (`/public/uploads`) will be lost on every deployment.

### To deploy to Vercel persistently:
1. **Switch Database to PostgreSQL**:
   Since Vercel is stateless, you must switch from SQLite to a persistent database (e.g., Supabase, Vercel Postgres, Neon).
   - In `prisma/schema.prisma`, change `provider = "sqlite"` to `provider = "postgresql"`.
   - Update your `.env` with the remote connection string: `DATABASE_URL="postgres://user:password@remote-host:5432/db"`.
   - Run `npx prisma db push` to generate the remote tables.
2. **Handle Image Uploads**:
   - Vercel cannot store uploaded images in `/public`. You will need to update the `actions.ts` files to upload images to an S3 bucket or Supabase Storage instead of saving them locally via `fs`.

## 3. Deploying to a VPS (Persistent Storage)

If you prefer to keep SQLite and local image uploads, deploy to a VPS like DigitalOcean, Linode, or AWS EC2 using PM2.

1. Clone your project onto the VPS server.
2. Install Node.js, run `npm install`.
3. Create an `.env` file pointing to `file:./dev.db` locally.
4. Build the application:
   ```bash
   npm run build
   ```
5. Start the app using `pm2`:
   ```bash
   pm2 start npm --name "cv-admin" -- start
   ```
6. Set up an NGINX reverse proxy pointing port 80/443 to the local Next.js port (e.g., `3000`).

In this scenario, SQLite (`dev.db`) and image uploads (`public/uploads`) will persist securely on your own server.
