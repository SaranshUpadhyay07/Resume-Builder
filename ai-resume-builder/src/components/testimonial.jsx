import React from 'react'
import Footer from './footer.jsx'

// src/components/TestimonialSection.jsx
const testimonials = [
  {
    name: 'Aanya Mehra',
    title: 'Software Engineer Intern, Zuno',
    feedback:
      'The AI suggestions saved me hours. My resume finally looks polished and professional!',
    image: 'https://i.pravatar.cc/100?img=32',
  },
  {
    name: 'Raghav Malhotra',
    title: 'Marketing Associate, Lenskart',
    feedback:
      'I had no idea where to start. This builder guided me through everything and I got the job!',
    image: 'https://i.pravatar.cc/100?img=14',
  },
  {
    name: 'Sneha Das',
    title: 'UX Designer, Upwork',
    feedback:
      'Clean design, great export options, and the AI made writing a resume fun.',
    image: 'https://i.pravatar.cc/100?img=47',
  },
]

export default function TestimonialSection() {
  return (
    <>
    <section className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl pb-3 font-bold text-center text-gray-900 mb-10">
          What Users Are Saying
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <img
                src={t.image}
                alt={t.name}
                className="mx-auto h-16 w-16 rounded-full mb-4"
              />
              <p className="text-gray-700 text-sm mb-4">“{t.feedback}”</p>
              <h3 className="text-black pb-2 font-semibold">{t.name}</h3>
              <p className="text-gray-500 text-sm">{t.title}</p>
            </div>
          ))}
        </div>
        
      </div>
      
    </section>
    <Footer /></>
  )
}
