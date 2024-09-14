import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type TesteProps = {
    images: string[];
    
}
const Carousel = ({ images} : TesteProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel w-full flex justify-center gap-5">
      <button onClick={prevSlide}><FontAwesomeIcon className='hover:scale-125 transition-all duration-300 h-6' icon={faArrowLeftLong} color='#4a90e2' /></button>


      <div className="carousel-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide py-4 ${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <img className='rounded-lg h-96 w-96 object-cover' src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button onClick={nextSlide}><FontAwesomeIcon className='hover:scale-125 transition-all duration-300 h-6' icon={faArrowRightLong} color='#4a90e2'/></button>
    </div>
  );
};

export default Carousel;
