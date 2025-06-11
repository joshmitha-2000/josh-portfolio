import React from 'react';

function About() {
  return (
    <div className="bg-white px-4 sm:px-8 py-12">
      <div className="w-full max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          About Me
        </h1>

        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
          I’m a <span className="font-semibold text-blue-600">Full Stack Developer</span> skilled in{' '}
          <span className="font-semibold text-purple-600">
            HTML, CSS, JavaScript, React.js, Express.js, Node.js, Bootstrap, Tailwind CSS, and PostgreSQL
          </span>. I love building full-stack web apps that are responsive, user-friendly, and scalable.
        </p>

        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
          My projects include <span className="font-semibold text-pink-600">movie ticket booking systems</span>,{' '}
          <span className="font-semibold text-pink-600">e-commerce clones</span>, and other real-world applications.
        </p>

        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
          I’m passionate about solving real problems through code, eager to grow in both development and marketing,
          and currently seeking opportunities to join a dynamic team that values creativity and technology.
        </p>
      </div>
    </div>
  );
}

export default About;
