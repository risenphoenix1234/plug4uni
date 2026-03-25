// pages/index.tsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import HowItWorks from '../components/Howitworks'
import FreshListings from '../components/Freshlistings'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <FreshListings />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}