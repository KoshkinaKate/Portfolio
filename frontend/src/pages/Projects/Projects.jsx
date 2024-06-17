import React from 'react';
import './Projects.css';

import mainImage1 from '../../assets/pictures/PlayFit1.png';
import codeImage1 from '../../assets/pictures/PlayFitCode1.png';
import codeImage2 from '../../assets/pictures/PlayFitCode2.png';
import weatherAppMain from '../../assets/pictures/WeatherAppMain.png';
import weatherCode1 from '../../assets/pictures/WeatherCode1.png';
import weatherCode2 from '../../assets/pictures/WeatherCode2.png';
import todoMain from '../../assets/pictures/To-Do-Main.png';
import todoCode1 from '../../assets/pictures/To-Do-Code2.png';
import todoCode2 from '../../assets/pictures/To-Do-Code1.png';

const googleDriveUrlPlayFit = import.meta.env.VITE_GOOGLE_DRIVE_URL;
const googleDriveUrlWeatherApp = import.meta.env.VITE_GOOGLE_DRIVE_URL1;
const googleDriveUrlToDoApp = import.meta.env.VITE_GOOGLE_DRIVE_URL2;

const projects = [
  {
    id: 1,
    title: 'PlayFit - Kids Sports Activity Finder',
    mainImage: mainImage1,
    introduction: 'PlayFit is an interactive platform designed to help kids discover and engage in various sports activities. The website offers detailed information about different sports, their benefits, and nearby events.',
    video: googleDriveUrlPlayFit,
    keyFeatures: [
      'Interactive sports discovery tool',
      'Detailed information and benefits of various sports',
      'Upcoming sports events and registration (in process)',
      'Ability to leave/delete comments on events'
    ],
    codeImages: [codeImage1, codeImage2],
    technologiesUsed: 'JavaScript, React, CSS, Node.js, Express, MongoDB, JSON Web Token, Render + Netlify',
    websiteLink: 'https://playfit.netlify.app/',
    githubLink: 'https://github.com/KoshkinaKate/Sport_Kids_Capstone_Project',
  },
  {
    id: 2,
    title: 'Weather App',
    mainImage: weatherAppMain,
    introduction: 'Weather App provides real-time weather updates for any location. It includes detailed information about temperature, humidity, wind speed, and cloud cover.',
    video: googleDriveUrlWeatherApp,
    keyFeatures: [
      'Real-time weather updates',
      'Detailed information on temperature, humidity, wind speed, and cloud cover',
      'Search functionality to find weather data for any location'
    ],
    codeImages: [weatherCode1, weatherCode2],
    technologiesUsed: 'JavaScript, React, CSS, API integration, Vite',
    websiteLink: 'https://weatherapp.netlify.app/',
    githubLink: 'https://github.com/yourusername/weather_app_repo',
  },
  {
    id: 3,
    title: 'To-Do List',
    mainImage: todoMain,
    introduction: 'To-Do List is a simple and interactive application to manage your daily tasks. Users can add, edit, delete, and mark tasks as completed.',
    video: googleDriveUrlToDoApp,
    keyFeatures: [
      'Add new tasks',
      'Edit existing tasks',
      'Delete tasks',
      'Mark tasks as completed'
    ],
    codeImages: [todoCode1, todoCode2],
    technologiesUsed: 'JavaScript, React, CSS, useReducer, Netlify',
    websiteLink: 'https://to-do-koshkina.netlify.app/',
    githubLink: 'https://github.com/KoshkinaKate/ToDoList',
  },
];

// Define a Project component to display individual project details
const Project = ({ title, mainImage, introduction, video, keyFeatures, codeImages, technologiesUsed, websiteLink, githubLink }) => ( //renders details of projects
  <div className="project-container">
    <h2 className="project-title">{title}</h2>
    <img src={mainImage} alt="Main project" className="project-main-image" />
    <div className="project-links">
      <a href={websiteLink} target="_blank" rel="web" className="project-link">Live Website</a>
      <a href={githubLink} target="_blank" rel="github" className="project-link">GitHub Repository</a>
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
          className="project-video"
          title="Google Drive Video"
          allow="autoplay"
        ></iframe>
      </div>
    )}
    <div className="section">
      <div className="section-title">
        <span className="section-number2">02</span> - Key Features
      </div>
      <ul className="section-text">
        {keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <div className="section">
      <div className="project-code-images-cont">
        {codeImages.map((image, index) => (
          <img key={index} src={image} alt={`Code screenshot ${index + 1}`} className="project-code-image" />
        ))}
      </div>
    </div>
    <div className="section">
      <div className="section-title">
        <span className="section-number3">03</span> - Technologies Used
      </div>
      <p className="section-text">{technologiesUsed}</p>
    </div>
    <hr className="project-divider"/>
  </div>
);

// Define a Projects component to display a list of projects
const Projects = () => ( //passes all project details as props
  <div className="projects-page">
    {projects.map(project => (
      <Project key={project.id} {...project} />
    ))}
  </div>
);

export default Projects;

