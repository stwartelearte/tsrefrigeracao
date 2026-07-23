import { motion } from 'framer-motion'
import { audiences } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Audiences() {
  return (
    <section className="section-space bg-[#f4f9fd]">
      <div className="container-shell">
        <SectionHeading eyebrow="Onde atendemos" title="Atendemos residências e empresas" description="Soluções completas para casas, apartamentos, escritórios, lojas, clínicas, consultórios, condomínios, empresas e indústrias." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map(({ icon: Icon, title, position }, index) => (
            <motion.article key={title} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className={`audience-card group ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="gallery-sprite h-full w-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundPosition: position }} role="img" aria-label={title} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071d49]/95 via-[#071d49]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white"><span className="mb-3 grid size-10 place-items-center rounded-xl bg-white/15 backdrop-blur"><Icon className="size-5" /></span><h3 className="font-extrabold leading-tight">{title}</h3></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
