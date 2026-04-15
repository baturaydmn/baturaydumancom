import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfos = [
    {
      icon: <Mail className="w-5 h-5 text-gray-400" />,
      title: t('email_us'),
      detail: siteConfig.contact.email,
      link: `mailto:${siteConfig.contact.email}`
    },
    {
      icon: <Phone className="w-5 h-5 text-gray-400" />,
      title: t('call_us'),
      detail: siteConfig.contact.phoneDisplay,
      link: `tel:${siteConfig.contact.phoneLink}`
    },
    {
      icon: <MapPin className="w-5 h-5 text-gray-400" />,
      title: t('our_location'),
      detail: siteConfig.contact.location
    }
  ];

  return (
    <section id="contact-section" className="py-24 px-6 w-full relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-end">
        
        {/* Left Side Info */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-dynamic-2xl w-max mb-8">
            <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs opacity-75">?</span>
            <span className="text-sm font-medium tracking-wide">{t('contact_label')}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            {t('contact_title')}
          </h2>
          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-md">
            {t('contact_subtitle')}
          </p>

          <div className="flex flex-col gap-4">
            {contactInfos.map((info, idx) => {
              const Content = (
                <>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-dynamic-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-semibold mb-1">{info.title}</span>
                      <span className="text-gray-400 text-sm">{info.detail}</span>
                    </div>
                  </div>
                  {info.link && (
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-accent group-hover:text-black transition-all">
                      <ArrowUpRight className="w-5 h-5 group-hover:text-black transition-colors" />
                    </div>
                  )}
                </>
              );

              return info.link ? (
                <a 
                  key={idx}
                  href={info.link}
                  className="glass-panel p-6 flex flex-row items-center justify-between group cursor-pointer"
                >
                  {Content}
                </a>
              ) : (
                <div 
                  key={idx}
                  className="glass-panel p-6 flex flex-row items-center justify-between"
                >
                  {Content}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Form */}
        <div className="glass-panel p-8 md:p-10 w-full max-w-lg mx-auto md:max-w-none md:ml-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-1">{t('name_label')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field"
                placeholder={t('name_placeholder')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-1">{t('email_label')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field"
                placeholder={t('email_placeholder')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400 ml-1">{t('message_label')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="input-field"
                placeholder={t('message_placeholder')}
              />
            </div>

            {status === 'success' && (
              <div className="text-green-400 flex items-center gap-2 text-sm bg-green-400/10 p-4 rounded-dynamic-xl border border-green-400/20">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> {t('success_msg')}
              </div>
            )}
            {status === 'error' && (
              <div className="text-red-400 flex items-center gap-2 text-sm bg-red-400/10 p-4 rounded-dynamic-xl border border-red-400/20">
                <AlertCircle className="w-5 h-5 flex-shrink-0" /> {t('error_msg')}
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary mt-4 w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t('sending_msg') : t('submit_button')}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
