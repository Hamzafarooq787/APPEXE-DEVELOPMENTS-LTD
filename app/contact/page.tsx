export default function ContactPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <section className="mt-12 md:mt-20 mb-12 md:mb-[80px]">
        <div className="flex flex-col gap-3 md:gap-4">
          <span className="kicker text-secondary">
            Connect With Us
          </span>
          <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.02em] font-bold text-text">
            Get in touch with our <span className="text-accent">development experts</span>.
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-text-muted max-w-2xl">
            SANDOWN DEVELOPMENTS LTD is ready to discuss your next construction project or commercial partnership. Reach out to our Stoke-on-Trent office directly via email or visit us at our headquarters.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-[80px]">
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
          <div className="bg-white border border-border p-4 md:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group hover:border-accent transition-all rounded-lg">
            <div className="bg-accent/10 p-3 md:p-4 rounded-full shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">mail</span>
            </div>
            <div>
              <h3 className="text-xl md:text-[24px] leading-[28px] md:leading-[32px] font-semibold mb-1 md:mb-2">Email Us</h3>
              <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] text-text-muted mb-3 md:mb-4">
                For all sales inquiries, project proposals, and corporate partnerships.
              </p>
              <a
                href="mailto:info@sandowndevelopments.co.uk"
                className="text-lg md:text-[24px] leading-[26px] md:leading-[32px] font-semibold text-accent hover:underline underline-offset-4 break-all"
              >
                info@sandowndevelopments.co.uk
              </a>
            </div>
          </div>

          <div className="bg-white border border-border p-4 md:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group hover:border-secondary transition-all rounded-lg">
            <div className="bg-secondary/10 p-3 md:p-4 rounded-full shrink-0">
              <span className="material-symbols-outlined text-3xl md:text-4xl">location_on</span>
            </div>
            <div>
              <h3 className="text-xl md:text-[24px] leading-[28px] md:leading-[32px] font-semibold mb-1 md:mb-2">Our Office</h3>
              <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] text-text-muted mb-3 md:mb-4">
                11 SAINT ANDREWS DRIVE,<br />
                STOKE-ON-TRENT, ST5 2NW
              </p>
              <span className="kicker text-secondary flex items-center gap-2">
                Headquarters <span className="material-symbols-outlined text-sm">verified</span>
              </span>
            </div>
          </div>

          <div className="bg-primary text-white p-4 md:p-6 flex flex-col gap-3 md:gap-4 rounded-lg">
            <h4 className="text-xl md:text-[24px] leading-[28px] md:leading-[32px] font-semibold">Ready to build?</h4>
            <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] opacity-90">
              Our team typically responds to all serious project inquiries within 24-48 business hours.
            </p>
            <a
              href="mailto:info@sandowndevelopments.co.uk"
              className="mt-2 inline-block bg-white text-primary px-5 md:px-6 py-2 md:py-3 text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold uppercase hover:bg-surface transition-colors rounded-md text-center"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 relative overflow-hidden rounded-lg border border-border min-h-80">
          <div className="relative w-full pt-[56.25%] md:pt-[75%] lg:pt-[66%]">
            <iframe
              src="https://maps.google.com/maps?q=11+Saint+Andrews+Drive,+Stoke-on-Trent,+ST5+2NW,+UK&output=embed"
              title="Map of 11 Saint Andrews Drive, Stoke-on-Trent, ST5 2NW"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 md:py-3 border border-border rounded-md pointer-events-none">
            <p className="text-[10px] md:text-xs font-semibold text-text uppercase">Regional Hub</p>
            <p className="text-[10px] md:text-sm text-text-muted">North Staffordshire / West Midlands</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-[80px] border-t border-border">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold mb-3 md:mb-4">What happens next?</h2>
          <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] text-text-muted max-w-xl mx-auto px-4">
            Once you contact us via email, we follow a systematic approach to evaluating your project requirements.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-base md:text-lg mb-3">1</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Evaluation</h5>
            <p className="text-xs md:text-sm text-text-muted">We review your project scope and specifications within 2 days.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-base md:text-lg mb-3">2</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Initial Consult</h5>
            <p className="text-xs md:text-sm text-text-muted">A brief discovery call to discuss feasibility and timelines.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface flex items-center justify-center text-text-muted font-bold text-base md:text-lg mb-3">3</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Proposal</h5>
            <p className="text-xs md:text-sm text-text-muted">Detailed breakdown of costs, resources, and stages.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface flex items-center justify-center text-text-muted font-bold text-base md:text-lg mb-3">4</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Engagement</h5>
            <p className="text-xs md:text-sm text-text-muted">Contract finalization and project kickoff with site team.</p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-text">SANDOWN DEVELOPMENTS LTD</h3>
            <p className="text-sm md:text-base text-text-muted">11 SAINT ANDREWS DRIVE, STOKE-ON-TRENT, ST5 2NW</p>
          </div>
          <div>
            <a href="mailto:info@sandowndevelopments.co.uk" className="text-accent hover:underline text-sm md:text-base">
              info@sandowndevelopments.co.uk
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
