//components/EditBannerTemplateBs.tsx

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Banner } from '../types';
import BannerImageComp from './BannerImageComp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  max-width: 600px;
  margin: 16px;
  height: 500px;
  overflow-y: auto;
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 16px;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  .download {
    color: blue;
    background: white;
    &:active {
      transform: scale(0.9);
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  color: black;
  background: white;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  color: black;
  background: white;
`;

const ButtonGroup = styled.div`
  display: block;
  justify-content: center;
  margin: 5px;
  position: fixed;
  bottom: 90px;
  .icon {
    &:hover {
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background: #01301a;
  &:active {
    transform: scale(0.9);
  }
`;

const CancelButton = styled(Button)`
  background: #0070f4;
`;

const SaveButton = styled(Button)`
  background: #0070f3;
  color: white;
`;

const ImageCarousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  margin-bottom: 16px;
`;

const ImageOption = styled.img<{ selected: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  border: ${props => (props.selected ? '2px solid #0070f3' : '2px solid transparent')};
`;

interface Props {
  banner: Banner;
  onSave: (updatedBanner: Banner) => void;
  onClose: () => void;
}

const attributionLinks: { [key: string]: string } = {
  "/images/bubble2.png": '<a href="https://www.vecteezy.com/free-png/border">Border PNGs by Vecteezy</a>',
  "/images/bubble3.png": '<a href="https://www.vecteezy.com/free-png/banner-background">Banner Background PNGs by Vecteezy</a>',
  "/images/bubble4.png": '<a href="https://www.vecteezy.com/free-png/heart">Heart PNGs by Vecteezy</a>',
  "/images/bubble5.png": '<a href="https://www.vecteezy.com/free-png/banner-background">Banner Background PNGs by Vecteezy</a>',
  "/images/bubble6.png": '<a href="https://www.vecteezy.com/free-png/modern-frame">Modern Frame PNGs by Vecteezy</a>',
  "/images/bubble7.png": '<a href="https://www.vecteezy.com/free-png/green-gold">Green Gold PNGs by Vecteezy</a>',
  "/images/bubble8.png": '<a href="https://www.vecteezy.com/free-png/islamic-background">Islamic Background PNGs by Vecteezy</a>',
  "/images/bubble9.png": '<a href="https://www.vecteezy.com/free-png/border">Border PNGs by Vecteezy</a>'
};

const EditBannerTemplateBs: React.FC<Props> = ({ banner, onSave, onClose }) => {
  const [editedBanner, setEditedBanner] = useState<Banner>({
    ...banner,
    attribution: attributionLinks[banner.image] || banner.attribution
  });
  const bannerRef = useRef<HTMLDivElement>(null);

  // Sample image URLs
  const imageOptions = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    '/images/banner4.jpg',
    '/images/banner5.jpg',
    '/images/banner6.jpg',
    '/images/banner7.jpg',
    '/images/banner8.jpg',
    '/images/banner9.jpg',
    '/images/banner10.jpg',
    '/images/banner11.jpg',
    '/images/banner12.jpg',
    '/images/banner13.jpg',
    '/images/banner14.jpg',
    '/images/banner15.jpg',
    '/images/banner16.jpg',
    '/images/banner17.jpg',
    '/images/banner18.jpg',
    '/images/banner19.jpg',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedBanner(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedBanner);
  };

  const handleDownload = async () => {
    if (bannerRef.current) {
      const canvas = await html2canvas(bannerRef.current, {
        useCORS: true, // Enable CORS
      });
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'banner.png';
      link.click();
    }
  };

  const handleImageSelect = (url: string) => {
    setEditedBanner(prev => ({ ...prev, background: url }));
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={onClose}
          className="icon absolute top-4 right-4 p-1 text-black h-6 cursor-pointer"
        />
        <ModalTitle>Edit Banner</ModalTitle>

        <div className="mb-4" ref={bannerRef}>
          <BannerImageComp banner={editedBanner} onEdit={() => {}} isDownloading={true} />
          <p className="text-sm text-gray-500 mt-2" dangerouslySetInnerHTML={{ __html: editedBanner.attribution }} />
        </div>

        <ModalTitle>Images</ModalTitle>

        <ImageCarousel>
          {imageOptions.map((url, index) => (
            <ImageOption
              key={index}
              src={url}
              selected={editedBanner.background === url}
              onClick={() => handleImageSelect(url)}
            />
          ))}
        </ImageCarousel>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={editedBanner.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              name="description"
              value={editedBanner.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cta">Button Text</Label>
            <Input
              type="text"
              id="cta"
              name="cta"
              value={editedBanner.cta}
              onChange={handleChange}
            />
          </FormGroup>
          <Button className="done">Done</Button>
          <Button type="button" onClick={handleDownload} className="download">Download</Button>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditBannerTemplateBs;
