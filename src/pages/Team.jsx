import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import pic1 from '../../src/assets/assets/188147906__1_-removebg-preview.png'

const teamMembers = [
  {
    id: 1,
    name: "HERMAN MILLER",
    role: "CO-FOUNDER / DESIGN",
    img: pic1,
  },
  {
    id: 2,
    name: "BILL GARDNER",
    role: "CO-FOUNDER / DESIGN",
    img: "../../src/assets/assets/team.webp",
  },
  {
    id: 3,
    name: "JEREMY DUPONT",
    role: "CREATIVE DIRECTOR",
    img: "../../src/assets/assets/young-successful-businessman-posing-with-crossed-arms_176420-1149.avif",
  },
  {
    id: 4,
    name: "SARA SMITH",
    role: "CREATIVE STUDIO HEAD",
     img: "../../src/assets/assets/young-successful-businessman-posing-with-crossed-arms_176420-1149.avif",
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-white text-center">
      <p className="text-sm text-gray-500 tracking-widest mb-2">CREATIVE PEOPLE</p>
      <h2 className="text-2xl text-gray-400 md:text-3xl font-semibold mb-10">
        Teamwork builds trust and <br className="hidden md:block" />
        the trust build growth.
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="relative group overflow-hidden">
            {/* Image */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[350px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center text-white">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{member.role}</p>

              <div className="mb-4 w-36 h-[1px] bg-pink-500"></div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="hover:text-pink-400"><Facebook size={20} /></a>
                <a href="#" className="hover:text-pink-400"><Twitter size={20} /></a>
                <a href="#" className="hover:text-pink-400"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-pink-400"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
