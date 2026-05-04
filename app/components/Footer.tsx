export default function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t bg-slate-50 border-slate-200">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-8 text-left">

        {/* LEFT SIDE */}
        <div>

          {/* LOGO */}
          <div className="mb-4">
            <img
              src="/logo.webp"
              alt="Sandown Developments Logo"
              className="h-14 w-auto object-contain"
            />
          </div>

          <p className="text-xs leading-relaxed text-slate-500 mb-6">
            Specialist construction and development company delivering high-quality residential and commercial projects across the United Kingdom with precision, safety, and reliability.
          </p>

          <div className="text-xs leading-relaxed text-slate-500">
            © 2026 SANDOWN DEVELOPMENTS LTD. All Rights Reserved.
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3 md:items-end">

          <div className="flex items-start md:items-center gap-2 text-slate-500 hover:text-slate-900 transition-all">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="text-xs uppercase tracking-tight">
              11 SAINT ANDREWS DRIVE, STOKE-ON-TRENT, ST5 2NW
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-all">
            <span className="material-symbols-outlined text-sm">mail</span>
            <span className="text-xs uppercase tracking-tight">
              sales@
            </span>
          </div>

          {/* OPTIONAL LINKS */}
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
              <span className="material-symbols-outlined">description</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}