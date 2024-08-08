import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  const reviews = [
    {
      text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
      name: "Marina Tusa",
      title: "Housewife",
      image: "/assets/logo.png"
    },
    {
      text: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
      name: "John Doe",
      title: "Software Engineer",
      image: "/assets/logo.png"
    },
    {
      text: "Sed sed ipsum vitae erat hendrerit egestas eget vel lectus. Donec non sapien sit amet diam mollis vulputate. Aenean mattis vulputate vehicula. Vivamus eros urna, vehicula at enim vitae, hendrerit congue dui. Suspendisse vel elit faucibus, dapibus sapien eu, pulvinar diam.",
      name: "Jane Smith",
      title: "Teacher",
      image: "/assets/logo.png"
    }
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="md:hidden mb-4 py-4">
      <div className="flex flex-col items-center p-6">
        <h2 className="border-custom p-2 font-bold font-poppins text-4 text-lg">
          Our clients <span className="text-5">reviews</span>
        </h2>
        <p className="font-poppins text-2xs text-4 text-center">
          Condimentum rutrum placerat egestas condimentum mi eros. Eleifend cras quirntum Feugiat elit placerat. Diam tempor malesuada.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-2 p-4">
        <button onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} className="mr-8 text-1 text-3xl" />
        </button>
        <div className='relative shadow-custom rounded-md w-3/5'>
          <p className="mx-1 mt-4 px-2 py-4 font-bodoni font-bold text-2xs text-6 italic">
            {reviews[currentReviewIndex].text}
          </p>
          <div className="bottom-[-10px] left-0 absolute border-t-[10px] border-t-gray border-l-[10px] border-l-transparent w-0 h-0"></div>
        </div>
        <button onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} className="ml-8 text-1 text-3xl" />
        </button>
      </div>
      <div className="flex flex-row items-center ml-[88px]">
        <img src={reviews[currentReviewIndex].image} alt="Testimony Picture" className="mt-4 rounded-full w-8" />
        <div className='ml-1'>
          <p className="font-bold font-poppins text-1xs text-4 t-2">{reviews[currentReviewIndex].name}</p>
          <p className="font-light font-poppins text-2xs text-6 italic">{reviews[currentReviewIndex].title}</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
