import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'

const PlansTablet = () => {
  const onClick = () => {
    alert('Redirecting to proper plan...')
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const startX = useRef(0)
  const currentX = useRef(0)
  const startTime = useRef(0)
  const swipeThreshold = 50
  const timeThreshold = 125

  const cards = [
    {
      imgSrc: '/assets/doctor.webp',
      alt: 'Doctor explaining to woman with a baby',
      title: 'Health Insurance',
      description: 'Get the Coverage You Need Today. Speak with an Agent to Learn about Our Plan Options Now. Our Health Insurance Agency Provides You with Plans That Meet Your Needs.',
      buttonText: 'Compare Plans'
    },
    {
      imgSrc: '/assets/family-together.webp',
      alt: 'Happy family on a couch',
      title: 'Life Insurance',
      description: 'Life insurance allows you to save and build wealth over time while also protecting your family should the worst happen.',
      buttonText: 'Compare Plans'
    },
    {
      imgSrc: '/assets/medical-appointment.webp',
      alt: 'A doctor explaining some documents to a patient',
      title: 'Medicare Supplement',
      description: 'With Medicare supplements, you won\'t have medical cost surprises, which could wreck your budget. Medicare supplements can help protect your finances from high costs, which can destroy your nest egg.',
      buttonText: 'View Plans'
    },
    {
      imgSrc: '/assets/man-signing.webp',
      alt: 'A man signing a document',
      title: 'Medicare Advantage',
      description: 'Medicare Advantage Plans cover all Original Medicare services, and some offer drug, vision, hearing, dental, or wellness coverage.',
      buttonText: 'View Plans'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) >= cards.length ? 0 : prevIndex + 2)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return cards.length - 2
      } else if (prevIndex - 2 < 0) {
        return cards.length - 2
      } else {
        return prevIndex - 2
      }
    })
  }

  const handleTouchStart = (e) => { // Empieza a contar desde que se hace el tap
    startX.current = e.touches[0].clientX
    startTime.current = Date.now()
  }

  const handleTouchMove = (e) => { // Detecta el deslizamiento
    currentX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => { // Detecta cuando se deja de hacer el deslizamiento
    const deltaX = startX.current - currentX.current
    const deltaTime = Date.now() - startTime.current

    if (deltaTime < timeThreshold) { //Ignora los taps
      return
    }

    if (deltaX > swipeThreshold) { // Determina si se hace el deslizamiento o no en base a la distancia y el tiempo
      nextSlide()
    } else if (deltaX < -swipeThreshold) {
      prevSlide()
    }
  }

  return (
    <section className="md:flex flex-col items-center hidden p-2">
      <h2 className="font-bold font-poppins text-3xl text-4">We're here to help</h2>
      <div
        className="block lg:hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-row lg:flex-wrap lg:justify-center space-x-10 lg:space-x-0 p-8">
          {currentIndex === cards.length - 1 ? (
            <article key={currentIndex} className="flex flex-col items-start lg:px-8 w-1/2 lg:w-2/5">
              <img src={cards[currentIndex].imgSrc} alt={cards[currentIndex].alt} className="mb-6 w-96 h-48 lg:h-36 object-cover" />
              <div className="flex flex-col justify-between ml-4 p-2 h-full">
                <div>
                  <h3 className="mb-4 font-poppins font-semibold lg:font-bold text-4 text-base">{cards[currentIndex].title}</h3>
                  <p className="mb-6 font-poppins text-6 text-xs">{cards[currentIndex].description}</p>
                </div>
                <div className="flex flex-row items-center text-20">
                  <button className="font-normal font-poppins lg:font-medium text-xs" onClick={onClick}>{cards[currentIndex].buttonText}</button>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                </div>
              </div>
            </article>
          ) : (
            cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
              <article key={index} className="flex flex-col items-start lg:px-8 w-1/2 lg:w-2/5">
                <img src={card.imgSrc} alt={card.alt} className="mb-6 w-96 h-48 lg:h-36 object-cover" />
                <div className="flex flex-col justify-between ml-4 p-2 h-full">
                  <div>
                    <h3 className="mb-4 font-poppins font-semibold lg:font-bold text-4 text-base">{card.title}</h3>
                    <p className="mb-6 font-poppins text-6 text-xs">{card.description}</p>
                  </div>
                  <div className="flex flex-row items-center text-20">
                    <button className="font-medium font-poppins text-xs hover:text-23" onClick={onClick}>
                      {card.buttonText}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
        <div className="flex justify-center space-x-1 lg:hidden mt-6">
          {[0, 2].map((index) => (
            <div
              key={index}
              className={`flex items-center justify-center rounded-full w-2.5 h-2.5 ${currentIndex === index || (currentIndex === index + 1 && currentIndex !== cards.length - 1) ? 'bg-14 h-3 w-3' : 'bg-15'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="lg:flex flex-row flex-wrap justify-center space-x-0 md:hidden p-8">
        {cards.map((card, index) => (
          <article key={index} className="flex flex-col items-start px-8 w-2/5">
            <img src={card.imgSrc} alt={card.alt} className="mb-6 w-96 h-36 object-cover" />
            <div className="flex flex-col justify-between ml-4 p-2 h-full">
              <div>
                <h3 className="mb-4 font-bold font-poppins text-4 text-base">{card.title}</h3>
                <p className="mb-6 font-poppins text-6 text-xs">{card.description}</p>
              </div>
              <div className="flex flex-row items-center text-20">
                <button className="font-medium font-poppins text-xs hover:text-23" onClick={onClick}>
                  {card.buttonText}
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-xs" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PlansTablet
