'use client'

import { useState, FormEvent, ChangeEvent } from 'react'

type Fields = {
  name: string
  company: string
  email: string
  phone: string
  projectType: string
  message: string
}

type FieldErrors = Partial<Record<keyof Fields, string>>
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const PROJECT_TYPES = [
  'New residential build',
  'Commercial development',
  'Extension or renovation',
  'Industrial / warehouse',
  'Other',
]

export default function ContactPage() {
  const [fields, setFields] = useState<Fields>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  function validate(): FieldErrors {
    const e: FieldErrors = {}
    if (!fields.name.trim()) e.name = 'Full name is required.'
    if (!fields.email.trim()) {
      e.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = 'Enter a valid email address.'
    }
    if (!fields.message.trim()) e.message = 'Tell us about your project.'
    return e
  }

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof Fields]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setSubmitStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitStatus('success')
      setFields({ name: '', company: '', email: '', phone: '', projectType: '', message: '' })
    } catch {
      setSubmitStatus('error')
    }
  }

  if (submitStatus === 'success') {
    return (
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-24 text-center">
        <span className="material-symbols-outlined text-6xl text-accent block mb-6">check_circle</span>
        <h2 className="text-2xl md:text-[32px] font-bold text-text mb-4">Enquiry received.</h2>
        <p className="text-text-muted max-w-md mx-auto">
          We aim to respond within two working days. For urgent matters, email us directly at{' '}
          <a href="mailto:info@sandowndevelopments.co.uk" className="text-accent underline">
            info@sandowndevelopments.co.uk
          </a>.
        </p>
      </main>
    )
  }

  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <section className="mt-12 md:mt-20 mb-12 md:mb-[80px]">
        <div className="flex flex-col gap-3 md:gap-4">
          <span className="kicker text-secondary">Get in Touch</span>
          <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.02em] font-bold text-text">
            Tell us about your project.
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-text-muted max-w-2xl">
            Fill in the form and a member of our team will reply within two working days. For urgent enquiries, contact us directly by email.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-[80px]">
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text mb-1.5">
                  Full name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className={`w-full px-4 py-3 border rounded-lg text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors ${errors.name ? 'border-red-500' : 'border-border'}`}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-text mb-1.5">
                  Company <span className="text-text-muted font-normal">(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={fields.company}
                  onChange={handleChange}
                  placeholder="Acme Ltd"
                  className="w-full px-4 py-3 border border-border rounded-lg text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text mb-1.5">
                  Email address <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3 border rounded-lg text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors ${errors.email ? 'border-red-500' : 'border-border'}`}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-text mb-1.5">
                  Phone <span className="text-text-muted font-normal">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={fields.phone}
                  onChange={handleChange}
                  placeholder="+44 7700 900000"
                  className="w-full px-4 py-3 border border-border rounded-lg text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-text mb-1.5">
                Project type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={fields.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
              >
                <option value="">Select a project type…</option>
                {PROJECT_TYPES.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-text mb-1.5">
                Project details <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={fields.message}
                onChange={handleChange}
                placeholder="Describe your project — location, approximate scale, target completion date, and any specific requirements."
                className={`w-full px-4 py-3 border rounded-lg text-sm text-text bg-white focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors resize-y ${errors.message ? 'border-red-500' : 'border-border'}`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
            </div>

            {submitStatus === 'error' && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                Something went wrong. Please try again or email us at info@sandowndevelopments.co.uk.
              </p>
            )}

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="bg-accent text-white px-8 py-3.5 rounded-lg text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {submitStatus === 'submitting' ? 'Sending…' : 'Send enquiry'}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="bg-white border border-border p-4 md:p-6 flex items-start gap-4 group hover:border-accent transition-all rounded-lg">
            <div className="bg-accent/10 p-3 rounded-full shrink-0">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1">Email us directly</h3>
              <p className="text-sm text-text-muted mb-2">Project proposals and partnership enquiries.</p>
              <a
                href="mailto:info@sandowndevelopments.co.uk"
                className="text-sm font-semibold text-accent hover:underline underline-offset-4 break-all"
              >
                info@sandowndevelopments.co.uk
              </a>
            </div>
          </div>

          <div className="bg-white border border-border p-4 md:p-6 flex items-start gap-4 group hover:border-secondary transition-all rounded-lg">
            <div className="bg-secondary/10 p-3 rounded-full shrink-0">
              <span className="material-symbols-outlined text-2xl">location_on</span>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1">Head office</h3>
              <p className="text-sm text-text-muted">
                11 Saint Andrews Drive,<br />
                Stoke-on-Trent, ST5 2NW
              </p>
              <span className="kicker text-secondary flex items-center gap-1 mt-2">
                Headquarters <span className="material-symbols-outlined text-sm">verified</span>
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-border min-h-[220px] flex-1">
            <iframe
              src="https://maps.google.com/maps?q=11+Saint+Andrews+Drive,+Stoke-on-Trent,+ST5+2NW,+UK&output=embed"
              title="Office location: 11 Saint Andrews Drive, Stoke-on-Trent, ST5 2NW"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-[80px] border-t border-border">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[32px] leading-8 md:leading-[40px] tracking-[-0.01em] font-bold mb-3 md:mb-4">What happens after you submit?</h2>
          <p className="text-sm md:text-[16px] leading-[20px] md:leading-[24px] text-text-muted max-w-xl mx-auto">
            We follow a clear four-step process from first contact to project start.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-base md:text-lg mb-3">1</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Review</h5>
            <p className="text-xs md:text-sm text-text-muted">We read your brief and assess scope within two working days.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-base md:text-lg mb-3">2</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Discovery Call</h5>
            <p className="text-xs md:text-sm text-text-muted">A short call to confirm feasibility and agree a timeline.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface flex items-center justify-center text-text-muted font-bold text-base md:text-lg mb-3">3</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Written Proposal</h5>
            <p className="text-xs md:text-sm text-text-muted">Itemised costs, programme, and resource plan in writing.</p>
          </div>
          <div className="flex flex-col items-center text-center px-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-surface flex items-center justify-center text-text-muted font-bold text-base md:text-lg mb-3">4</div>
            <h5 className="text-sm md:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.05em] font-semibold mb-2 uppercase">Project Start</h5>
            <p className="text-xs md:text-sm text-text-muted">Contract signed, site team assigned, and work begins.</p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-text">SANDOWN DEVELOPMENTS LTD</h3>
            <p className="text-sm md:text-base text-text-muted">11 Saint Andrews Drive, Stoke-on-Trent, ST5 2NW</p>
          </div>
          <a href="mailto:info@sandowndevelopments.co.uk" className="text-accent hover:underline text-sm md:text-base">
            info@sandowndevelopments.co.uk
          </a>
        </div>
      </section>
    </main>
  )
}
