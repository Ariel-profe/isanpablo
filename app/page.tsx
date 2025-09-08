import { BentoGrid } from '@/components/homepage/bento-grid'
import { Contracts } from '@/components/homepage/contracts'
import { Features } from '@/components/homepage/features'
import { Hero } from '@/components/homepage/hero'
import { Lema } from '@/components/homepage/lema'

const Home = () => {
  return (
    <section className='container mx-auto'>
      <Hero />
      <Lema />
      <Features />
      <BentoGrid />
      <Contracts />
    </section>
  )
}

export default Home