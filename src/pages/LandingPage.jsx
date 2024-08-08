import AboutUs from '../components/AboutUs'
import Cards from '../components/Cards'
import Enrollments from '../components/Enrollments'
import Features from '../components/Features'
import Footer from '../components/Footer'
import FooterLg from '../components/FooterLg'
import Header from '../components/Header'
import Hero from '../components/Hero'
import InsurancePolicy from '../components/InsurancePolicy'
import InsurancePolicyTablet from '../components/InsurancePolicyTablet'
import InsuranceTypes from '../components/InsuranceTypes'
import Nav from '../components/Nav'
import Plans from '../components/Plans'
import PlansTablet from '../components/PlansTablet'
import Testimonials from '../components/Testimonials'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <Hero />
      <Features />
      <Cards />
      <InsurancePolicy />
      <AboutUs />
      <Plans />
      <InsuranceTypes />
      <InsurancePolicyTablet />
      <PlansTablet />
      <Enrollments />
      <Testimonials />
      <Footer />
      <FooterLg />
    </>
  )
}

export default LandingPage
