//pages/index.tsx

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
      <h1 className="text-3xl font-bold mb-4">Ad Banners</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bannerData.map(banner => (
          <BannerImageComp key={banner.id} banner={banner} onEdit={handleEdit} />
        ))}
      </div>
      {editingBanner && (
        <EditBannerTemplateBs
          banner={editingBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;

