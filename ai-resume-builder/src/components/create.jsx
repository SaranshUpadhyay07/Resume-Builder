import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateResume() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    summary: '',
    skills: '',
    education: '',
    experience: '',
    certifications: '',
    projects: '',
    languages: '',
    hobbies: '',
    linkedin: '',
    portfolio: '',
    X: '',
    Github: ''
  });

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BACKEND_URL}/build-resume`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Failed to build resume');
      }

      const result = await response.json();
      navigate('/build', { state: result });
    } catch (err) {
      alert('Something went wrong while building the resume.');
      console.error(err);
    }
  };

  const handleAISuggestion = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/generate-summary`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobTitle: form.jobTitle,
          skills: form.skills,
          experience: form.experience,
        }),
      });

      const data = await response.json();
      setForm({ ...form, summary: data.summary });
    } catch (error) {
      alert('Failed to generate AI summary.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Create Your Resume</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={form.jobTitle}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Professional Summary</label>
            <textarea
              name="summary"
              value={form.summary}
              onChange={handleChange}
              rows="3"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
            <div className="text-right mt-2">
              <button
                type="button"
                onClick={handleAISuggestion}
                className="text-sm font-semibold text-white px-4 py-2 rounded bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hover:from-pink-500 hover:via-fuchsia-500 hover:to-purple-500 transition-all duration-1000 ease-in-out shadow-md"
              >
                🤖 Suggest with AI
              </button>
            </div>
          </div>

          {/* Skills */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Skills (comma-separated)</label>
            <input
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Education */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Education</label>
            <textarea
              name="education"
              value={form.education}
              onChange={handleChange}
              rows="2"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Certifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Certifications</label>
            <textarea
              name="certifications"
              value={form.certifications}
              onChange={handleChange}
              rows="2"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Projects */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Key Projects</label>
            <textarea
              name="projects"
              value={form.projects}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Languages */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Languages</label>
            <input
              type="text"
              name="languages"
              value={form.languages}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Hobbies */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Hobbies & Interests</label>
            <input
              type="text"
              name="hobbies"
              value={form.hobbies}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourname"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Portfolio</label>
              <input
                type="url"
                name="portfolio"
                value={form.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Twitter</label>
              <input
                type="url"
                name="X"
                value={form.X}
                onChange={handleChange}
                placeholder="https://twitter.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GitHub</label>
              <input
                type="url"
                name="Github"
                value={form.Github}
                onChange={handleChange}
                placeholder="https://github.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              />
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Work Experience</label>
            <textarea
              name="experience"
              value={form.experience}
              onChange={handleChange}
              rows="3"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-block rounded-pill bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-500 transition"
            >
              Build Resume
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
