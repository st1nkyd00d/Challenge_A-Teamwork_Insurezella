import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock'
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUmbrella, faFileInvoiceDollar, faPrescriptionBottleMedical, faIdCard, faUserShield } from '@fortawesome/free-solid-svg-icons'

const FooterLg = () => {
  return (
    <footer className="lg:block relative z-50 hidden">
      <div className="relative z-50 bg-white shadow-20 shadow-custom2 m-auto mt-4 px-2 py-3 w-[90%]">
        <div className="flex flex-row">
          <div className="flex flex-col flex-1 justify-center items-center px-2">
            <img src="/assets/logo.png" alt="Insurezella logo" className="rounded-md w-12" />
            <p className="px-4 py-4 font-light font-poppins text-4 text-center text-sm">
              "Discover the Peace of Mind You Deserve with Insurezella "Your Reliable Insurance Umbrella"
            </p>
            <div className="flex space-x-5 mr-10 text-9 text-xl">
              <a href="https://www.facebook.com/people/Insurezella/100088031780976/" className="hover:text-19"><FontAwesomeIcon icon={faFacebook} /> </a>
              <a href="https://x.com/insurezella" className="hover:text-19" ><FontAwesomeIcon icon={faTwitter} /> </a>
              <a href="https://www.instagram.com/insurezella/" className="hover:text-19"><FontAwesomeIcon icon={faInstagram} /> </a>
              <a href="https://www.linkedin.com/company/insurezella/" className="hover:text-19"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
          <div className="flex flex-col flex-1 items-center px-2">
            <h3 className="mb-3 font-poppins font-semibold text-2xl text-9 -5">Services</h3>
            <ul className="space-y-2 font-light font-poppins text-sm">
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
          <div className="flex flex-col flex-1 justify-start items-center px-2 text-4">
            <h3 className="mb-3 font-poppins font-semibold text-2xl text-9">Company</h3>
            <ul className="space-y-2 font-light font-poppins text-sm">
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
          <div className="flex flex-col flex-1 justify-start items-center px-2 text-4">
            <h3 className="mb-3 font-poppins font-semibold text-2xl text-9">Get In Touch</h3>
            <ul className="space-y-2 font-light font-poppins text-sm">
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
      </div>
      <div className="top-[210px] right-0 left-0 z-40 absolute bg-13 h-20"></div>
    </footer>
  )
}

export default FooterLg
