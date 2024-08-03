//components/BannerImageComp.tsx

import React from 'react';
import Image from 'next/image';
import { Banner } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

// Props interface for the component
interface Props {
  banner: Banner;
  onEdit: (id: string) => void;
  isDownloading?: boolean;
}

// Styles for the buttons
const buttonStyles = [
  "bg-gradient-to-r from-gray-900 via-red-700 to-purple-900 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-transform duration-300",
  "bg-gradient-to-r from-yellow-400 to-red-500 text-white px-6 py-3 rounded-full transform hover:rotate-3 transition-transform duration-300",
  "bg-gradient-to-r from-orange-900 to-blue-900 text-white px-6 py-3 shadow-lg rounded transform hover:scale-110 transition-transform duration-300",
  "bg-gradient-to-r from-red-900 to-transparent-400 text-white px-6 py-3 rounded-lg border-2 border-blue transform hover:-translate-y-1 transition-transform duration-300",
  "bg-gradient-to-r from-transparent-400 to-indigo-500 text-white px-6 py-3 rounded-lg border-2 border-white transform hover:-translate-y-1 transition-transform duration-300",
  "bg-gradient-to-r from-gray-700 to-black text-white px-6 py-3 rounded transform hover:skew-y-3 transition-transform duration-300"
];

// Positions for the buttons
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



