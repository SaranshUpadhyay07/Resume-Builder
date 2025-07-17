
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function ResumePreview() {
  const { state } = useLocation();
  const resumeRef = useRef();

  if (!state || !state.resume) {
    return (
      <div className="text-center mt-10 text-red-500">
        No resume data available.
      </div>
    );
  }

  const { resume, atsScore } = state;
  const {
    name, email, phone, jobTitle, summary, skills, education, experience,
    certifications, projects, languages, hobbies,
    linkedin, portfolio, X, Github
  } = resume;

  // PDF download handler
  const handleDownloadPDF = async () => {
    const input = resumeRef.current;
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${name || 'resume'}.pdf`);
  };

  return (
    <div>
      <div className="flex justify-end max-w-4xl mx-auto mt-10">
        <button
          onClick={handleDownloadPDF}
          className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-500 transition"
        >
          📄 Download PDF
        </button>
      </div>
      <div
        ref={resumeRef}
        className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mt-4"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-indigo-700">{name}</h1>
            <p className="text-sm text-gray-600">{email} | {phone}</p>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">{jobTitle}</h2>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-700">ATS Score:</p>
            <span className="text-2xl font-bold text-green-600">{atsScore}/100</span>
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
        <section className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Links</h3>
          <ul className="list-disc pl-5 text-blue-600">
            {linkedin && <li><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
            {portfolio && <li><a href={portfolio} target="_blank" rel="noreferrer">Portfolio</a></li>}
            {X && <li><a href={X} target="_blank" rel="noreferrer">Twitter</a></li>}
            {Github && <li><a href={Github} target="_blank" rel="noreferrer">GitHub</a></li>}
          </ul>
        </section>
      </div>
    </div>
  );
}

function Section({ title, content, list }) {
  return (
    <section className="mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      {list ? (
        <ul className="list-disc pl-5 text-gray-700">
          {list.map((item, i) => <li key={i}>{item.trim()}</li>)}
        </ul>
      ) : (
        <p className="text-gray-700">{content}</p>
      )}
    </section>
  );
}
