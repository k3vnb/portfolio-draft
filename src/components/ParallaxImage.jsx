import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ParallaxImageLayer2 from './ParallaxImageLayer2';
import pool1 from '../assets/images/gallery/pool1.png';


const ParallaxImage = () => (
  <Parallax
    className="projects-parallax-container"
    offsetYMax={10}
    offsetYMin={-90}

    slowerScrollRate
    tag="figure"
  ><style jsx>{`
    .projects-parallax-container {
      margin-top: 5%;
      margin-bottom: 5%;
    }
    .projects-banner {
      height: 250px;
      width: 100%;
      object-fit: cover;
      object-position: 0% 20%;
    }
      `}</style>
    <div className="projects-banner-container">
      <img className="projects-banner" src={pool1}/>
      <ParallaxImageLayer2 />
    </div>

  </Parallax>
);

export default ParallaxImage;
