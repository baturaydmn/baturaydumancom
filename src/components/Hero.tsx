import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleScrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[75vh] flex flex-col items-center justify-center w-full px-6 py-28 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Avatar */}
        <div className="mb-10 w-32 h-32 md:w-36 md:h-36 rounded-full border border-white/20 p-1.5 bg-white/5 shadow-[0_0_30px_rgba(59,130,246,0.2)] overflow-hidden">
          <img 
            src="/avatar.jpg" 
            alt="Baturay Duman" 
            className="w-full h-full rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-3xl font-bold text-white">BD</div>';
            }}
          />
        </div>

        {/* Text content */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          {t('hero_title')}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('hero_subtitle')}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <button onClick={handleScrollToContact} className="btn-primary w-full sm:w-auto min-w-[180px]">
            {t('get_in_touch')}
          </button>
          <a 
            href="/cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-panel relative px-6 py-3 font-semibold flex items-center justify-center w-full sm:w-auto min-w-[180px] hover:-translate-y-[2px] transition duration-300 text-glow-anim shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] opacity-100"
          >
            <div className="glow-border-spin" />
            <span className="relative z-10">{t('cv_button')}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
