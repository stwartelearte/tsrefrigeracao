import {
  Building2, CheckCircle2, Clock3, Factory, Gauge, Handshake,
  HeartHandshake, Home, ShieldCheck, Sparkles, Store, Stethoscope,
  ThumbsUp, ClipboardList, UserCheck, Users, Wrench, Zap,
} from 'lucide-react'

export const services = [
  { icon: Gauge, title: 'Instalação de Ar-Condicionado', description: 'Instalação completa, realizada com materiais de qualidade, segurança e atenção às especificações do fabricante.' },
  { icon: ShieldCheck, title: 'Manutenção Preventiva', description: 'Previna falhas, reduza o consumo de energia e aumente a vida útil do seu equipamento.' },
  { icon: Wrench, title: 'Manutenção Corretiva', description: 'Diagnóstico técnico e reparo eficiente para equipamentos com problemas de funcionamento.' },
  { icon: Sparkles, title: 'Limpeza e Higienização', description: 'Melhore a qualidade do ar e mantenha seu equipamento limpo, saudável e eficiente.' },
  { icon: Home, title: 'Atendimento Residencial', description: 'Soluções personalizadas para casas e apartamentos, proporcionando conforto e bem-estar.' },
  { icon: Building2, title: 'Atendimento Empresarial', description: 'Atendimento para empresas, escritórios, lojas, clínicas e diferentes segmentos comerciais.' },
]

export const differentials = [
  { icon: ThumbsUp, title: 'Qualidade', description: 'Cuidado técnico em cada detalhe.' },
  { icon: ShieldCheck, title: 'Segurança', description: 'Execução responsável e segura.' },
  { icon: HeartHandshake, title: 'Satisfação', description: 'Seu conforto é prioridade.' },
  { icon: Zap, title: 'Agilidade', description: 'Retorno e atendimento eficientes.' },
  { icon: Handshake, title: 'Compromisso', description: 'Prazos e acordos respeitados.' },
  { icon: UserCheck, title: 'Equipe qualificada', description: 'Profissionais preparados.' },
]

export const audiences = [
  { icon: Home, title: 'Casas e apartamentos', position: '0% 0%' },
  { icon: Building2, title: 'Escritórios', position: '50% 100%' },
  { icon: Store, title: 'Lojas e comércios', position: '100% 0%' },
  { icon: Stethoscope, title: 'Clínicas e consultórios', position: '100% 100%' },
  { icon: Factory, title: 'Empresas e indústrias', position: '0% 100%' },
]

export const processSteps = [
  { icon: Users, title: 'Entre em contato', description: 'Fale conosco pelo WhatsApp, telefone ou formulário.' },
  { icon: ClipboardList, title: 'Explique sua necessidade', description: 'Conte qual serviço precisa ou qual problema o equipamento apresenta.' },
  { icon: CheckCircle2, title: 'Receba orientação', description: 'Nossa equipe analisa sua necessidade e indica a melhor solução.' },
  { icon: Clock3, title: 'Agende o serviço', description: 'Definimos a data e realizamos o serviço com qualidade e segurança.' },
]

export const portfolio = [
  { title: 'Instalação residencial', category: 'Instalação', image: 'images/portfolio-installation.png' },
  { title: 'Limpeza de filtros', category: 'Higienização', image: 'images/portfolio-filters.png' },
  { title: 'Manutenção técnica', category: 'Manutenção', image: 'images/portfolio-maintenance.png' },
  { title: 'Unidades condensadoras', category: 'Equipamentos', image: 'images/portfolio-condensers.png' },
  { title: 'Ambiente empresarial', category: 'Climatização', image: 'images/portfolio-office.png' },
  { title: 'Conforto residencial', category: 'Residencial', image: 'images/portfolio-residential.png' },
]
