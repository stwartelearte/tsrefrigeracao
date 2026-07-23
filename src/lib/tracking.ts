type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    dataLayer?: unknown[]
    fbq?: (...args: unknown[]) => void
  }
}

export function trackEvent(name: string, params: EventParams = {}) {
  window.dataLayer?.push({ event: name, ...params })
  window.fbq?.('trackCustom', name, params)
}

export function initializeTracking() {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
  const pixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined

  if (gaId) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
    document.head.appendChild(script)
    window.dataLayer = window.dataLayer ?? []
    const gtag = (...args: unknown[]) => window.dataLayer?.push(args)
    gtag('js', new Date())
    gtag('config', gaId)
  }

  if (pixelId) {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
    const queue: unknown[][] = []
    window.fbq = (...args: unknown[]) => queue.push(args)
    window.fbq('init', pixelId)
    window.fbq('track', 'PageView')
  }
}
