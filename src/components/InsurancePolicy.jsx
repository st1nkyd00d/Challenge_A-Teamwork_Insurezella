import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const InsurancePolicy = () => {
  const onClick = () => {
    alert('Redirecting to proper page...');
  }
  const paragraphs = [
    "Start by thoroughly reading your health insurance policy documents. Familiarize yourself with the terms, coverage limits, and benefits it offers.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada erat vel lacus tempus facilisis. Phasellus ut odio sit amet ipsum convallis efficitur.",
    "Aliquam erat enim, rutrum non condimentum at, cursus id urna. Duis eget lorem dictum, finibus ipsum eu, congue arcu. Nam nec nulla at dolor pretium mollis sed in sapien."
  ];

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentParagraphIndex((prevIndex) =>
      prevIndex === 0 ? paragraphs.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentParagraphIndex((prevIndex) =>
      prevIndex === paragraphs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="flex flex-col items-center md:hidden bg-1 p-4">
      <h2 className="-ml-14 font-bold font-poppins text-7 text-lg">Understand Your Policy</h2>
      <div className="flex flex-row items-center mt-2">
        <button onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} className="mt-2 text-2 text-3xl" />
        </button>
        <p className="mx-6 font-light font-poppins text-1xs text-2">
          {paragraphs[currentParagraphIndex]}
        </p>
        <button onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} className="mt-2 text-2 text-3xl" />
        </button>
      </div>
      <div className="mt-4 w-full">
        <button className="bg-2 hover:bg-20 ml-10 px-5 py-1 rounded-md font-bold font-poppins text-1 text-2xs hover:text-2" onClick={onClick}>READ MORE</button>
      </div>
    </section>
  );
};

export default InsurancePolicy;
