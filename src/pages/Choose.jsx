import React from "react";
import { Monitor, Code2, Database, Briefcase } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Monitor size={46} className="text-pink-600 mx-auto mb-4" />,
    title: "Unique Web Design",
    desc: "We create unique and visually appealing web designs that reflect your brand identity and deliver a smooth, engaging user experience.",
  },
  {
    id: 2,
    icon: <Code2 size={46} className="text-pink-600 mx-auto mb-4" />,
    title: "Custom Website",
    desc: "Custom-built websites designed to meet your specific business needs with clean code, flexibility, and long-term scalability.",
  },
  {
    id: 3,
    icon: <Database size={46} className="text-pink-600 mx-auto mb-4" />,
    title: "CMS Website",
    desc: "Easy-to-manage CMS websites that allow you to update content, images, and pages effortlessly without technical knowledge.",
  },
  {
    id: 4,
    icon: <Briefcase size={46} className="text-pink-600 mx-auto mb-4" />,
    title: "Business Website",
    desc: "Professional business websites focused on credibility, performance, and conversions to help grow your online presence.",
  },
];

const Choose = () => {
  return (
    <section className="bg-gray-900 text-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm tracking-widest text-gray-400 mb-2">WHY CHOOSE US?</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          We are delivering beautiful <br className="hidden md:block" />
          <span className="text-pink-500">digital products</span> for you.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white text-gray-800 border-b-2 border-pink-500 px-8 py-16  transition-all duration-100 transform hover:-translate-y-2 hover:border-none overflow-hidden"
            >
              {/* Background animation overlay */}
              <div className="absolute inset-0 bg-gray-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

              {/* Content */}
              <div className="relative z-10">
                {feature.icon}
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-200">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
