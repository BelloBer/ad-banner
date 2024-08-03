//components/BannerImageComp.tsx
/*
// original do not delete
import React from 'react';
import Image from 'next/image';
import { Banner } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  banner: Banner;
  onEdit: (id: string) => void;
  isDownloading?: boolean; // New prop to check if it's being downloaded
}

const BannerImageComp: React.FC<Props> = ({ banner, onEdit, isDownloading = false }) => {
  return (
    <div
      className={`relative w-full h-64 ${isDownloading ? '' : 'rounded-lg'} overflow-hidden`}
      style={{ background: banner.background }}
    >
      <Image
        src={banner.image}
        alt={banner.title}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
        <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
        <p className="mb-4">{banner.description}</p>
        <button className="bg-white text-black px-4 py-2 rounded">{banner.cta}</button>
      </div>
      {!isDownloading && (
        <button
          className="absolute top-2 right-2 p-1"
          onClick={() => onEdit(banner.id)}
        >
          <FontAwesomeIcon icon={faPencilAlt} className='h-5 w-5' />
        </button>
      )}
    </div>
  );
};

export default BannerImageComp;
*/



/*
import React from 'react';
import Image from 'next/image';
import { Banner } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  banner: Banner;
  onEdit: (id: string) => void;
  isDownloading?: boolean;
}

const buttonStyles = [
  "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-transform duration-300",
  "bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-full transform hover:rotate-3 transition-transform duration-300",
  "bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 shadow-lg rounded transform hover:scale-110 transition-transform duration-300",
  "bg-gradient-to-r from-blue-700 to-indigo-500 text-white px-6 py-3 rounded-lg border-2 border-white transform hover:-translate-y-1 transition-transform duration-300",
  "bg-gradient-to-r from-transparent-400 to-indigo-500 text-white px-6 py-3 rounded-lg border-2 border-white transform hover:-translate-y-1 transition-transform duration-300",
  "bg-gradient-to-r from-gray-700 to-black text-white px-6 py-3 rounded transform hover:skew-y-3 transition-transform duration-300"
];

const buttonPositions = [
  
  
  "bottom-2 left-2",
  "bottom-2 right-2 transform -translate-x-1/2",
  "bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
];

const BannerImageComp: React.FC<Props> = ({ banner, onEdit, isDownloading = false }) => {
  const buttonStyle = buttonStyles[Math.floor(Math.random() * buttonStyles.length)];
  const buttonPosition = buttonPositions[Math.floor(Math.random() * buttonPositions.length)];

  return (
    <div
      className={`relative w-full h-64 ${isDownloading ? '' : 'rounded-lg'} overflow-hidden`}
      style={{ background: banner.background }}
    >
      <Image
        src={banner.image}
        alt={banner.title}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
        <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
        <p className="mb-4">{banner.description}</p>
        <button className={`${buttonStyle} absolute ${buttonPosition}`}>{banner.cta}</button>
      </div>
      {!isDownloading && (
        <button
          className="absolute top-2 right-2 p-1"
          onClick={() => onEdit(banner.id)}
        >
          <FontAwesomeIcon icon={faPencilAlt} className='h-5 w-5' />
        </button>
      )}
    </div>
  );
};

export default BannerImageComp;
*/

import React from 'react';
import Image from 'next/image';
import { Banner } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  banner: Banner;
  onEdit: (id: string) => void;
  isDownloading?: boolean;
}

const buttonStyles = [
  "bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-transform duration-300",
  "bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-full transform hover:rotate-3 transition-transform duration-300",
  "bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 shadow-lg rounded transform hover:scale-110 transition-transform duration-300",
  "bg-gradient-to-r from-blue-700 to-indigo-500 text-white px-6 py-3 rounded-lg border-2 border-white transform hover:-translate-y-1 transition-transform duration-300",
  "bg-gradient-to-r from-transparent-400 to-indigo-500 text-white px-6 py-3 rounded-lg border-2 border-white transform hover:-translate-y-1 transition-transform duration-300",
  "bg-gradient-to-r from-gray-700 to-black text-white px-6 py-3 rounded transform hover:skew-y-3 transition-transform duration-300"
];

const buttonPositions = [
  "bottom-2 left-2",
  "bottom-2 right-2 transform -translate-x-1/2",
  "bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
];

const BannerImageComp: React.FC<Props> = ({ banner, onEdit, isDownloading = false }) => {
  const buttonStyle = buttonStyles[Math.floor(Math.random() * buttonStyles.length)];
  const buttonPosition = buttonPositions[Math.floor(Math.random() * buttonPositions.length)];

  return (
    <div
      className={`relative w-full h-64 ${isDownloading ? '' : 'rounded-lg'} overflow-hidden`}
      style={{ background: `url(${banner.background}) no-repeat center/cover` }}
    >
      <Image
        src={banner.image}
        alt={banner.title}
        fill
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
        <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
        <p className="mb-4">{banner.description}</p>
        <button className={`${buttonStyle} absolute ${buttonPosition}`}>{banner.cta}</button>
      </div>
      {!isDownloading && (
        <button
          className="absolute top-2 right-2 p-1"
          onClick={() => onEdit(banner.id)}
        >
          <FontAwesomeIcon icon={faPencilAlt} className='h-5 w-5' />
        </button>
      )}
    </div>
  );
};

export default BannerImageComp;



