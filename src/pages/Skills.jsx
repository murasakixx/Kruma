import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "Responsive Design"]
    }
  ];

  return (
    <div className="container mx-auto py-4">
      {/* Hero Section */}
      <div className="relative bg-orange-100 dark:bg-gray-800 rounded-3xl overflow-hidden mb-8">
        <div className="p-12">
          <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            Here's an overview of my technical skills and expertise in various technologies
            and tools I use in my development journey.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 dark:bg-gray-700 rounded-full -mb-32 -mr-32 opacity-50" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{category.title}</h2>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Continuous Learning</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          I'm constantly updating my skills and learning new technologies to stay
          current with the latest web development trends and best practices.
        </p>
      </div>
    </div>
  );
};

export default Skills;