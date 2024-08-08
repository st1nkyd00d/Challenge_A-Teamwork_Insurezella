import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="lg:flex flex-row items-center hidden p-2">
      <div className="w-1/3">
        <img src="/assets/logo.png" alt="Insurezella Logo" className="ml-10 rounded-lg w-12" />
      </div>
      <div className="flex justify-center w-1/3 text-4">
        <nav>
          <ul className="flex flex-row space-x-3 font-poppins font-semibold text-1xs">
            <li className="relative pr-3 last:pr-0">
              <div className="flex items-center border-25 text-25 hover:text-blue-500 underline-custom">
                Home
                <span className="top-1/2 right-0 absolute border-25 border-r-[2px] h-1/2 transform -translate-y-1/2"></span>
              </div>
            </li>
            <li className="relative pr-3 last:pr-0">
              <div className="flex items-center hover:text-blue-500">
                Find Insurance
                <button onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
                </button>
                <span className="top-1/2 right-0 absolute border-25 border-r-[2px] h-1/2 transform -translate-y-1/2"></span>
              </div>
              {isMenuOpen && (
                <ul className="z-10 absolute border-gray-300 bg-2 mt-2 border rounded-lg w-48">
                  <li className="hover:bg-10 px-4 py-2">Option 1</li>
                  <li className="hover:bg-10 px-4 py-2">Option 2</li>
                  <li className="hover:bg-10 px-4 py-2">Option 3</li>
                  <li className="hover:bg-10 px-4 py-2">Option 4</li>
                </ul>
              )}
            </li>
            <li className="relative pr-3 last:pr-0">
              <div className="flex items-center hover:text-blue-500">
                Learn
                <span className="top-1/2 right-0 absolute border-25 border-r-[2px] h-1/2 transform -translate-y-1/2"></span>
              </div>
            </li>
            <li className="relative pr-3 last:pr-0 hover:text-blue-500">
              About
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-end w-1/3">
        <div className="flex items-center text-2">
          <a href='tel:+18772270774' className="bg-24 hover:bg-5 px-3 py-2.5 rounded-2xl font-poppins font-semibold text-1xs">
            Call us now
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
          </a>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
