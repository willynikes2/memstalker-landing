import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import DemoVideo from '@/components/DemoVideo'
import ComparisonTable from '@/components/ComparisonTable'
import Privacy from '@/components/Privacy'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <DemoVideo />
      <ComparisonTable />
      <Privacy />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
