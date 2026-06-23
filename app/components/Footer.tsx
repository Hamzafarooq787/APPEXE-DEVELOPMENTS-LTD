import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t bg-surface border-border">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-8">

        <div>
          <div className="mb-4">
            <img
              src="/logo.webp"
              alt="Sandown Developments Logo"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-xs leading-relaxed text-text-muted mb-6">
            Specialist construction and development company delivering high-quality residential and commercial projects across the United Kingdom with precision, safety, and reliability.
          </p>
          <div className="text-xs leading-relaxed text-text-muted">
            © {new Date().getFullYear()} SANDOWN DEVELOPMENTS LTD. All rights reserved.
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-xs font-semibold uppercase tracking-widest text-text mb-4">Navigation</p>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" className="text-xs text-text-muted hover:text-text transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-xs text-text-muted hover:text-text transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="text-xs text-text-muted hover:text-text transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="text-xs text-text-muted hover:text-text transition-colors">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-text mb-1">Get in Touch</p>
          <div className="flex items-start gap-2 text-text-muted hover:text-text transition-all">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="text-xs uppercase tracking-tight">11 Saint Andrews Drive, Stoke-on-Trent, ST5 2NW</span>
          </div>
          <div className="flex items-center gap-2 text-text-muted hover:text-text transition-all">
            <span className="material-symbols-outlined text-sm">mail</span>
            <a href="mailto:info@sandowndevelopments.co.uk" className="text-xs tracking-tight hover:text-text transition-colors">
              info@sandowndevelopments.co.uk
            </a>
          </div>
          <div className="mt-4 text-xs leading-relaxed text-text-muted">
            Designed &amp; Developed By{' '}
            <a
              href="https://linkedo.co.uk/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-text hover:text-primary underline underline-offset-2"
            >
              Linkedo
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
