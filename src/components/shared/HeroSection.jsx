import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-24 text-center">
      {/* Full-Width Banner Image with 60vh height */}
      <div
        className="absolute inset-0 w-full h-[50vh] bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('https://static.newstrack.com/h-upload/2024/11/29/1819363-befunky-collage6.webp')" }} // Replace with your actual banner image
      ></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-6">
          Bringing the Sacred Ganga Jal to Your Doorstep
        </h1>
        <p className="text-lg sm:text-xl text-blue-700 mb-8">
          Experience the purity and divine blessings of the holy Ganges – delivered straight to you.
        </p>

        {/* Special Mahakumbh Reference */}
        <div className="bg-blue-600 text-white py-4 px-6 rounded-lg mb-8 inline-block">
          <h2 className="text-2xl font-semibold">
            The Sacred Water of Mahakumbh – A Blessing of Eternity
          </h2>
          <p className="text-sm">
            Sourced from the holy river during the auspicious Mahakumbh, each drop carries the blessings of millions of devotees.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-8 py-5 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            Buy Now
          </Link>
          <a
            href="/learn-more"
            className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Optional Features Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-8 lg:px-12 text-center text-blue-900">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Purity</h3>
          <p className="text-blue-700">Sourced directly from the holy river for the truest experience.</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Blessings</h3>
          <p className="text-blue-700">Carry the sacred blessings of the Ganges wherever you go.</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Authenticity</h3>
          <p className="text-blue-700">Guaranteed original and untouched by chemicals.</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Easy Access</h3>
          <p className="text-blue-700">Fast and convenient delivery service to your home.</p>
        </div>
      </div>

      {/* Ganga Jal Images Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {/* Image 1 */}
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/Zs-C1JhPvzZit2SVUSAru4NhIRAt2zTXqq8RlEqiPOQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/cm93ZGVkLWluZGlh/bi1jaXR5XzIzLTIx/NTE3NjU2MzcuanBn/P3NlbXQ9YWlzX2h5/YnJpZA"
            alt="Ganga Jal Bottle"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/t1LKdqkbcQ9bOsTNssh7pRXE2aA4Lj96mbLtSl3gwLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2ExL0t1bWJoX01l/bGEyMDAxLkpQRw"
            alt="Ganga Jal Bottle"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="relative">
          <img
            src="https://imgs.search.brave.com/OnKSn68AvLb-Gtu2NCHFV6WcozQ2ypFUj5QS6D64jlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzUwOTk1ODc0L3Iv/aWwvYjk4ZGMzLzU4/ODg4MTMxNzcvaWxf/NjAweDYwMC41ODg4/ODEzMTc3XzdreDcu/anBn"
            alt="Ganga Jal Bottle"
            className="w-full h-72 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
