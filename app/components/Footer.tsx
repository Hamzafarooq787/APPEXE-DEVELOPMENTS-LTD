export default function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t bg-surface border-border">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 text-left">

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
            © 2026 SANDOWN DEVELOPMENTS LTD. All Rights Reserved.
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end">

          <div className="flex items-start md:items-center gap-2 text-text-muted hover:text-text transition-all">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="text-xs uppercase tracking-tight">
              11 SAINT ANDREWS DRIVE, STOKE-ON-TRENT, ST5 2NW
            </span>
          </div>

          <div className="flex items-center gap-2 text-text-muted hover:text-text transition-all">
            <span className="material-symbols-outlined text-sm">mail</span>
            <a href="mailto:info@sandowndevelopments.co.uk" className="text-xs tracking-tight">
              info@sandowndevelopments.co.uk
            </a>
          </div>

          <div className="mt-4 flex gap-4">
            {/* ACTION NEEDED: Replace with your company's external profile URL (e.g. LinkedIn, Companies House listing, or trade directory) */}
            <a href="#" className="text-text-muted hover:text-text transition-colors">
              <span className="material-symbols-outlined">public</span>
            </a>
            {/* ACTION NEEDED: Replace with the URL to your downloadable company brochure or capability statement PDF */}
            <a href="#" className="text-text-muted hover:text-text transition-colors">
              <span className="material-symbols-outlined">description</span>
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
