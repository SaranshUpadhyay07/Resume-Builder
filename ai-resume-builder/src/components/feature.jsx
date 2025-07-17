import { SparklesIcon, ShieldCheckIcon, CloudArrowDownIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'AI-Powered Suggestions',
    description:
      'Generate professional summaries, skills, and experiences instantly using our advanced AI engine.',
    icon: SparklesIcon,
  },
  {
    name: 'Secure Data Storage',
    description:
      'Your resume data is encrypted and safely stored so you can edit anytime without worries.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Download as PDF',
    description:
      'Export your resume as a polished PDF to use on job applications, emails, or LinkedIn.',
    icon: CloudArrowDownIcon,
  },
]

export default function Feature() {
  return (
    <div className="overflow-hidden text-grey py-14 sm:py-25">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg ">
              <h2 className="text-base font-semibold text-indigo-600">Smart Resume Building</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-grey-900 sm:text-5xl">
                Let AI build your resume
              </p>
              <p className="mt-6 text-lg ">
                Save hours of writing with AI-assisted resume creation tailored to your career goals.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-grey-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-grey-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline"> — {feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <img
            alt="Resume Builder Screenshot"
            src="/images/resume-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
