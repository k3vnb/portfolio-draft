import React from 'react';
import Gallery from './Gallery';

import devil from '../assets/images/gallery/devil.svg';
import walrus from '../assets/images/gallery/walrus.svg';
import martini from '../assets/images/gallery/martini.svg';
import boom from '../assets/images/gallery/boom.svg';

var masterGalleryList = [
  {
    imageSource: '1A',
    imageTitle: 'Pic1',
    imageItself: `${walrus}`
  },
  {
    imageSource: '1B',
    imageTitle: 'Pic2',
    imageItself: `${devil}`
  },
  {
    imageSource: '1C',
    imageTitle: 'Pic3',
    imageItself: `${martini}`
  },
  {
    imageSource: '1D',
    imageTitle: 'Pic4',
    imageItself: `${boom}`
  }
];

function GalleryList(){
  return (
    <div className="gallery-container">
      <style jsx>{`
        .top-buffer {
          height: 7.4vh;
        }
        .gallery-main-content {
          background-color: #010106d6;
          padding: 3%;
          color: white;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        `}</style>
      <div className="top-buffer"></div>
      <div className="gallery-main-content">

        {masterGalleryList.map((picture, index) =>
          <Gallery imageSource = {picture.imageSource}
            imageTitle = {picture.imageTitle}
            imageItself = {picture.imageItself}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default GalleryList;