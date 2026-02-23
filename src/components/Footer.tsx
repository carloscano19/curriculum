export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Carlos Cano Fernández. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-50">
          Designed with ❤️ for Web Performance
        </p>
      </div>
    </footer>
  );
}
