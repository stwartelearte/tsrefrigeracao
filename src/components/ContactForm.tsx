import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react'
import { EMAIL, PHONE_DISPLAY, whatsappUrl } from '../lib/constants'
import { trackEvent } from '../lib/tracking'
import { SectionHeading } from './SectionHeading'
import { SnowflakeEffect } from './SnowflakeEffect'

type Fields = { name: string; phone: string; email: string; audience: string; service: string; message: string; consent: boolean; website: string }
type Errors = Partial<Record<keyof Fields, string>>
const initial: Fields = { name: '', phone: '', email: '', audience: '', service: '', message: '', consent: false, website: '' }

const maskPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function validate(fields: Fields): Errors {
  const errors: Errors = {}
  if (fields.name.trim().length < 3) errors.name = 'Informe seu nome completo.'
  if (fields.phone.replace(/\D/g, '').length < 10) errors.phone = 'Informe um telefone válido com DDD.'
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Informe um e-mail válido.'
  if (!fields.audience) errors.audience = 'Selecione o tipo de atendimento.'
  if (!fields.service) errors.service = 'Selecione o serviço desejado.'
  if (fields.message.trim().length < 10) errors.message = 'Conte um pouco mais sobre o que você precisa.'
  if (!fields.consent) errors.consent = 'É necessário concordar para continuar.'
  return errors
}

export function ContactForm() {
  const [fields, setFields] = useState(initial)
  const [errors, setErrors] = useState<Errors>({})
  const lastSubmit = useRef(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { trackEvent('contact_section_view'); observer.disconnect() }
    }, { threshold: .35 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (fields.website) return
    const nextErrors = validate(fields)
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return }
    if (Date.now() - lastSubmit.current < 5000) { setErrors({ message: 'Aguarde alguns segundos antes de enviar novamente.' }); return }
    lastSubmit.current = Date.now()
    const clean = (value: string) => value
      .replace(/[<>]/g, '')
      .split('')
      .filter((character) => character.charCodeAt(0) >= 32)
      .join('')
      .trim()
    const message = [
      'Olá, gostaria de solicitar um atendimento.', '',
      `*Nome:* ${clean(fields.name)}`, `*Telefone:* ${clean(fields.phone)}`,
      fields.email ? `*E-mail:* ${clean(fields.email)}` : '',
      `*Tipo:* ${clean(fields.audience)}`, `*Serviço:* ${clean(fields.service)}`,
      `*Mensagem:* ${clean(fields.message)}`,
    ].filter(Boolean).join('\n')
    trackEvent('form_submit', { service: fields.service, audience: fields.audience })
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  const inputClass = 'form-input'
  return (
    <section ref={sectionRef} id="contato" className="section-space bg-white">
      <div className="container-shell">
        <SectionHeading eyebrow="Vamos conversar" title="Solicite seu atendimento" description="Preencha os dados e enviaremos sua solicitação organizada diretamente para o nosso WhatsApp." />
        <div className="grid overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-[0_25px_70px_rgba(10,53,96,.12)] lg:grid-cols-[.72fr_1.28fr]">
          <aside className="contact-aside relative overflow-hidden p-7 text-white sm:p-10">
            <SnowflakeEffect />
            <div className="relative z-10"><span className="eyebrow border-white/15 bg-white/10 text-cyan-200">Atendimento direto</span><h3 className="mt-6 text-3xl font-extrabold leading-tight">Seu conforto começa com uma boa orientação.</h3><p className="mt-4 leading-7 text-blue-100/75">Conte sua necessidade. Nossa equipe avalia o cenário e ajuda você a escolher a solução adequada.</p>
              <div className="mt-9 space-y-4">
                <a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, '')}`} className="contact-link"><Phone className="size-5" /><span><small>Telefone e WhatsApp</small><strong>{PHONE_DISPLAY}</strong></span></a>
                <a href={`mailto:${EMAIL}`} className="contact-link break-all"><Mail className="size-5" /><span><small>E-mail</small><strong>{EMAIL}</strong></span></a>
              </div>
              <div className="mt-9 space-y-3 text-sm text-blue-100/80">{['Atendimento residencial', 'Atendimento empresarial', 'Resposta ágil pelo WhatsApp'].map((item) => <p key={item} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-cyan-300" />{item}</p>)}</div>
            </div>
          </aside>
          <form onSubmit={submit} noValidate className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10">
            <label className="form-label">Nome completo *<input className={inputClass} value={fields.name} onChange={(e) => update('name', e.target.value)} autoComplete="name" />{errors.name && <span className="form-error">{errors.name}</span>}</label>
            <label className="form-label">Telefone *<input className={inputClass} value={fields.phone} onChange={(e) => update('phone', maskPhone(e.target.value))} inputMode="tel" autoComplete="tel" placeholder="(85) 99999-9999" />{errors.phone && <span className="form-error">{errors.phone}</span>}</label>
            <label className="form-label">E-mail <input type="email" className={inputClass} value={fields.email} onChange={(e) => update('email', e.target.value)} autoComplete="email" />{errors.email && <span className="form-error">{errors.email}</span>}</label>
            <label className="form-label">Tipo de atendimento *<select className={inputClass} value={fields.audience} onChange={(e) => update('audience', e.target.value)}><option value="">Selecione</option><option>Residencial</option><option>Empresarial</option></select>{errors.audience && <span className="form-error">{errors.audience}</span>}</label>
            <label className="form-label sm:col-span-2">Serviço desejado *<select className={inputClass} value={fields.service} onChange={(e) => update('service', e.target.value)}><option value="">Selecione</option><option>Instalação</option><option>Manutenção preventiva</option><option>Manutenção corretiva</option><option>Limpeza e higienização</option><option>Outro</option></select>{errors.service && <span className="form-error">{errors.service}</span>}</label>
            <label className="form-label sm:col-span-2">Como podemos ajudar? *<textarea className={`${inputClass} min-h-28 resize-y`} value={fields.message} onChange={(e) => update('message', e.target.value)} maxLength={500} />{errors.message && <span className="form-error">{errors.message}</span>}</label>
            <label className="hidden" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={fields.website} onChange={(e) => update('website', e.target.value)} /></label>
            <label className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:col-span-2"><input type="checkbox" checked={fields.consent} onChange={(e) => update('consent', e.target.checked)} className="mt-1 size-4 rounded border-slate-300 accent-[#0d75c6]" /><span>Concordo com o uso dos meus dados para retorno desta solicitação, conforme a <a href="#privacidade" className="font-semibold text-[#0879ad] underline underline-offset-2">política de privacidade</a>.</span></label>
            {errors.consent && <span className="form-error -mt-4 sm:col-span-2">{errors.consent}</span>}
            <button type="submit" className="btn-primary sm:col-span-2 sm:justify-self-start"><MessageCircle className="size-5" /> Enviar pelo WhatsApp <ArrowRight className="size-4" /></button>
          </form>
        </div>
      </div>
    </section>
  )
}
