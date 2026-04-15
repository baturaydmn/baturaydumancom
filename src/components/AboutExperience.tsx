import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export default function AboutExperience() {
  const { t } = useLanguage();

  const companies = [
    { name: 'Almet Aluminyum', desc: 'Mobilya Aksesuarları Üretim ve Satış', url: 'https://almetaluminyum.com.tr' },
    { name: 'Voi Enterprise', desc: 'Voi Ekosisteminin yönetim merkezi', url: 'https://voienterprise.com' },
    { name: 'Voi Digital', desc: 'Dijital çözümler ve danışmanlık', url: 'https://voidigital.com' },
    { name: 'Voi Labs', desc: 'ArGe ve Proje üretimi', url: 'https://voilabs.com' }
  ];

  return (
    <section className="py-24 px-6 border-t border-white/10 w-full relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Side: About Me */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            {t('about_title')}
          </h2>
          <div className="text-lg text-gray-400 leading-relaxed font-light space-y-6 text-justify">
            {t('about_text').split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          <div className="flex justify-end mt-8 pr-4">
            <span 
              className="text-6xl lg:text-7xl text-blue-accent opacity-90" 
              style={{ fontFamily: '"Janelotus", cursive', transform: 'rotate(-4deg)' }}
            >
              B. Duman
            </span>
          </div>
        </div>

        {/* Right Side: Career */}
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            {t('companies_title')}
          </h2>
          <div className="flex flex-col gap-3">
            {companies.map((company, idx) => (
              <a 
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
                className="relative overflow-hidden glass-panel px-5 py-3 flex items-center justify-between group transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:-translate-y-0.5 hover:border-blue-accent/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="z-10 flex flex-col items-start gap-1">
                  <span className="text-lg font-medium text-gray-200 tracking-wide group-hover:text-white transition-colors duration-300">
                    {company.name}
                  </span>
                  <span className="text-sm text-gray-500 font-light group-hover:text-gray-300 transition-colors duration-300">
                    {company.desc}
                  </span>
                </div>
                <div className="z-10 w-8 h-8 rounded-full bg-white/5 flex items-center flex-shrink-0 justify-center group-hover:bg-blue-accent group-hover:text-black transition-all duration-300 group-hover:scale-110 ml-4">
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
