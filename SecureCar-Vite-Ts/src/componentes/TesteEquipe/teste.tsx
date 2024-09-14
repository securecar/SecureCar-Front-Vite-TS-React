import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { CardTestemunhoType } from '../Testemunhos/CardTestemunho/card_testemunho';


type TesteProps = {
    testemunhos: CardTestemunhoType[];
    
}
const Carousel = ({ testemunhos} : TesteProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testemunhos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testemunhos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel max-w-screen-lg w-full  flex justify-between gap-5 m-auto items-center">
      <button className='h-10 w-10 bg-white rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-md' onClick={prevSlide}><FontAwesomeIcon className='hover:scale-125 transition-all duration-300 h-6' icon={faArrowLeftLong} color='#4a90e2' /></button>


      <div className="carousel-content">
        {testemunhos.map((testemunho, index) => (
          <div
            key={index}
            className={`slide py-4 ${index === currentIndex ? 'block' : 'hidden'}`}
          >
            <div className=" flex gap-5 items-center w-full h-max p-5 rounded">
                <img className="size-24 object-cover rounded-full" src={testemunho.imgTestemunho} alt="" />
                <p className="text-black text-center text-[16px] italic">"{testemunho.txtTestemunho}"</p>
            </div>
          </div>
        ))}
      </div>

      <button className='h-10 w-10 bg-white rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-md' onClick={nextSlide}><FontAwesomeIcon className=' h-6' icon={faArrowRightLong} color='#4a90e2'/></button>
    </div>
  );
};

export default Carousel;
