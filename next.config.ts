import type { NextConfig } from 'next'

const PRODUCTION_ORIGIN = 'https://sandowndevelopments.co.uk'

// Content-Security-Policy built as a single line for the header value
const csp = [
  "default-src 'self'",
  // Next.js injects inline scripts for hydration — unsafe-inline is required without a nonce setup
  "script-src 'self' 'unsafe-inline'",
  // Inline styles are used by Next.js and Tailwind; Google Fonts stylesheet lives on googleapis.com
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Actual font files are served from gstatic.com
  "font-src 'self' https://fonts.gstatic.com",
  // Allow images from self, data URIs, and the Google user-content CDN used for project images
  "img-src 'self' data: https://lh3.googleusercontent.com",
  // Restrict fetch/XHR to same origin only
  "connect-src 'self'",
  // No plugins (Flash etc.)
  "object-src 'none'",
  // Allow Google Maps embeds; block everything else
  "frame-src https://www.google.com/maps/ https://maps.google.com/",
  // Prevents this page from being embedded by other origins (CSP-level clickjack protection)
  "frame-ancestors 'self'",
  // Only allow form submissions to same origin
  "form-action 'self'",
  // Block mixed content upgrades
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  // Prevents XSS by controlling which resources the browser is allowed to load
  {
    key: 'Content-Security-Policy',
    value: csp,
  },
  // Prevents this page from being loaded in an iframe by a different origin (clickjacking)
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Stops the browser from guessing (sniffing) the MIME type, preventing MIME-confusion attacks
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Controls how much referrer information is sent with requests to other origins
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Restricts cross-origin requests to this site's own domain only
  {
    key: 'Access-Control-Allow-Origin',
    value: PRODUCTION_ORIGIN,
  },
  {
    key: 'Access-Control-Allow-Methods',
    value: 'GET, POST, OPTIONS',
  },
  {
    key: 'Access-Control-Allow-Headers',
    value: 'Content-Type, Authorization',
  },
  // Forces HTTPS for 1 year and includes subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // Prevents cross-origin reads of sensitive resources
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
  // Disables browser features/APIs not used by this site
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
]

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/aida-public/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply to every route
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
