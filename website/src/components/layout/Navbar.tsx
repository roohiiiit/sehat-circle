export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group" aria-label="Sehat Circle home">
          <img src="/logo.svg" alt="Sehat Circle Logo" className="w-8 h-8 rounded-lg shadow-sm group-hover:scale-105 transition-transform" />
          <span className="text-slate-900 font-semibold text-base tracking-tight">
            Sehat <span className="text-teal-600">Circle</span>
          </span>
        </a>

        {/* CTA */}
        <a
          href="#waitlist-footer"
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium transition-all duration-200 hover:shadow-md active:scale-95"
        >
          Request Beta Access
        </a>
      </nav>
    </header>
  );
}
