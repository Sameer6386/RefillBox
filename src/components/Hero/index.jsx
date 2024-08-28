"use client";
import { useState } from "react";

const Hero = () => {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log(`Searching for ${position} jobs in ${location}`);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-900 pt-[120px] md:pt-[130px] lg:pt-[160px] pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-snug text-white sm:text-5xl lg:text-6xl lg:leading-tight">
            Discover Your Next Career Move
          </h1>
          <p className="mb-12 text-lg font-medium text-gray-300 sm:text-xl sm:leading-relaxed">
            Find the perfect job that aligns with your skills and goals. Start
            your search today.
          </p>
          <div className="w-full max-w-4xl">
            <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <input
                type="text"
                placeholder="Job title, keywords..."
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full p-4 text-gray-800 placeholder-gray-500 bg-white border border-gray-300 rounded-t-lg lg:rounded-tl-lg lg:rounded-bl-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-4 text-gray-800 placeholder-gray-500 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full p-4 text-gray-800 bg-white border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500">
                <option disabled selected hidden>
                  Experience Level
                </option>
                <option>Entry Level</option>
                <option>Mid Level</option>
                <option>Senior Level</option>
              </select>
              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-b-lg font-semibold transition-transform duration-300 hover:bg-blue-700 hover:scale-105 lg:rounded-br-lg lg:rounded-bl-lg lg:w-auto"
              >
                Search
              </button>
            </div>
          </div>
          <p className="mt-8 text-sm font-medium text-gray-400">
            Start your journey towards a successful career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
