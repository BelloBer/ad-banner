// pages/index.tsx

import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import { Banner } from '../types';
import banners from '../data/banners.json';

const Home: React.FC = () => {
  const [bannerData, setBannerData] = useState<Banner[]>(banners);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);

  const handleEdit = (id: string) => {
    const banner = bannerData.find(b => b.id === id);
    if (banner) {
      setEditingBanner(banner);
    }
  };

  const handleSave = (updatedBanner: Banner) => {
    setBannerData(prev => prev.map(b => b.id === updatedBanner.id ? updatedBanner : b));
    setEditingBanner(null);
  };

  const handleClose = () => {
    setEditingBanner(null);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="hero bg-transparent-600 text-white p-8 rounded-lg mb-8 border">
        <h1 className="text-4xl font-bold mb-4">Welcome to Ad Banner Manager</h1>
        <p className="text-lg mb-4">Easily manage and edit ad banners. Explore a variety of creative and engaging banners that captivate your audience.</p>
        
      </header>
      <section className="features text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="feature border bg-transparent-600 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Easy Editing</h3>
            <p>Edit your banners with just a few clicks using our intuitive interface.</p>
          </div>
          <div className="feature border bg-transparent-600 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Customizable Templates</h3>
            <p>Choose from a variety of templates and customize them to fit your brand.</p>
          </div>
          <div className="feature border bg-transparent-600 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Responsive Design</h3>
            <p>All banners are fully responsive and look great on any device.</p>
          </div>
        </div>
      </section>
      <section className="banner-grid">
        <h2 className="text-3xl font-bold mb-4">Ad Banners</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bannerData.map(banner => (
            <BannerImageComp key={banner.id} banner={banner} onEdit={handleEdit} />
          ))}
        </div>
      </section>
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
      
      <footer className="footer bg-gray-800 text-white p-4 mt-8 rounded-lg">
        <div className="container mx-auto text-center">
          <p className="text-blue-400 mx-2" >&copy; {new Date().getFullYear()} Ad Banner Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

