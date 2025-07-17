// src/components/BenefitSection.jsx
import { SparklesIcon, ShieldCheckIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Smart AI Assistance',
    description:
      'Generate impactful summaries and bullet points tailored to your job role.',
    icon: SparklesIcon,
  },
  {
    name: 'Privacy First',
    description:
      'Your personal information stays on your device. Nothing is stored without permission.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Export Instantly',
    description:
      'Download your resume as a polished PDF in one click.',
    icon: ArrowDownTrayIcon,
  },
]

export default function Benefit() {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Why Use ResumeBuilder?</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We make resume creation effortless, beautiful, and effective – with AI at your side.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit) => (
            <div key={benefit.name} className="bg-white shadow-md rounded-xl p-6 text-center">
              <benefit.icon className="mx-auto h-10 w-10 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{benefit.name}</h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
