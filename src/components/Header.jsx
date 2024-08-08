import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-center items-center bg-1 md:bg-15 lg:bg-13 md:h-16 lg:h-12">
      <div className="relative flex justify-between items-center w-full h-12">
        <img
          src="/assets/logo.png"
          alt="Insurezella Logo"
          className="top-2 md:top-1 left-4 z-10 absolute lg:hidden w-16 md:w-20"
        />
        <div className="flex items-center ml-[5.5rem] md:ml-28 whitespace-nowrap">
          <nav>
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-1 text-2 text-l md:text-2xl ${isMenuOpen ? 'bg-20' : ''}`}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            {isMenuOpen && (
              <ul className="top-12 left-0 z-20 absolute bg-white shadow-lg w-full font-poppins">
                <li className="border-gray-200 border-b">
                  <a href="#home" className="block px-4 py-2 text-gray-700 text-sm">Home</a>
                </li>
                <li className="border-gray-200 border-b">
                  <a href="#find-insurance" className="block px-4 py-2 text-gray-700 text-sm">Find Insurance</a>
                </li>
                <li className="border-gray-200 border-b">
                  <a href="#learn" className="block px-4 py-2 text-gray-700 text-sm">Learn</a>
                </li>
                <li className="border-gray-200 border-b">
                  <a href="#about" className="block px-4 py-2 text-gray-700 text-sm">About</a>
                </li>
              </ul>
            )}
          </nav>
          <span className="ml-2 font-poppins font-semibold text-1xs text-2 md:text-sm lg:text-lg">Want to Connect with us?</span>
          <div className="flex md:flex-row flex-col md:items-center ml-2 md:ml-0 lg:ml-4">
            <div className="flex items-center mb-2 md:mb-0 md:ml-20">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1 text-2 text-2xs lg:text-sm md:text-1xs" />
              <a
                href="mailto:support@insurezella.com"
                className="mt-1 md:mt-0 font-poppins font-semibold lg:font-normal text-2 text-3xs md:text-1xs lg:text-xs"
              >
                Mail us at: support@insurezella.com
              </a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-1 md:ml-4 text-2 text-2xs lg:text-sm md:text-1xs" />
              <a href="tel:+1877-227-0774" className="mt-1 md:mt-0 font-poppins font-semibold lg:font-normal text-2 text-3xs md:text-1xs lg:text-xs">
                Call us: (877) 227 0774
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
