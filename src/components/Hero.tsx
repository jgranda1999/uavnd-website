import React, { useEffect, useRef } from 'react';
import heroVideo from '../videos/DJI_0009.MP4';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay failed, which is common on mobile
          console.log('Video autoplay failed, will play on user interaction');
          
          // Add click/touch listeners to play video on user interaction
          const playOnInteraction = () => {
            video.play().catch(console.log);
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('scroll', playOnInteraction);
          };
          
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
          document.addEventListener('scroll', playOnInteraction);
        });
      }
    }
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-dark-bg min-h-[70vh]">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-50"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          webkit-playsinline="true"
        >
          {/* Fallback for older browsers */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-6">
            UAV ND · University of Notre Dame
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Building the Future of Unmanned Flight
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Undergraduate-led research and development club in autonomous systems, aerial robotics, and real-world UAV applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-primary">Explore Projects</a>
            <a href="#contact" className="btn-secondary">Get Involved</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

