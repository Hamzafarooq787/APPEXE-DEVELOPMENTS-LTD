// src/app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      {/* Hero Section */}
      <section className="mt-12 md:mt-20 mb-12 md:mb-[80px]">
        <div className="flex flex-col gap-3 md:gap-4">
          <span className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold text-secondary uppercase">
            Connect With Us
          </span>
          <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.02em] font-bold text-on-surface">
            Get in touch with our <span className="text-primary-container">development experts</span>.
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-on-surface-variant max-w-2xl">
            SANDOWN DEVELOPMENTS LTD is ready to discuss your next construction project or commercial partnership. Reach out to our Stoke-on-Trent office directly via email or visit us at our headquarters.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-[80px]">
        {/* Left Column - Contact Info */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
          {/* Email Card */}
          <div className="bg-surface-container-lowest border border-outline-variant p-4 md:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group hover:border-primary-container transition-all rounded-lg">
            <div className="bg-primary-container/10 p-3 md:p-4 rounded-full shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">mail</span>
            </div>
            <div>
              <h3 className="text-xl md:text-[24px] leading-[28px] md:leading-[32px] font-semibold mb-1 md:mb-2">Email Us</h3>
              <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] text-on-surface-variant mb-3 md:mb-4">
                For all sales inquiries, project proposals, and corporate partnerships.
              </p>
              <a
                href="mailto:info@sandowndevelopments.co.uk"
                className="text-lg md:text-[24px] leading-[26px] md:leading-[32px] font-semibold text-primary-container hover:underline underline-offset-4 break-all"
              >
                info@sandowndevelopments.co.uk
              </a>
            </div>
          </div>

          {/* Office Card */}
          <div className="bg-surface-container-lowest border border-outline-variant p-4 md:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group hover:border-secondary-container transition-all rounded-lg">
            <div className="bg-secondary-container/10 p-3 md:p-4 rounded-full shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">location_on</span>
            </div>
            <div>
              <h3 className="text-xl md:text-[24px] leading-[28px] md:leading-[32px] font-semibold mb-1 md:mb-2">Our Office</h3>
              <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] text-on-surface-variant mb-3 md:mb-4">
                11 SAINT ANDREWS DRIVE,<br />
                STOKE-ON-TRENT, ST5 2NW
              </p>
              <span className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold text-secondary uppercase flex items-center gap-2">
                Headquarters <span className="material-symbols-outlined text-sm">verified</span>
              </span>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary text-on-primary p-4 md:p-6 flex flex-col gap-3 md:gap-4 rounded-lg">
            <h4 className="text-xl md:text-[24px] leading-[28px] md:leading-[32px] font-semibold">Ready to build?</h4>
            <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] opacity-90">
              Our team typically responds to all serious project inquiries within 24-48 business hours.
            </p>
            <div className="mt-2">
              <a
                href="mailto:info@sandowndevelopments.co.uk"
                className="inline-block bg-white text-primary px-5 md:px-6 py-2 md:py-3 text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold uppercase hover:bg-surface-container-highest transition-colors rounded-md text-center"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="lg:col-span-7 relative overflow-hidden rounded-lg border border-outline-variant" style={{ minHeight: '320px' }}>
          <div className="relative w-full pt-[56.25%] md:pt-[75%] lg:pt-[66%]">
            <iframe
              src="https://www.google.com/maps?q=11+Saint+Andrews+Drive,+Stoke-on-Trent,+ST5+2NW,+UK&output=embed"
              title="Map of 11 Saint Andrews Drive, Stoke-on-Trent, ST5 2NW"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          {/* Legend */}
          <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 border border-outline-variant rounded-md pointer-events-none">
            <p className="text-[10px] md:text-xs font-semibold text-on-surface uppercase">Regional Hub</p>
            <p className="text-[10px] md:text-sm text-on-surface-variant">North Staffordshire / West Midlands</p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 md:py-[80px] border-t border-outline-variant">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold mb-3 md:mb-4">What happens next?</h2>
          <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] text-on-surface-variant max-w-xl mx-auto px-4">
            Once you contact us via email, we follow a systematic approach to evaluating your project requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-container flex items-center justify-center text-white font-bold text-base md:text-lg mb-3">1</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Evaluation</h5>
            <p className="text-xs md:text-sm text-on-surface-variant">We review your project scope and specifications within 2 days.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container font-bold text-base md:text-lg mb-3">2</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Initial Consult</h5>
            <p className="text-xs md:text-sm text-on-surface-variant">A brief discovery call to discuss feasibility and timelines.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-base md:text-lg mb-3">3</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Proposal</h5>
            <p className="text-xs md:text-sm text-on-surface-variant">Detailed breakdown of costs, resources, and stages.</p>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-base md:text-lg mb-3">4</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Engagement</h5>
            <p className="text-xs md:text-sm text-on-surface-variant">Contract finalization and project kickoff with site team.</p>
          </div>
        </div>
      </section>

      {/* Small Contact / Address Section (consistent with home & about) */}
      <section className="py-8 md:py-12 border-t border-outline-variant">
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