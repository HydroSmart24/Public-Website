// src/sections/TechnologiesSection.jsx
import React from 'react';
import '../styles/TechnologiesSection.css'; // Import CSS for styling

// Import all technology images
import python from '../images/techs/python.png';
import reactNative from '../images/techs/react.png';
import firebase from '../images/techs/FB.png';
import iot from '../images/techs/iot.jpg';
import amazonEC2 from '../images/techs/aws.png';
import yolo from '../images/techs/yolo.svg';
import googleColab from '../images/techs/colab.svg';
import googleCloud from '../images/techs/googlecloud.png';
import googleMaps from '../images/techs/map.png';
import roboflow from '../images/techs/roboflow.png';

const technologies = [
  { name: 'Python', img: python },
  { name: 'React Native', img: reactNative },
  { name: 'Firebase', img: firebase },
  { name: 'IoT', img: iot },
  { name: 'Amazon EC2', img: amazonEC2 },
  { name: 'YOLO', img: yolo },
  { name: 'Google Colab', img: googleColab },
  { name: 'Google Cloud', img: googleCloud },
  { name: 'Google Map API', img: googleMaps },
  { name: 'Roboflow', img: roboflow },
];

const TechnologiesSection = () => {
  return (
    <section className="technologies-section">
      <h2 className="tech-title">Technologies Used</h2>
      <div className="technologies-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="technology-card">
            <img
              src={tech.img}
              alt={tech.name}
              className={`tech-image ${
                ['Firebase', 'IoT', 'Google Colab'].includes(tech.name) ? 'large-image' : ''
              }`}
            />
            <p className="tech-name">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
