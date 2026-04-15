import React from 'react';
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-24 py-8 border-t border-white/5 relative z-10 bg-[var(--bg-color)]">
      <div className="max-w-6xl mx-auto px-6 max-sm:px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyrights */}
        <div className="text-gray-500 text-sm font-medium tracking-wide flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-center md:text-left">
           <span>© {year} All rights reserved by {siteConfig.author}.</span>
           <span className="hidden md:inline-block w-1 h-1 rounded-full bg-gray-700"></span>
           <span className="opacity-80">Powered by <a href={siteConfig.poweredByUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-white tracking-widest uppercase text-xs hover:text-[var(--theme-accent)] transition-colors inline-block">{siteConfig.poweredBy}</a></span>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex flex-row items-center gap-4">
          <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 hover:text-[var(--theme-accent)] group">
             <Instagram className="w-4 h-4 text-gray-400 group-hover:text-[var(--theme-accent)] transition-colors" />
          </a>
          <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 hover:text-[var(--theme-accent)] group">
             <Twitter className="w-4 h-4 text-gray-400 group-hover:text-[var(--theme-accent)] transition-colors" />
          </a>
          <a href={siteConfig.socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 hover:text-[var(--theme-accent)] group">
             <Github className="w-4 h-4 text-gray-400 group-hover:text-[var(--theme-accent)] transition-colors" />
          </a>
          <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 hover:text-[var(--theme-accent)] group">
             <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-[var(--theme-accent)] transition-colors" />
          </a>
        </div>

      </div>
    </footer>
  );
}
