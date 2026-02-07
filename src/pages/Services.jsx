import React from "react";
import img from '../../src/assets/assets/360_F_204954211_kooIszfUuIfxttEhObIV3m2IEg7f110c.jpg'

const services = [
  {
    id: 1,
    image: img,
    title: "Understand the situation",
    description:
      "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.",
  },
  {
    id: 2,
    image: img,
    title: "Bring the experience to life",
    description:
      "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.",
  },
  {
    id: 3,
    image: img,
    title: "Strategise chart the course",
    description:
      "Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been standard dummy.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 tracking-wider mb-2">
          ABOUT DIGITAL AGENCY
        </p>
        <h2 className="text-xl md:text-2xl px-24 font-medium text-gray-800 mb-10">
          We always stay with our <span className="font-semibold text-black">clients</span> and{" "}
          <span className="font-semibold text-black">respect</span> their business. We deliver{" "}
          <span className="font-semibold text-black">100%</span> and provide instant response to
          help them succeed in constantly changing and{" "}
          <span className="font-semibold text-black">challenging business</span> world.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="px-6 py-12">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <button className="px-5 py-2 border border-gray-800 rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition">
                  EXPLORE SERVICES →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
