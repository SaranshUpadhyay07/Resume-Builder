import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ResumePreview() {
  const { state } = useLocation();

  if (!state || !state.resume) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg font-semibold">
        ⚠️ No resume data available.
      </div>
    );
  }

  const { resume, atsScore, resumeDownloadUrl } = state;
  const {
    name, email, phone, jobTitle, summary, skills, education, experience,
    certifications, projects, languages, hobbies,
    linkedin, portfolio, twitter, github
  } = resume;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-5xl mx-auto mt-14 mb-20 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between flex-wrap items-start mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-indigo-800">{name}</h1>
          <p className="text-base text-gray-600 mt-1">{email} | {phone}</p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-3">{jobTitle}</h2>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-600">ATS Score:</p>
          <span className="text-3xl font-bold text-green-600">{atsScore}/100</span>
          {resumeDownloadUrl && (
            <div className="mt-2">
              <a
                href={resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg inline-block mt-1 transition-all"
              >
                📄 Download Resume
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Sections */}
      <Section title="Professional Summary" content={summary} />
      <Section title="Skills" list={skills?.split(',')} />
      <Section title="Education" content={education} />
      <Section title="Certifications" content={certifications} />
      <Section title="Key Projects" content={projects} />
      <Section title="Work Experience" content={experience} />
      <Section title="Languages" content={languages} />
      <Section title="Hobbies & Interests" content={hobbies} />

      {/* Social Links */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Links</h3>
        <ul className="list-disc pl-5 space-y-1 text-blue-600">
          {linkedin && <li><a href={linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>}
          {portfolio && <li><a href={portfolio} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a></li>}
          {twitter && <li><a href={twitter} target="_blank" rel="noreferrer" className="hover:underline">Twitter</a></li>}
          {github && <li><a href={github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>}
        </ul>
      </section>
    </div>
  );
}

function Section({ title, content, list }) {
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      {list ? (
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {list.map((item, i) => (
            <li key={i} className="leading-relaxed">{item.trim()}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-700 leading-relaxed">{content}</p>
      )}
    </section>
  );
}
