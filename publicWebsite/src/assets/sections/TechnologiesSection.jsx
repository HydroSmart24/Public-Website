import React from 'react';
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
    <section className="py-16 px-32 bg-white text-gray-700">
      <h2 className="font-poppins text-[2.5rem] font-medium mb-[4rem] text-[#464646]">Technologies Used</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-center items-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="w-48 h-44 p-4 border border-gray-300 rounded-lg flex flex-col items-center justify-center shadow-md hover:translate-y-[-15px] hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className={`${
                ['Firebase', 'IoT', 'Google Colab'].includes(tech.name) ? 'w-24 h-24' : 'w-20 h-20'
              } object-contain mb-4`}
            />
            <p className="text-lg font-medium text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
