import React from 'react';
import './Projects.css';

import mainImage1 from '../../assets/pictures/PlayFit1.png';
import codeImage1 from '../../assets/pictures/PlayFitCode1.png';
import codeImage2 from '../../assets/pictures/PlayFitCode2.png';


const googleDriveUrl = import.meta.env.VITE_GOOGLE_DRIVE_URL;

const projects = [
  {
    id: 1,
    title: 'PlayFit - Kids Sports Activity Finder',
    mainImage: mainImage1,
    introduction: 'PlayFit is an interactive platform designed to help kids discover and engage in various sports activities. The website offers detailed information about different sports, their benefits, and nearby events.',
    video: googleDriveUrl, 
    keyFeatures: [
      'Interactive sports discovery tool',
      'Detailed information and benefits of various sports',
      'Upcoming sports events and registration',
    ],
    codeImages: [codeImage1, codeImage2], 
    technologiesUsed: 'React, CSS, Node.js, Express, MongoDB', 
    websiteLink: 'https://playfit.netlify.app/', 
    githubLink: 'https://github.com/KoshkinaKate/Sport_Kids_Capstone_Project',
  },
  //  projects2,3,4,5
];

// Define a Project component to display individual project details
const Project = ({ mainImage, introduction, video, keyFeatures, codeImages, technologiesUsed, websiteLink, githubLink }) => (
  <div className="project-container">
    <img src={mainImage} alt="Main project" className="project-main-image" />
    <div className="project-links">
      <a href={websiteLink} target="_blank" rel="website" className="project-link">Live Website</a>
      <a href={githubLink} target="_blank" rel="gethub" className="project-link">GitHub Repository</a>
    </div>
    <div className="section">
      <div className="section-title">
        <span className="section-number">01</span> - Introduction
      </div>
      <p className="section-text">{introduction}</p>
    </div>
    {video && (
      <div className="section">
        <iframe
          src={video}
          width="880"
          height="495"
          allow="autoplay"
          title="Google Drive Video"
          className="project-video"
        ></iframe>
      </div>
    )}
    <div className="section">
      <div className="section-title">
        <span className="section-number">02</span> - Key Features
      </div>
      <ul className="section-text">
        {keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <div className="section">
      <div className="project-code-images">
        {codeImages.map((image, index) => (
          <img key={index} src={image} alt={`Code screenshot ${index + 1}`} className="project-code-image" />
        ))}
      </div>
    </div>
    <div className="section">
      <div className="section-title">
        <span className="section-number">03</span> - Technologies Used
      </div>
      <p className="section-text">{technologiesUsed}</p>
    </div>
  </div>
);

// define a Projects component to display a list of projects
const Projects = () => (
  <div className="projects-page">
    {projects.map(project => (
      <Project key={project.id} {...project} />
    ))}
  </div>
);

export default Projects;



