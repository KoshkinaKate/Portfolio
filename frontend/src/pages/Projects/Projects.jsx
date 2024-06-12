import React, { useState } from 'react';
import './Projects.css';

const Project = ({ title, videoSrc, githubLink, images, readme }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="project-box">
      <h2>{title}</h2>
      <video src={videoSrc} controls className="project-video"></video>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
      <div className="project-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Code screenshot ${index + 1}`} />
        ))}
      </div>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Read More'}
      </button>
      {showMore && <div className="project-readme">{readme}</div>}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      videoSrc: 'path/to/video1.mp4',
      githubLink: 'https://github.com/yourusername/project1',
      images: ['path/to/image1.png', 'path/to/image2.png'],
      readme: 'Detailed README content for Project 1...'
    },
    {
      title: 'Project 2',
      videoSrc: 'path/to/video2.mp4',
      githubLink: 'https://github.com/yourusername/project2',
      images: ['path/to/image3.png', 'path/to/image4.png'],
      readme: 'Detailed README content for Project 2...'
    },
    {
      title: 'Project 3',
      videoSrc: 'path/to/video2.mp4',
      githubLink: 'https://github.com/yourusername/project2',
      images: ['path/to/image3.png', 'path/to/image4.png'],
      readme: 'Detailed README content for Project 2...'
    },
    {
      title: 'Project 4',
      videoSrc: 'path/to/video2.mp4',
      githubLink: 'https://github.com/yourusername/project2',
      images: ['path/to/image3.png', 'path/to/image4.png'],
      readme: 'Detailed README content for Project 2...'
    },
  
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
