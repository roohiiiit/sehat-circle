import EmailForm from '../ui/EmailForm';

export default function Footer() {
  return (
    <footer className="bg-slate-900" id="waitlist-footer">
      {/* Final CTA section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">Early Access</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Give your family the same<br className="hidden sm:block" /> peace of mind.
        </h2>
        <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto leading-relaxed">
          We're inviting a small number of families to try it first. Be among the first to use Sehat Circle.
        </p>
        <div className="flex justify-center">
          <EmailForm variant="dark" id="footer-email-form" />
        </div>
      </section>

      {/* Legal bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© 2026 Sehat Circle. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:hello@sehatcircle.com" className="hover:text-slate-300 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
