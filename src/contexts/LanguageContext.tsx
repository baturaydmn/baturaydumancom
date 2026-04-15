import React, { createContext, useContext, useState } from 'react';
import { flushSync } from 'react-dom';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    hero_title: 'Merhaba, Ben Baturay Duman',
    hero_subtitle: 'Fikirleri gerçekliğe dönüştürüyorum.',
    cv_button: 'Özgeçmiş İndir',
    get_in_touch: 'İletişime Geç',
    about_title: 'Hakkımda',
    contact_label: 'İletişim',
    about_text: 'Yaklaşık 6 yıldır dijital ürünler ve sistemler geliştiriyorum. Bu süreçte, bir fikri baştan sona gerçek bir ürüne dönüştürmeyi kendime misyon edindim.\n\nGirişimcilik deneyimlerim, robotik çalışmalarım ve müşteri projeleri sayesinde teknik bilgi ile iş tarafını birleştirmeyi öğrendim. Bu yüzden yaptığım işlerde önceliğim sürdürülebilir, ölçeklenebilir ve kullanılabilen sistemler oluşturmak.\n\nBugün odak noktam, karmaşık fikirleri sade ve güçlü dijital ürünlere dönüştürmek.',
    companies_title: 'Kariyer',
    contact_title: 'Bana Ulaşın',
    contact_subtitle: 'Sorularınız mı var veya işletmenizi yapay zeka otomasyonu ile dönüştürmeye hazır mısınız?',
    email_us: 'Bana e-posta gönderin',
    call_us: 'Beni arayın',
    our_location: 'Konumum',
    name_placeholder: 'Baturay',
    email_placeholder: 'name@mail.com',
    message_placeholder: 'Mesajınız...',
    submit_button: 'Mesaj Gönder',
    success_msg: 'Mesajınız başarıyla gönderildi!',
    error_msg: 'Bir hata oluştu, lütfen tekrar deneyin.',
    sending_msg: 'Gönderiliyor...',
    name_label: 'İsim',
    email_label: 'E-posta',
    message_label: 'Mesaj',
    color_preference: 'Renk Tercihi',
    zoom_scale: 'Yakınlık & Boyut',
    default: 'Varsayılan',
    dark_mode: 'Karanlık Mod',
    light_mode: 'Aydınlık Mod',
    scale_xs: '-2 Kademe (En Küçük)',
    scale_sm: '-1 Kademe (Küçük)',
    scale_md: 'Varsayılan',
    scale_lg: '+1 Kademe (Büyük)',
    scale_xl: '+2 Kademe (En Büyük)',
    settings: 'Ayarlar',
    language_selection: 'Dil Seçimi'
  },
  en: {
    hero_title: 'Hello, I am Baturay Duman',
    hero_subtitle: 'Turning ideas into reality.',
    cv_button: 'Download Resume',
    get_in_touch: 'Get in touch',
    about_title: 'About Me',
    contact_label: 'Contact',
    about_text: 'I have been developing digital products and systems for approximately 6 years. In this process, I made it my mission to transform an idea from start to finish into a real product.\n\nThrough my entrepreneurial ventures, robotics experiences, and customer projects, I learned to combine technical knowledge with business acumen. That\'s why in my work, my priority is creating sustainable, scalable, and usable systems.\n\nToday, my focus is transforming complex ideas into simple and powerful digital products.',
    companies_title: 'Career',
    contact_title: 'Get in touch with me',
    contact_subtitle: 'Have questions or ready to transform your business with AI automation?',
    email_us: 'Email me',
    call_us: 'Call me',
    our_location: 'My location',
    name_placeholder: 'Baturay',
    email_placeholder: 'name@mail.com',
    message_placeholder: 'Message...',
    submit_button: 'Send Message',
    success_msg: 'Your message has been sent successfully!',
    error_msg: 'An error occurred, please try again.',
    sending_msg: 'Sending...',
    name_label: 'Name',
    email_label: 'E-mail',
    message_label: 'Message',
    color_preference: 'Color Preference',
    zoom_scale: 'Zoom & Scale',
    default: 'Default',
    dark_mode: 'Dark Mode',
    light_mode: 'Light Mode',
    scale_xs: 'Level -2 (Smallest)',
    scale_sm: 'Level -1 (Small)',
    scale_md: 'Default',
    scale_lg: 'Level +1 (Large)',
    scale_xl: 'Level +2 (Largest)',
    settings: 'Settings',
    language_selection: 'Language Selection'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const toggleLanguage = () => {
    if (!document.startViewTransition) {
      setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
      });
    });
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['tr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
