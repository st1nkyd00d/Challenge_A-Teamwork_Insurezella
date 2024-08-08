const Hero = () => {
  const handleOnClick = () => {
    alert('Redirecting to proper page...');
  };

  return (
    <section className="relative before:z-0 before:absolute before:inset-0 flex flex-col justify-center items-center bg-150 bg-custom-sm bg-hero-mobile md:bg-hero-tablet md:bg-130 md:bg-custom-md lg:bg-100 lg:bg-custom-lg before:bg-gray-600 md:before:opacity-0 before:opacity-20 p-4 h-56 md:h-[420px]">
      <div className="relative z-10 flex flex-col justify-center items-start md:ml-4 lg:ml-16">
        <h1 className="md:hidden text-shadow-lg mb-4 font-bold font-poppins text-2 text-xl">
          <span className="block -mb-2">LOOKING FOR</span>
          <span className="block">HEALTH INSURANCE?</span>
        </h1>
        <h1 className="md:block hidden mb-4 font-bold font-poppins text-26 text-3.5xl">
          <span className="block -mb-2">YOUR GUIDE TO</span>
          <span className="block">QUALITY COVERAGE</span>
        </h1>
        <p className="md:hidden text-shadow-xl mr-36 font-light font-poppins text-2 text-2xs">
          You can sign up for or modify health plans if you experience specific
          life changes or income fluctua&shy;tions or are eligible for Medicaid
          or CHIP.
        </p>
        <p className="md:block hidden md:mr-[400px] lg:mr-[600px] font-light font-poppins md:font-normal text-17 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="mt-6 md:mt-14">
          <button className="md:hidden bg-3 hover:bg-15 px-3 py-1 rounded-2xl font-bold font-poppins text-2 text-2xs" onClick={handleOnClick}>
            GET STARTED
          </button>
          <button className="md:block hidden bg-3 hover:bg-15 px-6 py-1.5 rounded-2xl font-bold font-poppins text-2 text-base" onClick={handleOnClick}>
            FIND PLANS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
