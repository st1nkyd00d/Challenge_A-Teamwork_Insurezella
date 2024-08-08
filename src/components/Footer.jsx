import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock'
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUmbrella, faFileInvoiceDollar, faPrescriptionBottleMedical, faIdCard, faUserShield } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="relative z-50 lg:hidden pb-10">
      <div className="relative py-4">
        <div className="relative z-50 flex flex-row bg-white shadow-1 shadow-custom2 md:py-5 p-2 w-[90%]">
          <div className="flex flex-col justify-center items-center w-1/2">
            <img src="/assets/logo.png" alt="Insurezella logo" className="rounded-md w-12 md:w-16" />
            <p className="px-4 md:px-20 py-4 font-light font-poppins md:font-light text-1xs text-4 text-center md:text-sm">
              "Discover the Peace of Mind You Deserve with Insurezella "Your Reliable Insurance Umbrella"
            </p>
            <div className="flex space-x-3 md:space-x-5 mr-8 md:mr-12 text-9 md:text-xl">
              <a href="https://www.facebook.com/people/Insurezella/100088031780976/" className="hover:text-19"><FontAwesomeIcon icon={faFacebook} /> </a>
              <a href="https://x.com/insurezella" className="hover:text-19" ><FontAwesomeIcon icon={faTwitter} /> </a>
              <a href="https://www.instagram.com/insurezella/" className="hover:text-19"><FontAwesomeIcon icon={faInstagram} /> </a>
              <a href="https://www.linkedin.com/company/insurezella/" className="hover:text-19"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          <div className="flex flex-col items-center px-2 w-1/2 text-4">
            <h3 className="mb-3 md:mb-5 font-poppins font-semibold text-9 text-base md:text-xl">Services</h3>
            <ul className="space-y-2 md:ml-20 font-light font-poppins text-1xs md:text-sm">
              <li className="flex items-center hover:text-24 whitespace-nowrap">
                <FontAwesomeIcon icon={faUmbrella} flip="horizontal" className="w-6 text-9" />
                <a href="#" className="ml-2">Health Insurance</a>
              </li>
              <li className="flex items-center hover:text-24 whitespace-nowrap">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-6 text-9" />
                <a href="#" className="ml-2">Life Insurance</a>
              </li>
              <li className="flex items-center hover:text-24 whitespace-nowrap">
                <FontAwesomeIcon icon={faPrescriptionBottleMedical} className="w-6 text-9" />
                <a href="#" className="ml-2">Medicare Supplement</a>
              </li>
              <li className="flex items-center hover:text-24 whitespace-nowrap">
                <FontAwesomeIcon icon={faIdCard} className="w-6 text-9" />
                <a href="#" className="ml-2">Medicare Advantage</a>
              </li>
              <li className="flex items-center hover:text-24 whitespace-nowrap">
                <FontAwesomeIcon icon={faUserShield} className="w-6 text-9" />
                <a href="#" className="ml-2">(ACA) Obamacare</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="top-52 md:top-[265px] right-0 left-0 z-40 absolute bg-13 md:bg-22 -mt-10 h-20 md:h-24"></div>
      </div>
      <div className="relative z-50 flex flex-row justify-between bg-white shadow-14 shadow-custom2 md:shadow-23 mt-4 ml-auto px-2 py-3 md:py-5 w-[90%] text-4">
        <div className="flex flex-col flex-1 justify-start items-center px-2 w-1/2">
          <h3 className="md:mr-8 mb-3 md:mb-8 font-poppins font-semibold text-9 md:text-2xl">Company</h3>
          <ul className="space-y-2 font-light font-poppins text-1xs md:text-sm">
            <li className="flex items-center whitespace-nowrap">
              <a href="#" className="hover:text-24">About Us</a>
            </li>
            <li className="flex items-center whitespace-nowrap">
              <a href="#" className="hover:text-24">Careers</a>
            </li>
            <li className="flex items-center whitespace-nowrap">
              <a href="#" className="hover:text-24">Industry news</a>
            </li>
            <li className="flex items-center whitespace-nowrap">
              <a href="#" className="hover:text-24">Privacy Policy</a>
            </li>
            <li className="flex items-center whitespace-nowrap">
              <a href="#" className="hover:text-24">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-1 justify-start items-center px-2 w-1/2 text-4">
          <h3 className="md:mr-auto mb-3 font-poppins font-semibold text-9 md:text-2xl">Get In Touch</h3>
          <ul className="space-y-2 md:mt-2 mr-24 ml-0 font-light font-poppins text-1xs md:text-sm">
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} flip="horizontal" className="text-9" />
              <a href="mailto:support@insurezella.com">Email: support@insurezella.com</a>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-9" />
              <a href="tel:+18772270774">Tel: +18772270774</a>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faClock} className="text-9" />
              <span>Hours: Mon-Fri 9:00AM-5:00PM</span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faAddressBook} className="text-9" />
              <span>300 SE 2nd Street Suite 600 Ft. Lauderdale FL 33301</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
