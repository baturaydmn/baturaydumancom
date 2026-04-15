import Head from 'next/head';
import SEO from '../components/SEO';
import SettingsDropdown from '../components/SettingsDropdown';
import Hero from '../components/Hero';
import AboutExperience from '../components/AboutExperience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <SEO />

      <main style={{ position: 'relative' }}>
        <SettingsDropdown />
        <Hero />
        <AboutExperience />
        <Contact />
      </main>
    </>
  );
}
