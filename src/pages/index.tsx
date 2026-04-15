import Head from 'next/head';
import SettingsDropdown from '../components/SettingsDropdown';
import Hero from '../components/Hero';
import AboutExperience from '../components/AboutExperience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Baturay Duman | Portfolio</title>
        <meta name="description" content="Baturay Duman - Entrepreneur & Founder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ position: 'relative' }}>
        <SettingsDropdown />
        <Hero />
        <AboutExperience />
        <Contact />
      </main>
    </>
  );
}
