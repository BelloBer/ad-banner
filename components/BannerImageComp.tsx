//components/BannerImageComp.tsx
/*
import React from 'react';
import Image from 'next/image';
import { Banner } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  banner: Banner;
  onEdit: (id: string) => void;
}

const BannerImageComp: React.FC<Props> = ({ banner, onEdit }) => {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden" style={{ background: banner.background }}>
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
      <button
        className="absolute top-2 right-2 p-1"
        onClick={() => onEdit(banner.id)}
      >
        <FontAwesomeIcon icon={faPencilAlt} className='h-5 w-5' />
      </button>
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
