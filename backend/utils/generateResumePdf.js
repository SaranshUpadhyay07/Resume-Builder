const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generateResumePdf(resumeData, fileName = 'resume.pdf') {
  const htmlContent = `
    <html>
      <head>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 10pt;
            color: #000;
            padding: 30px 40px;
            line-height: 1.4;
            max-width: 800px;
            margin: auto;
          }
          h1 {
            font-size: 16pt;
            text-transform: uppercase;
            margin-bottom: 6px;
          }
          h2 {
            font-size: 11pt;
            margin-top: 18px;
            margin-bottom: 6px;
            border-bottom: 1px solid #999;
            padding-bottom: 2px;
          }
          p {
            margin: 4px 0;
          }
          ul {
            margin: 4px 0 10px 18px;
            padding: 0;
          }
          li {
            margin-bottom: 4px;
          }
          a {
            color: #0366d6;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <h1>${resumeData.name}</h1>
        <p><strong>Email:</strong> ${resumeData.email}</p>
        <p><strong>Phone:</strong> ${resumeData.phone}</p>
        <p><strong>Address:</strong> ${resumeData.address}</p>

        <h2>Professional Summary</h2>
        <p>${resumeData.summary}</p>

        <h2>Skills</h2>
        <ul>${resumeData.skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>

        <h2>Work Experience</h2>
        <ul>${resumeData.experience.split('\n').map(line => `<li>${line.trim()}</li>`).join('')}</ul>

        <h2>Education</h2>
        <p>${resumeData.education}</p>

        ${resumeData.certifications ? `
          <h2>Certifications</h2>
          <p>${resumeData.certifications}</p>
        ` : ''}

        ${resumeData.projects ? `
          <h2>Projects</h2>
          <p>${resumeData.projects}</p>
        ` : ''}

        ${resumeData.languages ? `
          <h2>Languages</h2>
          <p>${resumeData.languages}</p>
        ` : ''}

        ${resumeData.hobbies ? `
          <h2>Hobbies</h2>
          <p>${resumeData.hobbies}</p>
        ` : ''}

        <h2>Links</h2>
        <ul>
          ${resumeData.linkedin ? `<li><a href="${resumeData.linkedin}">${resumeData.linkedin}</a></li>` : ''}
          ${resumeData.portfolio ? `<li><a href="${resumeData.portfolio}">${resumeData.portfolio}</a></li>` : ''}
          ${resumeData.X ? `<li><a href="${resumeData.X}">${resumeData.X}</a></li>` : ''}
          ${resumeData.Github ? `<li><a href="${resumeData.Github}">${resumeData.Github}</a></li>` : ''}
        </ul>
      </body>
    </html>
  `;

  const filePath = path.join(__dirname, '..', 'public', 'pdfs', fileName);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await page.setContent(htmlContent, { waitUntil: 'load' });
  await page.pdf({
    path: filePath,
    format: 'A4',
    margin: { top: '20px', bottom: '20px', left: '30px', right: '30px' }
  });

  await browser.close();

  return `/pdfs/${fileName}`;
}

module.exports = generateResumePdf;
