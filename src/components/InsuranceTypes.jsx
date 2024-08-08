const InsuranceTypes = () => {
  return (
    <section className="md:flex flex-col items-center hidden bg-21 px-8 py-12">
      <h2 className="mb-12 font-bold font-poppins text-2xl text-4">Pick the insurance that suits your needs.</h2>
      <div className="flex flex-row flex-wrap justify-center items-center p-2 w-3/4 lg:w-4/5">
        <div className="flex flex-col items-center p-2 w-1/2 lg:w-1/3 lg:h-52 text-center">
          <img src="/assets/health-insurance-icon.png" alt="Icon of people under an umbrella" className="mb-6 w-12" />
          <h3 className="mb-2 lg:mb-4 font-bold font-poppins text-18 text-xl">Health Insurance</h3>
          <p className="font-poppins text-6 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy</p>
        </div>
        <div className="flex flex-col items-center p-2 w-1/2 lg:w-1/3 lg:h-52 text-center">
          <img src="/assets/medicare-icon.png" alt="Icon of a health cross under an umbrella" className="mb-6 w-12" />
          <h3 className="mb-2 lg:mb-4 font-bold font-poppins text-18 text-xl">Medicare Supplement</h3>
          <p className="font-poppins text-6 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy</p>
        </div>
        <div className="flex flex-col items-center mt-8 lg:mt-0 p-2 w-1/2 lg:w-1/3 lg:h-52 text-center">
          <img src="/assets/life-insurance-icon.png" alt="Icon of two hands almost touching by the waist, doing a circle around the silhouette of a person" className="mb-6 w-12" />
          <h3 className="mb-2 lg:mb-4 font-bold font-poppins text-18 text-xl">Life Insurance</h3>
          <p className="font-poppins text-6 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy</p>
        </div>
        <div className="flex flex-col items-center mt-8 p-2 w-1/2 lg:w-1/3 lg:h-52 text-center">
          <img src="/assets/medicare-advantage-icon.png" alt="Icon of an ID card" className="mb-6 w-12" />
          <h3 className="mb-2 lg:mb-4 font-bold font-poppins text-18 text-xl">Medicare Advantage</h3>
          <p className="font-poppins text-6 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy</p>
        </div>
        <div className="flex flex-col items-center mt-8 p-2 w-1/2 lg:w-1/3 lg:h-52 text-center">
          <img src="/assets/obamacare-icon.png" alt="Icon of an extended hand under a circle with the sign of a dollar" className="mb-6 w-12" />
          <h3 className="mb-2 lg:mb-4 font-bold font-poppins text-18 text-xl">ACA / Obamacare</h3>
          <p className="font-poppins text-6 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy</p>
        </div>
        <div className="flex flex-col items-center mt-8 p-2 w-1/2 lg:w-1/3 lg:h-52 text-center">
          <img src="/assets/short-term-icon.png" alt="Icon of a person next to a clock" className="mb-6 w-12" />
          <h3 className="mb-2 font-bold font-poppins text-18 text-xl">Short-Term Medical</h3>
          <p className="font-poppins text-6 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy</p>
        </div>
      </div>
    </section>
  )
}

export default InsuranceTypes
