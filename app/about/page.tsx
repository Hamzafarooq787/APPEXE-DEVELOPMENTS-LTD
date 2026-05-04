import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      {/* Hero / Who We Are Section */}
      <section className="py-12 md:py-[80px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-12 h-1 bg-primary-container"></span>
            <span className="text-[12px] sm:text-[14px] leading-[16px] sm:leading-[20px] tracking-[0.05em] font-semibold text-primary uppercase">
              ESTABLISHED EXCELLENCE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[56px] tracking-[-0.02em] font-bold text-on-surface mb-4 md:mb-6">
            Precision in Every Square Foot.
          </h1>
          <p className="text-base md:text-[18px] leading-relaxed md:leading-[28px] text-on-surface-variant mb-6 md:mb-8">
            SANDOWN DEVELOPMENTS LTD is a leading force in modern construction, specializing in commercial development and high-end residential projects across the UK. We bridge the gap between architectural vision and structural reality with unyielding integrity.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="/portfolio">
              <button className="bg-primary-container text-white px-6 sm:px-8 py-3 sm:py-4 text-[14px] leading-[20px] tracking-[0.05em] font-semibold rounded-sm hover:brightness-110 transition-all uppercase">
                Our Portfolio
              </button>
            </Link>
            <Link href="/team">
              <button className="border border-secondary-container text-secondary-container px-6 sm:px-8 py-3 sm:py-4 text-[14px] leading-[20px] tracking-[0.05em] font-semibold rounded-sm hover:bg-secondary-container hover:text-white transition-all uppercase">
                Meet The Partners
              </button>
            </Link>
          </div>
        </div>
        <div className="relative group mt-6 md:mt-0">
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full border-2 border-secondary-container z-0"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCw6av6AQL3JkXg43_HRd5jrVt82dIjbKoihc9abPgCiTbSpM44FIt8qPR9299XfqvUY1YSmNAQzgY3hBlXUrEAAxzGf3jXj04ZDz3k18VC2lLBqddALN-zj209TiUmTgHskHlaqpy5bTe8AX9uOzk2HXMiU6QSL3Vwi0Dra_z3sAU-qAcvLUdFa6NDHQktliDJb3wYSca4MzhPkrXaOzjAkUD_rIu33FcMROKTf5BQa6XScOEpWRb1P1GdlkABOeH9t0T80Sx1Dk"
            alt="Construction site overview with steel frames"
            width={800}
            height={500}
            className="relative z-10 w-full h-auto md:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            unoptimized
          />
        </div>
      </section>

      {/* Mission & Values (Bento-style Modular Layout) */}
      <section className="py-12 md:py-[80px]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold text-on-surface uppercase mb-3 md:mb-4">
            Foundation of Values
          </h2>
          <p className="text-base md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant max-w-2xl mx-auto px-4">
            Our approach is built on four pillars that ensure every project we undertake meets the highest standards of the British construction industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission Card */}
          <div className="md:col-span-2 bg-white border border-outline-variant p-5 md:p-6 flex flex-col justify-between rounded-sm">
            <div>
              <span className="material-symbols-outlined text-primary-container text-3xl md:text-4xl mb-4">architecture</span>
              <h3 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold mb-3 md:mb-4 uppercase">Our Core Mission</h3>
              <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant mb-6">
                To transform the urban landscape through innovative engineering and sustainable building practices. We don't just build structures; we build the foundations for future commerce and community living.
              </p>
            </div>
            <div className="bg-surface-container-low p-3 md:p-4 border-l-4 border-primary-container">
              <p className="text-xs md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold text-primary italic">
                "Integrity is the bedrock of every SANDOWN project."
              </p>
            </div>
          </div>

          {/* Safety Card */}
          <div className="bg-white border border-outline-variant p-5 md:p-6 rounded-sm">
            <span className="material-symbols-outlined text-secondary-container text-3xl md:text-4xl mb-4">health_and_safety</span>
            <h3 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold mb-3 md:mb-4 uppercase">Safety First</h3>
            <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant">
              Uncompromising commitment to on-site safety protocols and risk management, ensuring zero-harm environments for our workforce and partners.
            </p>
          </div>

          {/* Quality Card */}
          <div className="bg-white border border-outline-variant p-5 md:p-6 rounded-sm">
            <span className="material-symbols-outlined text-primary-container text-3xl md:text-4xl mb-4">verified</span>
            <h3 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold mb-3 md:mb-4 uppercase">Quality Control</h3>
            <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant">
              Rigorous multi-stage inspections at every project milestone to guarantee structural longevity and premium finishing.
            </p>
          </div>

          {/* Innovation Card */}
          <div className="md:col-span-2 bg-secondary-container text-white p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 rounded-sm">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-[24px] leading-7 md:leading-[32px] font-semibold mb-2 uppercase">Modern Methodology</h3>
              <p className="text-sm md:text-[16px] leading-relaxed md:leading-[24px] opacity-90">
                Leveraging BIM technology and modular construction techniques to reduce waste and accelerate project timelines without sacrificing precision.
              </p>
            </div>
            <span className="material-symbols-outlined text-5xl md:text-6xl opacity-20">construction</span>
          </div>
        </div>
      </section>

      {/* Our History / Trust Section */}
      <section className="py-12 md:py-[80px] bg-surface-container-lowest -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold text-on-surface uppercase mb-4 md:mb-6">
              Our Legacy
            </h2>
            <p className="text-base md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant mb-6 md:mb-8">
              Founded with a vision to redefine development in the Midlands, SANDOWN has grown from a local contractor to a multi-disciplinary development firm.
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl md:text-[24px] leading-8 md:leading-[32px] font-semibold text-primary-container">15+</div>
                <div>
                  <div className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold text-on-surface uppercase">
                    Years Experience
                  </div>
                  <div className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant">
                    Industry veteran leadership.
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl md:text-[24px] leading-8 md:leading-[32px] font-semibold text-secondary-container">120+</div>
                <div>
                  <div className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold text-on-surface uppercase">
                    Projects Delivered
                  </div>
                  <div className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant">
                    Commercial and residential.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-outline-variant overflow-hidden rounded-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu31pMocs0Pt-N6QexWquAiwHsv8yXBilEeAr4mpUiJjzKORIuxOOPrRN7JDzTwixI0kAYh_J73pKoy2Cq6-RSgNyz-V4RiNpOnbP6QJV9A-ZgK3gV91wBL7CEzYpw9IErG9y32EB2sfrefavkcA-ldRo40mDxOPImbROs4a2eAe6zGrWndpJ7f8dwtXIaUySh09K--7i-biolqEDC3OvSGksL3jKeMhDhBUIGEioc9qcz-DcLWvfilFwlSNbuqIf4x0nbRJUujME"
                alt="Corporate headquarters building"
                width={400}
                height={192}
                className="w-full h-40 sm:h-48 object-cover"
                unoptimized
              />
              <div className="p-4 md:p-6">
                <h4 className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold text-primary uppercase mb-2">
                  The Beginning
                </h4>
                <p className="text-xs md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant">
                  Started as a specialist civil engineering outfit focusing on structural integrity and site preparation.
                </p>
              </div>
            </div>
            <div className="bg-white border border-outline-variant overflow-hidden rounded-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3HM1B6EK-BMcjpdrmywbPxymMjGIfzcMzmjIhq_XFCqoeJsFnM7vPzrmwO3M0xnZBYsseoKYL9uZxXYUgSa5ffiIUSF0IhVeslPdDcSzN7BQoKwWtLbwth8NB6kOoFosEt_pnC4iAzWRcHCDXPOMJyXOjzhx5Us2UwvvShonxMrTigjsV9yfiAseks6cbCEk9dwtJnzKstBF1kQ6ess2CxXWFynz5LCIvHBBhd5OtcTZta1glc_tT1K-6oHaSvxODUZlqloqnTrc"
                alt="Modern residential interior"
                width={400}
                height={192}
                className="w-full h-40 sm:h-48 object-cover"
                unoptimized
              />
              <div className="p-4 md:p-6">
                <h4 className="text-[12px] md:text-[14px] leading-[16px] md:leading-[20px] tracking-[0.05em] font-semibold text-secondary uppercase mb-2">
                  Expansion
                </h4>
                <p className="text-xs md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant">
                  Transitioned into full-cycle commercial developments, winning several regional excellence awards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 md:py-[80px]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold text-on-surface uppercase">
              The Leadership
            </h2>
            <p className="text-base md:text-[16px] leading-relaxed md:leading-[24px] text-on-surface-variant">
              Driven by expertise, led by precision.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-on-surface-variant uppercase tracking-widest">
              Stoke-On-Trent HQ
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Team Member 1 */}
          <div className="text-center group">
            <div className="aspect-square bg-surface-container mb-3 md:mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_6DciO0iJSX5stNuM_RcWB2VoHABSfmmQChqd5w83JDavCvuHCPSAUgAM62KvERncL7ed5Bgez1whtqavZehi6bJOJaTsK5zojYK5PtdCkDXCDnEvuNIvkaaQSayvCpFCruiUIaczDh5nDGi9cDBoFQ5w0w1JToeBP9RMVeh5ADAo94BjzhJ5noLdSSKEE-THn0YDgPu3Sr0f48kH3kRd6Q6EACiOr21ImzIPBLx5l82Ik5tqMUx1y1DturioOQz42MvD6iGxego"
                alt="David Harrison - Managing Director"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <h4 className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold text-on-surface uppercase">
              David Harrison
            </h4>
            <p className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-primary uppercase">
              Managing Director
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center group">
            <div className="aspect-square bg-surface-container mb-3 md:mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAez2p8SiBvICNX2gqunjAWKkDafYsm8qz0EjMNkZBzR6I3NWg4G82VFXP4y-V_DqVOCu55ulaAMNQ3VRwRRrLFkpQbd2Msz58xFczauZru8K6pbm4UlXdzUKzvjKqHTdYczH54Lz5y5NJBJvsk9BSokFsIhHi0D6JYuUdtksqkLOf6v-Ju-gU-ubuPkOVsy5GIg5vfo9Q-9lmbdECVzTlm8IGCbhd1DeuerFYbBXKCxFhCk2EmzClFMVPFFmnxr5vxMijSCwLT3sM"
                alt="Sarah Jenkins - Operations Head"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <h4 className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold text-on-surface uppercase">
              Sarah Jenkins
            </h4>
            <p className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-primary uppercase">
              Operations Head
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center group">
            <div className="aspect-square bg-surface-container mb-3 md:mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA0ekBwswNRs_sKJJ1pHOFiUOA93_5jHwWmzEypzWEyXVuo2LRNtjbTjfVFW1sTqUJGMxOwxVjb4FsCSMCdeuPtmI8REac7T66r8wLB3hgOpaCX3Fy-Yao_3qMknxif7Hbal3b5d5gKgsEvnYi9mUVbnZHSAbXiz9XqKDTJbh6vDlQkLTs4astC3CWdjRnH2htCfu8SAgXaDut9j7q3Beo1V6Jy_IROgm0FTLQ3bls9wsYcYTZMTDL0gknVDDIqfuj0E5S2VoHzCA"
                alt="Michael Chen - Chief Architect"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <h4 className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold text-on-surface uppercase">
              Michael Chen
            </h4>
            <p className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-primary uppercase">
              Chief Architect
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="text-center group">
            <div className="aspect-square bg-surface-container mb-3 md:mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 rounded-sm">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEvzy1wyApNGDEVz2XYmACh0r6FWSM72X8ZcX0y4LXdb8Fk7ZOO0ATv320DI2YtX5cnqB-K5xs4FBkeZjtCNXF_9O_sHSE-TPL4DYvYoATiUsV7IgX_WODNbeIEBqfDBS1MI0kcwtN5EiP2qxNa1wwR5gWCgGA2E66maUwxjFW2ZdkxACr_d3LjYn65oG5yXfy9dvr2x9Pd-PYPHUcCisbLhUouvM6qlfqda0m6kC4dj7aGAK_x4ayMLkhqiIQnSi0wPJrZ4KYpRs"
                alt="Emma Wright - Commercial Manager"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <h4 className="text-[13px] md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold text-on-surface uppercase">
              Emma Wright
            </h4>
            <p className="text-[11px] md:text-[12px] leading-[14px] md:leading-[16px] font-medium text-primary uppercase">
              Commercial Manager
            </p>
          </div>
        </div>
      </section>

     
    </main>
  )
}