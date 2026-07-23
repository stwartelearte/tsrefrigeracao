import { motion } from 'framer-motion'
import { portfolio } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Portfolio() {
  return (
    <section id="portfolio" className="section-space bg-[#f4f9fd]">
      <div className="container-shell">
        <SectionHeading eyebrow="Na prática" title="Serviços realizados" description="Veja algumas das soluções que fazem parte do nosso dia a dia em climatização." />
        <div className="portfolio-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map(({ title, category, image }, index) => (
            <motion.article key={title} initial={false} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className={`portfolio-card group ${index === 0 || index === 5 ? 'lg:col-span-2' : ''}`}>
              <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a3c]/90 via-transparent to-transparent transition-colors group-hover:from-[#061a3c]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white"><span className="text-xs font-bold uppercase tracking-[.18em] text-cyan-200">{category}</span><h3 className="mt-1 text-xl font-extrabold">{title}</h3></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
