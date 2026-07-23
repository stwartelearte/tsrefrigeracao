import { useEffect } from 'react'
import { Audiences } from './components/Audiences'
import { ContactForm } from './components/ContactForm'
import { Differentials } from './components/Differentials'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { WhatsAppButton } from './components/WhatsAppButton'
import { WorkWithUs } from './components/WorkWithUs'
import { EMAIL, PHONE_NUMBER } from './lib/constants'
import { initializeTracking } from './lib/tracking'

export default function App() {
  useEffect(() => {
    initializeTracking()
    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'HVACBusiness',
      name: 'TS Refrigeração & Climatização',
      description: 'Instalação, manutenção, limpeza e higienização de ar-condicionado para residências e empresas.',
      telephone: `+${PHONE_NUMBER}`, email: EMAIL,
      contactPoint: { '@type': 'ContactPoint', telephone: `+${PHONE_NUMBER}`, contactType: 'customer service', availableLanguage: 'Portuguese' },
    })
    document.head.appendChild(schema)
    return () => schema.remove()
  }, [])

  return (
    <>
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Differentials />
        <Audiences />
        <Process />
        <Portfolio />
        <WorkWithUs />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
