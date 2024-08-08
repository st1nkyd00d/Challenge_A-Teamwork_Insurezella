import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcaseMedical, faFileInvoiceDollar, faHospital, faIdCard, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const startX = useRef(0)
  const currentX = useRef(0)
  const startTime = useRef(0)
  const swipeThreshold = 50
  const timeThreshold = 75

  const cards = [
    { icon: faBriefcaseMedical, title: 'Health Insurance' },
    { icon: faIdCard, title: 'Medicare Supplement' },
    { icon: faHospital, title: 'Medicare Advantage' },
    { icon: faFileInvoiceDollar, title: 'Life Insurance' },
    { icon: faUserCheck, title: 'ACA Obamacare' },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) >= cards.length ? 0 : prevIndex + 2)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return cards.length - 1
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
    <section
      className="md:block hidden p-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex justify-center items-center space-x-8 lg:space-x-5 lg:hidden">
        {currentIndex === cards.length - 1 ? (
          <article key={currentIndex} className="flex flex-col justify-center items-center shadow-27 shadow-custom3 px-6 rounded-lg w-52 lg:w-40 h-52 lg:h-40 text-center">
            <FontAwesomeIcon icon={cards[currentIndex].icon} className="text-18 text-4xl" />
            <h3 className="mt-4 font-poppins font-semibold text-lg break-words">{cards[currentIndex].title}</h3>
          </article>
        ) : (
          cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
            <article key={index} className="flex flex-col justify-center items-center shadow-27 shadow-custom3 px-6 rounded-lg w-52 lg:w-40 h-52 lg:h-40 text-center">
              <FontAwesomeIcon icon={card.icon} className="text-18 text-4xl" />
              <h3 className="mt-4 font-poppins font-semibold text-lg break-words">{card.title}</h3>
            </article>
          ))
        )}
      </div>
      <div className="flex justify-center space-x-1 lg:hidden mt-6">
        {[0, 2, 4].map((index) => (
          <div
            key={index}
            className={`flex items-center justify-center rounded-full w-2.5 h-2.5 ${currentIndex === index || (currentIndex === index + 1 && currentIndex !== cards.length - 1) ? 'bg-14 h-3 w-3' : 'bg-15'}`}
          ></div>
        ))}
      </div>
      <div className="lg:flex flex-row justify-center items-center space-x-8 lg:space-x-5 md:hidden">
        {cards.map((card, index) => (
          <article key={index} className="flex flex-col justify-center items-center shadow-27 shadow-custom3 px-6 rounded-lg w-40 h-40 text-center">
            <FontAwesomeIcon icon={card.icon} className="text-18 text-4xl" />
            <h3 className="mt-4 font-poppins font-semibold text-lg break-words">{card.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Cards


