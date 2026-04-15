import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme, AppScale } from '../contexts/ThemeContext';
import { Settings, Moon, Sun, Monitor, Type, RotateCcw } from 'lucide-react';

const ACCENT_COLORS = [
  { id: 'blue', hex: '#3B82F6' },
  { id: 'red', hex: '#F43F5E' },
  { id: 'emerald', hex: '#10B981' },
  { id: 'amber', hex: '#F59E0B' },
  { id: 'violet', hex: '#8B5CF6' },
] as const;

const SCALES = [
  { id: 1, labelKey: 'scale_xs' },
  { id: 2, labelKey: 'scale_sm' },
  { id: 3, labelKey: 'scale_md' },
  { id: 4, labelKey: 'scale_lg' },
  { id: 5, labelKey: 'scale_xl' }
] as const;

export default function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme, accentColor, setAccentColor, appScale, setAppScale, borderRadius, setBorderRadius } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end" ref={dropdownRef}>
      
      {/* Primary Floating Settings Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 flex items-center justify-center glass-panel rounded-full shadow-2xl backdrop-blur-md border border-white/10 text-white transition-all duration-500 float-anim relative z-50 overflow-hidden ${isOpen ? 'bg-white/10 rotate-90 text-[var(--theme-accent)] shadow-[0_0_20px_var(--theme-accent)]' : 'hover:scale-110'}`}
        title={t('settings')}
      >
        <Settings className="w-5 h-5 relative z-10" />
      </button>

      {/* Morphing Language Toggle: Slides from outside gear to inside dropdown */}
      <button 
        onClick={toggleLanguage} 
        className={`absolute z-50 flex items-center justify-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group overflow-hidden outline-none ${
          isOpen 
            ? 'w-36 h-11 rounded-xl bg-white/5 hover:bg-white/15 border border-white/5 top-[calc(5rem+1px)] right-[calc(1rem+1px)] shadow-none pointer-events-auto' 
            : 'w-24 h-12 glass-panel rounded-full shadow-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 top-0 right-14 pointer-events-auto'
        }`}
        title={t('language_selection')}
      >
        <div className="relative w-5 h-[14px] rounded-[2px] overflow-hidden shadow-sm">
            <img 
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className={`absolute w-full h-full object-cover transition-all duration-500 ${language === 'en' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
            />
            <img 
              src="https://flagcdn.com/w40/tr.png"
              alt="Türkçe"
              className={`absolute w-full h-full object-cover transition-all duration-500 ${language === 'tr' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
            />
        </div>
        <span className="text-xs font-bold tracking-wider relative w-6 h-[18px] flex overflow-hidden">
          <span className={`absolute inset-0 flex items-center transition-all duration-500 ${language === 'en' ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>TR</span>
          <span className={`absolute inset-0 flex items-center transition-all duration-500 ${language === 'tr' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>EN</span>
        </span>
      </button>

      {/* Main Settings Dropdown Panel - Simplified Grid-Locked Transition to prevent animation coordinate mismatch with the absolutely sliding language button */}
      <div 
        className={`absolute top-16 right-0 w-64 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl border border-white/10 flex flex-col gap-6 origin-top-right transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ 
          backgroundColor: 'color-mix(in srgb, var(--bg-color) 85%, transparent)',
          borderRadius: 'var(--radius-base)'
        }}
      >

        {/* Top Row: Theme & Language Layout Reserve */}
        <div className="flex items-center justify-between">
          <button onClick={toggleTheme} className="flex items-center justify-center w-12 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all outline-none" title={theme === 'dark' ? t('light_mode') : t('dark_mode')}>
             <div className="relative w-5 h-5 flex items-center justify-center">
                <Sun className={`absolute w-full h-full text-[var(--theme-accent)] transition-all duration-500 ${theme === 'light' ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 rotate-90'}`} />
                <Moon className={`absolute w-full h-full text-[var(--theme-accent)] transition-all duration-500 ${theme === 'dark' ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 -rotate-90'}`} />
             </div>
          </button>

          {/* Invisible placeholder for structurally holding the language button's dropdown destination space */}
          <div className="w-36 h-11 border border-transparent pointer-events-none"></div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10"></div>

        {/* Color Palette Section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">{t('color_preference')}</span>
          </div>
          <div className="flex items-center justify-between px-1">
            {ACCENT_COLORS.map(c => (
              <button
                key={c.id}
                onClick={() => setAccentColor(c.id as any)}
                className={`w-8 h-8 rounded-xl flex border transition-all duration-300 ${accentColor === c.id ? `scale-110 shadow-[0_0_15px_${c.hex}60] border-white/80` : 'scale-95 border-transparent opacity-60 hover:opacity-100 hover:scale-100 ring-0'}`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>

        {/* UI Zoom/Scale Section */}
        <div className="flex flex-col gap-3">
           <div className="flex items-center gap-2 mb-1">
             <Type className="w-4 h-4 text-gray-400" />
             <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">{t('zoom_scale')}</span>
           </div>
           
           <div className="flex items-center justify-between text-xs font-medium opacity-90 h-4">
             <span className="text-[var(--theme-accent)] transition-all">{t(SCALES.find(s => s.id === appScale)?.labelKey || 'scale_md')}</span>
           </div>
           
           <div className="flex w-full h-[40px] bg-white/5 rounded-xl border border-white/10 p-1">
              {SCALES.map((s) => {
                const isActive = appScale === s.id;
                
                // Construct compact symbol for the step
                let symbolStr = '1x';
                if (s.id === 1) symbolStr = '0.8x';
                if (s.id === 2) symbolStr = '0.9x';
                if (s.id === 4) symbolStr = '1.1x';
                if (s.id === 5) symbolStr = '1.2x';

                return (
                  <button
                    key={s.id}
                    onClick={() => setAppScale(s.id as AppScale)}
                    className={`flex-1 flex items-center justify-center text-xs font-bold rounded-lg transition-all duration-300 ${
                      isActive ? 'bg-[var(--theme-accent)] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                    title={t(s.labelKey)}
                  >
                     {symbolStr}
                  </button>
                );
              })}
           </div>
        </div>

        {/* Border Radius Section */}
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-sm border-2 border-gray-400" style={{ borderRadius: borderRadius / 4 }}></div>
                <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">{t('border_radius')}</span>
              </div>
              <button 
                onClick={() => setBorderRadius(16)}
                className="p-1 px-2 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] font-bold text-gray-400 hover:text-white transition-all flex items-center gap-1.5 border border-white/5"
                title={t('reset_default')}
              >
                <RotateCcw className="w-3 h-3" />
                {t('default').toUpperCase()}
              </button>
            </div>

           <div className="flex items-center justify-between text-xs font-medium opacity-90 h-4">
              <span className="text-[var(--theme-accent)] transition-all">
                {borderRadius === 0 ? '0px' : borderRadius === 16 ? t('default') : `${borderRadius}px`}
              </span>
           </div>

           <div className="relative w-full h-8 flex items-center group">
              {/* Custom Styled Slider */}
              <input 
                type="range"
                min="0"
                max="32"
                value={borderRadius}
                onChange={(e) => setBorderRadius(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[var(--theme-accent)] hover:bg-white/20 transition-all outline-none"
                style={{
                  background: `linear-gradient(to right, var(--theme-accent) ${(borderRadius / 32) * 100}%, rgba(255,255,255,0.1) ${(borderRadius / 32) * 100}%)`
                }}
              />
              <style jsx>{`
                input[type='range']::-webkit-slider-thumb {
                  appearance: none;
                  width: 16px;
                  height: 16px;
                  background: white;
                  border-radius: 50%;
                  border: 2px solid var(--theme-accent);
                  cursor: pointer;
                  box-shadow: 0 0 10px rgba(0,0,0,0.3);
                  transition: transform 0.2s ease;
                }
                input[type='range']::-webkit-slider-thumb:hover {
                  transform: scale(1.2);
                }
              `}</style>
           </div>
        </div>

      </div>
    </div>
  );
}
