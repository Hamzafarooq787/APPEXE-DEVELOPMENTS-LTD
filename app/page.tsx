import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARl_oWvHTM2Rw0A9JN-ia2GEsNIsf-kQzIQ-vlGIrErDmHdm2tk0i7TIfI9aiRse6rimn5ugufakhJKYFRrcY37KW7OtQZhN5YBueL6eIpPs0P1VRDHkbsK-4NfkKoMgMZuLJ_l6zzeruji2H_oyuUXsOxo0DBAeMszArxiYZQ3KYhT1rg0WER4g6xKU4Ab_g8fcpsZr2o6VIzlY9jkEwaZravgCdyO0t9cAz09Ss2QrvuOzSq3Fm936McF1WrVi5CCImQTukvgqg"
            alt="Modern construction site with steel beams"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[56px] tracking-[-0.02em] font-bold text-white mb-4 md:mb-6">
              Building the Future with <span className="text-primary-container">Structural Integrity</span> and Modern Innovation.
            </h1>
            <p className="text-base md:text-[18px] leading-relaxed md:leading-[28px] text-white/90 mb-6 md:mb-10">
              SANDOWN DEVELOPMENTS LTD delivers large-scale commercial and premium residential projects with systematic precision and transparent management.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/services">
                <button className="bg-secondary-container text-white text-[14px] leading-[20px] tracking-[0.05em] font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:brightness-110 transition-all uppercase w-full sm:w-auto">
                  Our Services
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white text-[14px] leading-[20px] tracking-[0.05em] font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-white/20 transition-all uppercase w-full sm:w-auto">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects / Recent Developments */}
      <section className="py-12 md:py-[80px] max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary uppercase">Our Work</span>
          <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold text-on-surface mt-2 mb-4">Featured Developments</h2>
          <p className="text-base md:text-[18px] leading-relaxed md:leading-[28px] text-on-surface-variant max-w-2xl mx-auto">
            Showcasing our commitment to quality and innovation across the UK.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Project 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="aspect-video relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKlkaJ8KWoWPTVAWphI7WFYJXFSNDLTb_XaNNyCt35C52tqFuuyvpTQqGhO9HcnlHP8ht79QnaYQr_rM6G0RcrqMlYw9DDcCJtgXck6tj0MWX0x_TfiFiV44DjUE8TFqzswkj0TloN8IYfbnOaxsqpiulOvZQ_PgYjwFtMzgL5QrO54S2shwHz4IAtzWPVoWx7IGtZUnfQ57JyFiIE2Z-U5VgzFiUgdapzRBJz0o4yMu6dlpS7m7R7PIrXnRlhwQUYij7NJIUhwNI"
                alt="Commercial skyscraper"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 md:p-6">
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1">Midland Commercial Tower</h3>
                <p className="text-sm md:text-base opacity-90">Birmingham | 2024</p>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="aspect-video relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_evmhEWMKExXSxS3SMM5qbdDYtLlElXwt_cUqVVEp7p3-6ZBvB-7wWPOZL9rBeuQZDVT4bwAb-Lj4zmH9xV6G6dYR7A-dIyoU40afaS3J8GmilgNonnwLjF7nZ__8IHG_OqQOHK5iGA_9JU8-y2BKm7juuRs97Ez5-sw0cc41jCyf5BaDJHW90EtC42gAnZac_2rKGC3pI6my-QHKvje3twsc7u8jxBcFjDS8IuxYXgkNziHVZXZZKHraD4QulsCYluJA-CzdzYk"
                alt="Luxury residential"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 md:p-6">
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-1">Lakeside Manor Residences</h3>
                <p className="text-sm md:text-base opacity-90">Cheshire | 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Link href="/services">
            <button className="border border-primary-container text-primary-container px-6 md:px-8 py-2 md:py-3 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-primary-container hover:text-white transition-all">
              View All Projects
            </button>
          </Link>
        </div>
      </section>

      {/* Our Process (How we work) */}
      <section className="bg-surface-container py-12 md:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-secondary uppercase">Seamless Experience</span>
            <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold text-on-surface mt-2 mb-4">How We Work</h2>
            <p className="text-base md:text-[18px] leading-relaxed md:leading-[28px] text-on-surface-variant max-w-2xl mx-auto">
              From initial consultation to final handover, our systematic approach ensures clarity and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-container">
                <span className="material-symbols-outlined text-3xl">chat</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">1. Consultation</h3>
              <p className="text-sm md:text-base text-on-surface-variant">We listen to your vision and assess feasibility.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-container">
                <span className="material-symbols-outlined text-3xl">draw</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">2. Design & Planning</h3>
              <p className="text-sm md:text-base text-on-surface-variant">Detailed blueprints and regulatory approvals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-container">
                <span className="material-symbols-outlined text-3xl">construction</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">3. Construction</h3>
              <p className="text-sm md:text-base text-on-surface-variant">Quality builds with transparent updates.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-container">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">4. Handover</h3>
              <p className="text-sm md:text-base text-on-surface-variant">Final walkthrough and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-12 md:py-[80px] max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-8 md:mb-12 border-l-4 border-primary-container pl-4 md:pl-6">
          <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-primary uppercase block mb-2">Capabilities</span>
          <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold text-on-surface">Our Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Featured Card */}
          <div className="md:col-span-8 group relative bg-white border border-outline-variant overflow-hidden rounded-lg">
            <div className="h-[280px] md:h-[400px] overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKlkaJ8KWoWPTVAWphI7WFYJXFSNDLTb_XaNNyCt35C52tqFuuyvpTQqGhO9HcnlHP8ht79QnaYQr_rM6G0RcrqMlYw9DDcCJtgXck6tj0MWX0x_TfiFiV44DjUE8TFqzswkj0TloN8IYfbnOaxsqpiulOvZQ_PgYjwFtMzgL5QrO54S2shwHz4IAtzWPVoWx7IGtZUnfQ57JyFiIE2Z-U5VgzFiUgdapzRBJz0o4yMu6dlpS7m7R7PIrXnRlhwQUYij7NJIUhwNI"
                alt="Commercial Infrastructure"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold text-on-surface mb-2">Commercial Infrastructure</h3>
              <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant mb-4">
                Scalable solutions for corporate headquarters, industrial complexes, and retail centers that define the modern skyline.
              </p>
              <div className="flex items-center text-primary-container text-[14px] leading-[20px] tracking-[0.05em] font-semibold cursor-pointer hover:gap-2 transition-all">
                LEARN MORE <span className="material-symbols-outlined ml-1">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Secondary Card 1 */}
          <div className="md:col-span-4 group bg-white border border-outline-variant flex flex-col rounded-lg overflow-hidden">
            <div className="h-[200px] md:h-[240px] overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_evmhEWMKExXSxS3SMM5qbdDYtLlElXwt_cUqVVEp7p3-6ZBvB-7wWPOZL9rBeuQZDVT4bwAb-Lj4zmH9xV6G6dYR7A-dIyoU40afaS3J8GmilgNonnwLjF7nZ__8IHG_OqQOHK5iGA_9JU8-y2BKm7juuRs97Ez5-sw0cc41jCyf5BaDJHW90EtC42gAnZac_2rKGC3pI6my-QHKvje3twsc7u8jxBcFjDS8IuxYXgkNziHVZXZZKHraD4QulsCYluJA-CzdzYk"
                alt="Luxury Residential"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="p-4 md:p-6 flex-1">
              <h3 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold text-on-surface mb-2">Luxury Residential</h3>
              <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant">Bespoke home construction focused on high-quality finishes and architectural excellence.</p>
            </div>
          </div>

          {/* Secondary Card 2 */}
          <div className="md:col-span-4 group bg-white border border-outline-variant flex flex-col rounded-lg overflow-hidden">
            <div className="h-[200px] md:h-[240px] overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm71xLOvwoaFwrMw29EVYUEogisso1TkIUTkkhZQk16-yp41yE3-kP7z1o5fMI5Ft47LyBphqw1FhHcokwetdRdRKcXP_aynYaCDcY3Z-kHoIz82loqkd0ZEuKwUl_7FNjs0cph2206bd9yefJwu_946bpHUrlZsK46kirsG3RO1KFJY8_iKcSQUT0TElA4JrwiiTrH2_Kqct3DYnSU6EEmYlkI38WHio8roTJ-EBPiD0qgMMpDW4BrVyH1jHZG0AbKjIXv8C_YWk"
                alt="Strategic Renovation"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="p-4 md:p-6 flex-1">
              <h3 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold text-on-surface mb-2">Strategic Renovation</h3>
              <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant">Transforming legacy structures into high-performance modern assets through expert restoration.</p>
            </div>
          </div>

          {/* Secondary Card 3 – horizontal */}
          <div className="md:col-span-8 group bg-white border border-outline-variant flex flex-col md:flex-row rounded-lg overflow-hidden">
            <div className="md:w-1/2 h-[240px] md:h-auto overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0XFJnNSB6ZwiyxV9_vSSqJVifygbdPIPElDPJ-e7uEETeBIRHFKgaN68JK0tKfTvGzsw5oHXm4G7lckB08t0GLk8-qIVlYnlvoaQq-QM4FicC6E9hCPE-N7weZTncgr4VlLiQVzkniazvDaU4n4SpegIaOSXH0ZgffDh5fR41YjF6dx_zKag8aGiTZzT9AsWcByABa8rNPti9kqOjsb08MYOLRV7eXOuLgWiX9igyTk1vlCmrhB4ScF4WMzxG9NmB8OG1ubTpEGc"
                alt="Project Management"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold text-on-surface mb-2">Project Management</h3>
              <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant mb-4 md:mb-6">End-to-end oversight ensuring every milestone is achieved with clinical precision and cost-efficiency.</p>
              <button className="border border-primary-container text-primary-container px-4 md:px-6 py-2 text-[14px] leading-[20px] tracking-[0.05em] font-semibold w-fit hover:bg-primary-container hover:text-white transition-all rounded-lg">
                VIEW CASE STUDIES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-container py-12 md:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-secondary uppercase">Common Questions</span>
            <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold text-on-surface mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-base md:text-[18px] leading-relaxed md:leading-[28px] text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to know about working with SANDOWN DEVELOPMENTS LTD.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {/* FAQ 1 */}
            <details className="bg-white rounded-lg border border-outline-variant p-4 md:p-6 group">
              <summary className="font-semibold text-on-surface text-base md:text-lg cursor-pointer list-none flex justify-between items-center">
                What types of projects do you specialize in?
                <span className="material-symbols-outlined text-primary-container group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-3 text-sm md:text-base text-on-surface-variant pt-3 border-t border-outline-variant">
                We specialize in large-scale commercial developments (offices, retail, industrial), premium residential builds, and strategic renovations/extensions.
              </p>
            </details>
            {/* FAQ 2 */}
            <details className="bg-white rounded-lg border border-outline-variant p-4 md:p-6 group">
              <summary className="font-semibold text-on-surface text-base md:text-lg cursor-pointer list-none flex justify-between items-center">
                How long does a typical project take?
                <span className="material-symbols-outlined text-primary-container group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-3 text-sm md:text-base text-on-surface-variant pt-3 border-t border-outline-variant">
                Timelines vary based on scale. A residential extension may take 3-6 months, while a commercial build can take 12-24 months. We provide a detailed schedule during consultation.
              </p>
            </details>
            {/* FAQ 3 */}
            <details className="bg-white rounded-lg border border-outline-variant p-4 md:p-6 group">
              <summary className="font-semibold text-on-surface text-base md:text-lg cursor-pointer list-none flex justify-between items-center">
                Do you handle planning permissions?
                <span className="material-symbols-outlined text-primary-container group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-3 text-sm md:text-base text-on-surface-variant pt-3 border-t border-outline-variant">
                Yes, our in-house team manages all necessary planning applications, building regulations, and compliance with UK standards.
              </p>
            </details>
            {/* FAQ 4 */}
            <details className="bg-white rounded-lg border border-outline-variant p-4 md:p-6 group">
              <summary className="font-semibold text-on-surface text-base md:text-lg cursor-pointer list-none flex justify-between items-center">
                Can I visit a previous project site?
                <span className="material-symbols-outlined text-primary-container group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-3 text-sm md:text-base text-on-surface-variant pt-3 border-t border-outline-variant">
                Absolutely. We arrange site visits to completed projects upon request, subject to client permissions.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-[60px]">
        <div className="bg-surface-container-high rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-2">Let's discuss your project</h3>
            <p className="text-sm md:text-base text-on-surface-variant">Reach out to our team for a free consultation and quote.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-primary-container text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:brightness-110 transition-all">
                Enquire Now
              </button>
            </Link>
            <a href="mailto:sales@">
              <button className="border border-primary-container text-primary-container px-6 py-2 md:px-8 md:py-3 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-primary-container hover:text-white transition-all">
                Email: sales@
              </button>
            </a>
          </div>
        </div>
      </section>

     
    </>
  )
}