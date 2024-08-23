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
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full">
            <div className="hero-content mx-auto text-center max-w-2xl">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                Your Gateway to Career Success
              </h1>
              <p className="mx-auto mb-9 text-base font-medium text-white sm:text-lg sm:leading-relaxed">
                Explore thousands of job opportunities that match your skills
                and aspirations. Join us to find the perfect role that advances
                your career.
              </p>
              <div className="mb-10 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-4 md:flex-row md:gap-2 p-4 bg-background rounded-lg mx-auto max-w-4xl">
                  <input
                    type="text"
                    placeholder="Enter job title or keyword"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="flex-1 p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />

                  <select className="p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Select experience level</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />

                  <button
                    onClick={handleSearch}
                    className="inline-block rounded-md border border-transparent bg-secondary px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-[#0BB489]"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
