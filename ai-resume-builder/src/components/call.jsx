import React from 'react'
import { Link } from 'react-router-dom'

function Call(){
  return (
    <section className="bg-gray-800 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to create your professional resume?
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Let  AI assist you in building the perfect resume tailored to your dream job.
        </p>
        <div className="mt-8 flex justify-center gap-x-6">
          <Link
            to="/create"
            className=" rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Call;
