export default function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t bg-slate-50 border-slate-200">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8 text-left">
        <div>
          <div className="text-md font-bold text-slate-800 uppercase mb-4">
            APPEXE DEVELOPMENTS LTD
          </div>
          <p className="text-xs leading-relaxed text-slate-500 mb-6">
            Professional construction and development services delivered with precision and integrity across the United Kingdom.
          </p>
          <div className="text-xs leading-relaxed text-slate-500">
            © 2024 APPEXE DEVELOPMENTS LTD. All Rights Reserved.
          </div>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex items-center gap-2 text-slate-500 cursor-pointer hover:text-slate-900 transition-all">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="text-xs uppercase tracking-tight">
              FLAT 1, 118 GREENGATES STREET, STOKE-ON-TRENT, ST6 6DE
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 cursor-pointer hover:text-slate-900 transition-all">
            <span className="material-symbols-outlined text-sm">mail</span>
            <span className="text-xs uppercase tracking-tight">
              sales@appexedevelopments.co.uk
            </span>
          </div>
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">description</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}