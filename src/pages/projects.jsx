import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Movie Ticket Booking",
      description:
        "A full-stack app to book movie tickets with seat selection, payment, and booking history.",
      image: "https://www.shutterstock.com/image-photo/woman-holding-smartphone-buying-movie-600nw-2156185629.jpg",
      livedemo: "https://movie-ticket-frontend-sigma.vercel.app/",
    },
    {
      title: "Bullwork Clone",
      description: "A full-stack clone with place orders, dynamic content, and backend integration using modern web technologies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4akq6hNLOyZd9Lfw2XJtDsYjAV1Bq5LlrOtPXmlsg98oN-pO692dE_1pWPGNDZtxtsyo&usqp=CAU",
      livedemo: "https://bullwork.vercel.app/"
    },
    {
      title: "Fresco Furniture",
      description: "A full-stack furniture store with product listing, order placement, and backend integration.",
      image: "https://media.istockphoto.com/id/514734134/photo/gravity.jpg?s=612x612&w=0&k=20&c=A_qZkaubth2oN6-EOsbKMLIhanh5Co4jaEhPHj8NH54=",
      livedemo: "https://fresco-frontend.vercel.app"
    },
    {
      title: "Drumps Pad",
      description: "A responsive music pad built using React, Vite, and Tailwind CSS. Users can select different music styles like Rock, Jazz, etc., and play tracks (A, B, or C) instantly.",
      image: "https://t4.ftcdn.net/jpg/12/18/85/31/360_F_1218853168_cc0DVnV04yy7DfDkMnmguy7feCxg236m.jpg",
      livedemo: "https://drumps-pad.vercel.app/"
    },
    {
      title: "Chef-Cloud",
      description: "A responsive recipe generator app where users can add ingredients and get AI-powered recipe suggestions. Built with React, Vite, and Tailwind CSS for a sleek, modern UI.",
      image: "https://t4.ftcdn.net/jpg/12/04/65/03/360_F_1204650326_u4HFYzyF3sUgjkSVGYD3BQ0yEmmfqPKr.jpg",
      livedemo: "https://verdant-dolphin-5ec7e0.netlify.app/"
    },
    
    {
      title: "Finance Tracker",
      description: "Track income and expenses with a clean, responsive UI. Built using React, Vite, and Tailwind CSS.",
      image: "https://www.shutterstock.com/image-vector/finance-control-hand-drawn-composition-260nw-2382150379.jpg",
      livedemo: "https://quiet-kulfi-584d36.netlify.app/"
    }
    
    
    
    
    
  ];

  const togglePopup = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-violet-500 mt-3 mb-10">Projects</h1>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group w-full max-w-md mx-auto cursor-pointer"
            onClick={() => togglePopup(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-md w-full h-60 object-cover"
            />

            {/* Slide-Up Popup on Hover or Click */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-violet-500 to-white text-black z-10 transform transition-all duration-300 ease-in-out
                flex flex-col justify-center items-center text-center p-6
                ${
                  activeIndex === index
                    ? 'translate-y-0 opacity-95'
                    : 'group-hover:translate-y-0 group-hover:opacity-95 translate-y-full opacity-0 pointer-events-none'
                }`}
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-base tracking-widest mb-4">{project.description}</p>
              <a
                href={project.livedemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black border border-gray-600 bg-white px-3 py-3 rounded-full hover:text-blue-500"
                title="Live Demo"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
