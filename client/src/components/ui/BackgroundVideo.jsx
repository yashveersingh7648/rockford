import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-20"
        poster="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=800&fit=crop"
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=14d7d8c61e8f8b81e43048e29345d1e8c9f10391&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A3161]/90 via-[#0A3161]/80 to-[#B31942]/80" />
    </div>
  );
};

export default BackgroundVideo;