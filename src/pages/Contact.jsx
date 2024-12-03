import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-4">
      {/* Hero Section */}
      <div className="relative bg-orange-100 dark:bg-gray-800 rounded-3xl overflow-hidden">
        <div className="flex justify-between items-center p-12">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Have questions or need assistance? We're here to help! 
              Reach out to our team for prompt and professional support.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-xl hover:bg-orange-700 transition duration-300 font-semibold">
                Send Message
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-xl hover:bg-orange-50 transition duration-300 font-semibold">
                View FAQ
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Add your hero image here */}
            <img 
              src="src/assets/images/kurama.png" 
              alt="Contact illustration" 
              className="w-96 h-96 object-cover object-top object-cover"
            />
          </div>
        </div>
        {/* Optional: Add decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full -mb-32 -mr-32 opacity-50" />
      </div>

      {/* Contact Methods Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-orange-600 dark:text-white">Email Support</h2>
          <p className="text-gray-600 dark:text-gray-300">murasakix.busiess@gmail.com</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-orange-600 dark:text-white">Phone</h2>
          <p className="text-gray-600 dark:text-gray-300">063-xxx-xxxx</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-orange-600 dark:text-white">Office</h2>
          <p className="text-gray-600 dark:text-gray-300">Kruma</p>
        </div>
      </div>

      {/* Recent Inquiries Section */}
      <div className="mt-8">
        <h2 className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold">How can I track my request?</h3>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold">What are your business hours?</h3>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold">Do you offer international support?</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;