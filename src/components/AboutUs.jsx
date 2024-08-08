import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'

const AboutUs = () => {
  const onClick = () => {
    alert('Redirecting to proper page...');
  }
  return (
    <section className="md:flex lg:flex-row flex-col lg:justify-center items-center hidden p-10">
      <img src="/assets/committed-help.webp" alt="Two women smiling" className="mb-10 w-[450px] lg:w-[400px] self-start lg:contrast-125" />
      <div className="flex flex-col items-start ml-64 lg:ml-0 px-8 py-4 w-3/4 lg:w-1/2">
        <h2 className="mb-8 pr-8 font-bold font-poppins text-3xl text-4 text-start leading-tight">Committed to help you find the right plan</h2>
        <p className="mr-16 mb-10 font-poppins text-6 text-xs">
          Insurance is an important financial tool that can help you protect yourself and your loved ones from financial losses in the event of an unexpected
          event. It is important to consider your individual needs and circumstances when choosing the right insurance coverage for you and your family.
        </p>
        <button className="bg-20 hover:bg-19 mb-10 px-10 py-1.5 rounded-3xl font-normal font-poppins text-2 text-sm" onClick={onClick}>ABOUT INSUREZELLA</button>
        <div className="flex flex-row w-2/3">
          <div className="flex flex-row items-center space-x-3 pr-3">
            <FontAwesomeIcon icon={faHandHoldingDollar} className="text-18 text-3xl" />
            <p className="font-bold font-poppins text-4 text-xs">Save Money Compare Plans</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <FontAwesomeIcon icon={faUsersRectangle} className="text-18 text-3xl" />
            <p className="font-bold font-poppins text-4 text-xs">Licensed Agents</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
