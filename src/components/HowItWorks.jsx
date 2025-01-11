import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section className="relative bg-gradient-to-r from-green-500 to-green-700 py-16">
      <div className="absolute inset-0 bg-pattern bg-opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center">
        {/* Title and Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 font-Playfire">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-100">
            Experience seamless food sharing through our simple and impactful
            process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center items-center h-20 w-20 bg-green-600 text-white rounded-full mx-auto">
              <span className="text-3xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-6">
              Choose Food
            </h3>
            <p className="text-gray-600 mt-4">
              Donors select the food they want to donate from their inventory.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center items-center h-20 w-20 bg-green-600 text-white rounded-full mx-auto">
              <span className="text-3xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-6">
              Submit Details
            </h3>
            <p className="text-gray-600 mt-4">
              Fill out the form with food details and location for easy pickup
              or drop-off.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex justify-center items-center h-20 w-20 bg-green-600 text-white rounded-full mx-auto">
              <span className="text-3xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-6">
              Share the Joy
            </h3>
            <p className="text-gray-600 mt-4">
              Your donation is delivered to those in need, spreading happiness
              and hope.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link to='/addfood'
            
            className="inline-block px-8 py-4 text-lg font-semibold text-green-700 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
