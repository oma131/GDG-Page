import React from "react";
import google from '../assets/google.png'
import andela from '../assets/andela.png'
import interswitch from '../assets/interswitch.png'
import bluechip from '../assets/bluechip.png'
import bamboo from '../assets/bamboo.png'
import kd from '../assets/kd.png'

const Partners = () => {
  const icons = [google, andela, interswitch, bluechip, bamboo, kd];

  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center items-center mb-16 md:mb-32">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt={`partner-${index}`}
          className="object-contain"
        />
      ))}
    </div>
  );
};

export default Partners;
