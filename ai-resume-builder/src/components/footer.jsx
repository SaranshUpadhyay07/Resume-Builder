import React from 'react'

export default function Footer() {
  return (
    <footer className=" text-gray-400 bg-gray-800 pt-10 bottom-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side - Branding */}
        <div className="text-xl font-semibold text-white mb-2 md:mb-0">
          ResumeBuilder
        </div>
        {/* Right Side - Copyright */}
        <div className="text-sm  mb-2 md:mb-0">
          © {new Date().getFullYear()} ResumeBuilder. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
