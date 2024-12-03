import React, { useState, useEffect } from "react";

const Home = () => {
  const images = [
    { src: "public/images/kurama.png", alt: "Murasakix profile" },
    { src: "public/images/stand.png", alt: "Second image" },
    { src: "public/images/stand2.png", alt: "Third image" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextImage();
      }, 3000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="select-none w-full py-4 bg-orange-500 dark:bg-gray-900">
      <div className="mt-8 relative">
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          ←
        </button>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-64 h-64 rounded-full object-top object-cover mx-auto mb-4"
        />
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
        >
          →
        </button>
        <p className="text-xl text-center text-white dark:text-gray-300">
          Hello everyone, my name is Thummarat
        </p>
      </div>
      
      <div className="shadow-zinc-500 max-w-4xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Welcome</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Welcome to my portfolio! I'm a passionate developer who loves creating beautiful and functional web applications.
          Feel free to explore my projects and get in touch if you'd like to collaborate.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://img.freepik.com/premium-photo/orange-wavy-marble-aquarel-frame-text_358403-7400.jpg?w=1380')`,
            filter: 'blur(2px)'
          }}
        />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">杨沐晨 Flok</h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <h3 className="text-xl font-semibold mb-2">About</h3>
              <p>Hello everyone, my name is Thummarat, I'm a passionate developer who loves creating beautiful and functional web applications.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="../public/strong-kurama.png" 
              alt=""
              className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
// ... existing imports
