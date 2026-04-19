import React from 'react';
import Head from 'next/head';

export default function SEO() {
  const title = "Baturay Duman | Digital Architect & Entrepreneur";
  const defaultDescription = "Girişimci, dijital ürün geliştirici ve sistem mühendisidir. Robotik, Yapay Zeka (AI) Otomasyonu ve sürdürülebilir ölçeklenebilir yazılım çözümleri.";
  const siteUrl = "https://baturayduman.com"; // Replace with your production domain
  
  const keywords = "Baturay Duman, baturay, duman, Entrepreneur, Girişimci, Kurucu, Founder, Software Engineer, Yazılım Mühendisi, Web Developer, AI Automation, Yapay Zeka Otomasyonu, Dijital Ürünler, Digital Systems, Robotik, Robotics, Istanbul, Portfolio, Özgeçmiş";

  // JSON-LD Structured Data Schema - Makes Baturay Duman an explicit Entity on Google Knowledge Graph
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Baturay Duman",
    "url": siteUrl,
    "jobTitle": "Entrepreneur & Digital Systems Developer",
    "description": defaultDescription,
    "knowsAbout": [
      "Software Development",
      "Robotics",
      "AI Automation",
      "Product Management",
      "Digital System Architecture"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Istanbul",
      "addressCountry": "TR"
    }
  };

  return (
    <Head>
     {/* Google tag (gtag.js) */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-62VQTYKTQ3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-62VQTYKTQ3');
</script>
      {/* Viewport Engine */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Baturay Duman" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
      <meta name="theme-color" content="#030706" />

      {/* Open Graph (Facebook, LinkedIn, Discord sharing) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:site_name" content="Baturay Duman Portfolio" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={defaultDescription} />

      {/* Structured Google Search Entity Discovery */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
      />
    </Head>
  );
}
