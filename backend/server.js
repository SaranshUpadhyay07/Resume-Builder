const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://resume-builder-tbfk.vercel.app', // ✅ change this to your actual frontend URL
  credentials: true
}));

app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Route 1: Generate summary
app.post('/generate-summary', async (req, res) => {
  const { jobTitle, skills, experience } = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `Write a concise professional resume summary for someone applying as a "${jobTitle}" with skills: ${skills} and experience: ${experience}. Only return the summary.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.status(200).json({ summary: text });
  } catch (error) {
    console.error('Gemini error (summary):', error.message);
    res.status(500).json({ error: 'Failed to generate summary.' });
  }
});

// Route 2: Build resume and calculate ATS score
const generateResumePdf = require('./utils/generateResumePdf');
const path = require('path');

// Serve static files in /public
app.use('/pdfs', express.static(path.join(__dirname, 'public/pdfs')));

app.post('/build-resume', async (req, res) => {
  const resumeData = req.body;

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const prompt = `...`; // your ATS prompt from earlier

    const result = await model.generateContent(prompt);
    const atsScoreText = result.response.text().replace(/[^0-9]/g, '');
    const atsScore = parseInt(atsScoreText) || Math.floor(Math.random() * 30 + 60);

    // Generate PDF and get public link
    const filename = `resume-${Date.now()}.pdf`;
    const relativePath = await generateResumePdf(resumeData, filename); // e.g. "/pdfs/resume-12345.pdf"

    // Make sure your backend base URL is correct
    const backendBaseUrl = 'https://resume-builder-jdfg.onrender.com'; // or use process.env.BASE_URL for production
    const resumeDownloadUrl = `${backendBaseUrl}${relativePath}`;


    res.status(200).json({
      resume: resumeData,
      atsScore,
      resumeDownloadUrl
    });
  } catch (error) {
    console.error('Build error:', error.message);
    res.status(500).json({ error: 'Failed to build resume and calculate ATS score.' });
  }
});


// Server Start
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
