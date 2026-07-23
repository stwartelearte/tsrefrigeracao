import { Mail, Phone, Snowflake } from 'lucide-react'
import { Brand } from './Brand'
import { EMAIL, PHONE_DISPLAY } from '../lib/constants'

const quickLinks = [['Início', '#inicio'], ['Sobre', '#sobre'], ['Serviços', '#servicos'], ['Portfólio', '#portfolio'], ['Contato', '#contato']]
const serviceLinks = ['Instalação', 'Manutenção preventiva', 'Manutenção corretiva', 'Limpeza e higienização', 'Atendimento residencial', 'Atendimento empresarial']

export function Footer() {
  return (
    <footer className="bg-[#041331] text-blue-100/70">
      <div className="container-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_.7fr_1fr_1.1fr]">
        <div><Brand inverse /><p className="mt-5 max-w-sm text-sm leading-7">Instalação, manutenção e higienização de ar-condicionado com foco em qualidade, segurança e no seu conforto.</p><div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-200"><Snowflake className="size-4" /> Climatização com confiança</div></div>
        <div><h3 className="footer-title">Links rápidos</h3><ul className="footer-list">{quickLinks.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul></div>
        <div><h3 className="footer-title">Nossos serviços</h3><ul className="footer-list">{serviceLinks.map((label) => <li key={label}><a href="#servicos">{label}</a></li>)}</ul></div>
        <div><h3 className="footer-title">Contato e tecnologias</h3><ul className="footer-list"><li><a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, '')}`} className="flex items-center gap-2"><Phone className="size-4" />{PHONE_DISPLAY}</a></li><li><a href={`mailto:${EMAIL}`} className="flex items-start gap-2 break-all"><Mail className="mt-1 size-4 shrink-0" />{EMAIL}</a></li><li className="pt-2 text-xs uppercase tracking-widest text-blue-200/45">Preparado para Google Analytics, Meta Pixel e WhatsApp Business</li></ul></div>
      </div>
      <div id="privacidade" className="border-t border-white/10"><div className="container-shell flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} TS Refrigeração &amp; Climatização. Todos os direitos reservados.</p><details className="max-w-xl"><summary className="cursor-pointer font-semibold text-blue-100">Política de privacidade</summary><p className="mt-2 leading-5">Os dados enviados pelo formulário são usados exclusivamente para responder à sua solicitação e são encaminhados ao WhatsApp somente após seu consentimento.</p></details></div></div>
    </footer>
  )
}
