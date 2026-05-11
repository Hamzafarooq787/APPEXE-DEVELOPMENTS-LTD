import Image from 'next/image'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      {/* Hero Header */}
      <header className="py-12 md:py-[80px]">
        <div className="max-w-3xl">
          <p className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] tracking-[0.05em] font-semibold text-secondary uppercase mb-3 md:mb-4">
            Precision Engineering & Construction
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[56px] tracking-[-0.02em] font-bold text-on-surface mb-4 md:mb-6">
            Built for Excellence, Designed for Life.
          </h1>
          <p className="text-base md:text-[18px] leading-relaxed md:leading-[28px] text-on-surface-variant">
            SANDOWN DEVELOPMENTS LTD delivers end-to-end construction solutions across commercial and residential sectors, combining innovative modularity with traditional craftsmanship.
          </p>
        </div>
      </header>

      {/* Section 1: New Builds */}
      <section className="py-12 md:py-[80px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              architecture
            </span>
            <h2 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold text-on-surface">New Builds</h2>
          </div>
          <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant mb-4 md:mb-6">
            Our new build services transform architectural visions into structural realities. We manage every phase from initial groundworks to the final aesthetic finish, ensuring each project adheres to our rigorous standards of efficiency and sustainability.
          </p>
          <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary-container text-base md:text-lg">check_circle</span>
              <span className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold">Custom Residential Planning</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary-container text-base md:text-lg">check_circle</span>
              <span className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold">Sustainable Material Sourcing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary-container text-base md:text-lg">check_circle</span>
              <span className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold">Project Lifecycle Management</span>
            </li>
          </ul>
          <Link href="/portfolio">
            <button className="bg-secondary-container text-on-secondary-container px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:brightness-110 transition-all">
              Download Portfolio
            </button>
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-video bg-surface-container-highest overflow-hidden rounded-xl border border-outline-variant">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpBwi25rWZukt5AfFq0kEYZrYdJEx9cRW_8Pig7Bslc_a5b_F_I8mwZ3qaN_GPJyAadOOo4YfUeKru9JnfZqbIiFX3OPPwmPt_Eg1bHxg7HiO8n-Z5Etc423y5nFhhg-WBnActhVBLcvFB5mRMrbcUZDdQUPsAelMGz9KYStjQ6Er2M8T65eHVKfIrrRznS0ZB6u3VwR2x0zi6md_9eh4XkRdaeYQXd-5qj1V4pdaffQIaZSvSrukKtPLB-gLmz4tAnYoHiBkOQT8"
              alt="Modern new build construction"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Section 2: Extensions & Renovations */}
      <section className="py-12 md:py-[80px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-1">
          <div className="aspect-video bg-surface-container-highest overflow-hidden rounded-xl border border-outline-variant">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKL7uxKmBvJ3QevIMMEmIsX5isKdTVfZNlIXjtRFdPJRNsZY-CxqJBYR4c5CRPC6f7WsEwk6RuxrtVxV6xrnteDx4i4Sod2ui5Id80_UFUvdvNiZ7H0vEvrDvS1oSIcaonPXnuOO5fox9JffA7SS8ZPw3_-VKl5fH092vIunrvvqPyc_GPXlZ29OKqT0xoh0w7o1ZSWhZtyQsDsyq4-deDUxyax5rwi1-baMQoV_LKGpNjli-wfl5T-sEAVIOSFlg1uUfWQMd2oIs"
              alt="Luxury home extension"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
        <div className="order-2">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              add_home
            </span>
            <h2 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold text-on-surface">Extensions & Renovations</h2>
          </div>
          <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant mb-4 md:mb-6">
            Maximizing the potential of existing structures through intelligent design and seamless integration. Whether it's a multi-story extension or a complete internal reconfiguration, our team ensures the new matches the quality of the original.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="p-3 md:p-4 bg-surface-container rounded-lg border border-outline-variant">
              <span className="text-xl md:text-[24px] leading-6 md:leading-[32px] font-semibold text-primary block mb-1">100+</span>
              <span className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant uppercase">Projects Completed</span>
            </div>
            <div className="p-3 md:p-4 bg-surface-container rounded-lg border border-outline-variant">
              <span className="text-xl md:text-[24px] leading-6 md:leading-[32px] font-semibold text-secondary block mb-1">98%</span>
              <span className="text-[10px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant uppercase">Client Satisfaction</span>
            </div>
          </div>
          <Link href="/portfolio">
            <button className="border-2 border-primary-container text-primary-container px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-primary-container hover:text-white transition-all">
              View Case Studies
            </button>
          </Link>
        </div>
      </section>

      {/* Section 3: Commercial Developments */}
      <section className="py-12 md:py-[80px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <span className="material-symbols-outlined text-primary-container text-2xl md:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              business
            </span>
            <h2 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold text-on-surface">Commercial Developments</h2>
          </div>
          <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant mb-4 md:mb-6">
            Specialized construction for the corporate sector, including retail units, office complexes, and industrial warehouses. We prioritize modular layouts that allow for future scalability and operational efficiency.
          </p>
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white border border-outline-variant rounded-xl shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">precision_manufacturing</span>
              </div>
              <div>
                <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold">Industrial Scalability</p>
                <p className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant">Built for heavy-duty operational demands.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white border border-outline-variant rounded-xl shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-surface-container flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">groups</span>
              </div>
              <div>
                <p className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold">Partnered Delivery</p>
                <p className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant">Transparent collaboration with investors.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-video bg-surface-container-highest overflow-hidden rounded-xl border border-outline-variant">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw1CJ85ro3p-IgZ9z0qgt-x2uc-IKYmguk9c2cOiw-M27q_t0hMvJ6Wks14EkjrRTBsPtUk1S-Wdsd_92HfFomHRiRy3f7qPaPuz52Ak_rSgy7EtYwR4BDwGa-SR50oLukJRNN40VuB7iCUIkM6XN2QlkDMTD8OhHq-BgKYnA8EFWv-dJgb3ZIZDyQrx33aL-GOSp7vcoatNtB0DeenjuczYktEKF8y7rDNVuKCYlK-f_a0pQNzOLyvSWgsHLMrKimDkgFP0KKvgk"
              alt="Commercial office building"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Craftsmanship CTA Section */}
      <section className="my-12 md:my-[80px] py-12 md:py-20 bg-primary-container text-on-primary-container rounded-2xl md:rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg fill="none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 L100 0 M200 300 L300 200 M400 500 L500 400" stroke="currentColor" strokeWidth="20"></path>
          </svg>
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6 md:px-8">
          <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold mb-3 md:mb-4">
            Attention to Detail is Our Foundation.
          </h2>
          <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] mb-6 md:mb-8">
            Every brick laid and every beam installed is checked against our zero-defect policy. Quality isn't just a promise; it's our corporate signature.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href="/contact">
              <button className="bg-white text-primary px-8 md:px-10 py-3 md:py-4 rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-semibold shadow-xl hover:scale-105 transition-transform">
                Enquire about your project
              </button>
            </Link>
            <Link href="/portfolio">
              <button className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-white hover:text-primary transition-all">
                Download Brochure
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Small Contact / Address Section (consistent with home & about) */}
      <section className="py-8 md:py-12 border-t border-outline-variant mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-on-surface">SANDOWN DEVELOPMENTS LTD</h3>
            <p className="text-sm md:text-base text-on-surface-variant">11 SAINT ANDREWS DRIVE, STOKE-ON-TRENT, ST5 2NW</p>
          </div>
          <div>
            <a href="mailto:info@sandowndevelopments.co.uk" className="text-primary-container hover:underline text-sm md:text-base">
              info@sandowndevelopments.co.uk
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}