import React from 'react';
import { Parallax } from 'react-scroll-parallax';


const ParallaxImageLayer2 = () => (
  <Parallax
    className="projects-parallax-container"
    offsetYMax={-410}
    offsetYMin={-500}
    slowerScrollRate
    tag="figure"
  ><style jsx>{`
    .projects-parallax-container {
      margin-top: 5%;
      margin-bottom: 5%;
    }
      .projects-banner-container {
        position: relative;
      }
      .projects-banner {
        height: 250px;
        width: 100%;
        object-fit: cover;
        object-position: 0% 20%;
      }
      .projects-title {
        color: white;
        text-shadow: 1px 1px 1px #00000073;
        font-family: 'Didact Gothic', sans-serif;
        text-align: right;
        padding-right: 16%;
      }
      `}</style>
    <div className="projects-banner-container">
      <h1 className="projects-title">Projects</h1>
    </div>

  </Parallax>
);

export default ParallaxImageLayer2;
