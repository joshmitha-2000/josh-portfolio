import React from 'react';

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS3",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "JavaScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Node.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Express.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "PostgreSQL",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "Git",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "Python",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "Vercel",
      url: "https://assets.vercel.com/image/upload/v1662130559/front/favicon/vercel/180x180.png"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-100 px-6 py-16">
      <div className="max-w-6xl text-center space-y-12">
        <h1 className="md:text-6xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Technical Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="cursor-pointer flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:scale-95 hover:bg-blue-100 hover:shadow-xl active:scale-90 active:bg-blue-200"
            >
              <img
                src={skill.url}
                alt={skill.name}
                className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-110"
              />
              <p className="mt-3 text-lg font-semibold text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
