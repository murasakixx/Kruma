import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            I actually don't know what to write here.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 pt-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Innovation and Creativity</li>
            <li>Customer Satisfaction</li>
            <li>Integrity and Transparency</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Contact Information</h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p>Email: murasakix.busiess@gmail.com</p>
            <p>Phone: 063-891-9598</p>
            <p>Address: lampang, thailand</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
