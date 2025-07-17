'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative top-0 w-full z-50 backdrop-blur-2xl bg-gray-800 text-white shadow-md backdrop-blur-lg bg-opacity-90">
      <nav className="max-w-7xl mx-auto px-md-4 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            ResumeBuilder
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#" className="hover:text-indigo-600">Features</a>
            <a href="#" className="hover:text-indigo-600">Preview</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="text-indigo-700 focus:outline-none">
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog as="div" className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-white/90 p-4 backdrop-blur-2xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-indigo-700">ResumeBuilder</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-indigo-700">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-4 text-gray-700 font-medium">
            <a href="#" className="block hover:text-indigo-600">Home</a>
            <a href="#" className="block hover:text-indigo-600">Features</a>
            <a href="#" className="block hover:text-indigo-600">Preview</a>
            <a href="#" className="block hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </Dialog>
    </header>
  )
}
