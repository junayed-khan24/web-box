import React, { useState, useEffect } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useSwipeable } from "react-swipeable";
import img1 from '../../src/assets/assets/team.png'
import img2 from '../../src/assets/assets/team2.png'
import img3 from '../../src/assets/assets/team3.png'

const slides = [
  {
    image: img1,
    title: "Speak Smart",
    subtitle: "Learn English easily and speak first",
  },
  {
    image: img2,
    title: "Fluent Future",
    subtitle: "Boost your English and speak confidently",
  },
  {
    image: img3,
    title: "English Vibes",
    subtitle: "Join a modern club to practice, grow, and shine",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => setCurrent(index);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-[45vh] min-h-[280px] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] xl:h-screen overflow-hidden select-none"
    >
      {/* Left Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-colors"
      >
        <GoChevronLeft className="text-lg sm:text-xl md:text-2xl" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 md:p-3 rounded-full transition-colors"
      >
        <GoChevronRight className="text-lg sm:text-xl md:text-2xl" />
      </button>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10"></div>

          {/* Text Section */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
            <h1 className="text-white font-bold text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 md:mb-5 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white text-xs sm:text-base md:text-xl lg:text-2xl max-w-[85%] sm:max-w-xl md:max-w-2xl mb-4 sm:mb-6 md:mb-8 drop-shadow-md leading-relaxed">
              {slide.subtitle}
            </p>
            <button className="flex items-center gap-2 bg-pink-700 hover:bg-pink-800 text-white font-semibold py-2 px-4 sm:py-3 sm:px-8 rounded-full text-xs sm:text-base md:text-lg transition-all duration-300">
              Join Us
              <GoChevronRight className="text-lg sm:text-xl md:text-2xl" />
            </button>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-110"
                : "bg-pink-700 hover:bg-pink-800"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;