import React, { useState, useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    image: "../../src/assets/assets/image.webp",
    title: "Speak Smart",
    subtitle: "Learn English easily and speak first",
  },
  {
    image: "../../src/assets/assets/front-view-business-people-meeting.jpg",
    title: "Fluent Future",
    subtitle: "Boost your English and speak confidently",
  },
  {
    image:
      "../../src/assets/assets/360_F_204954211_kooIszfUuIfxttEhObIV3m2IEg7f110c.jpg",
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

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full h-[75vh] sm:h-screen overflow-hidden select-none"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Responsive Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full 
                       object-contain sm:object-cover 
                       brightness-60 
                       transition-all duration-700"
          />

          {/* Gradient Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent"></div>

          {/* Text Section (Mobile Centered) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
            <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl mb-3 sm:mb-5 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white text-sm sm:text-lg md:text-2xl max-w-xs sm:max-w-xl md:max-w-2xl mb-5 sm:mb-8 drop-shadow-md leading-relaxed">
              {slide.subtitle}
            </p>
            <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 sm:py-3 px-5 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300">
              Join Us
              <HiArrowRight className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white scale-110"
                : "bg-pink-500 hover:bg-pink-600"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
