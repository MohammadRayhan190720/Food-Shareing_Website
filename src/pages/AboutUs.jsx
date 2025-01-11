import React from "react";
import donationimage from '../assets/images/donation.jpg'

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-8 md:px-16">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-green-500">Us</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          At <span className="font-semibold text-green-500">Food For All</span>,
          we believe in a world where no food goes to waste and everyone has
          access to nourishment. Our mission is to connect communities, reduce
          food waste, and share love through food.
        </p>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={donationimage}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-green-500 opacity-20 rounded-lg"></div>
          </div>

          {/* Text Section */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Food For All is more than a platform—it’s a movement. We strive to
              bridge the gap between food surplus and hunger, empowering
              individuals to contribute to their communities while making a
              lasting impact.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Connecting food donors with those in need.</li>
              <li>Leveraging technology to minimize food waste.</li>
              <li>Promoting a culture of care and responsibility.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
