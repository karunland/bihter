export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bihter Sabanoğlu",
    "jobTitle": "",
    "description": "Bihter Sabanoğlu, Paris-İstanbul arasında yaşayan yazar ve AICA üyesi sanat eleştirmenidir. Bizans sanat tarihi, çağdaş sanat ve edebiyat alanlarında uzmanlaşmıştır.",
    "url": "https://bihtersabanoglu.com",
    "image": "https://bihtersabanoglu.com/bihtersabanoglu.webp",
    "sameAs": [
      "https://instagram.com/bihtersabanoglu",
      "https://univ-paris3.academia.edu/BihterSabanoglu"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Sorbonne Paris III Üniversitesi",
      "url": "https://www.univ-paris3.fr"
    },
    "alumniOf": [
      {
        "@type": "Organization",
        "name": "İstanbul Üniversitesi",
        "url": "https://istanbul.edu.tr"
      },
      {
        "@type": "Organization", 
        "name": "Paris III Sorbonne Üniversitesi",
        "url": "https://www.univ-paris3.fr"
      },
      {
        "@type": "Organization",
        "name": "Ecole du Louvre",
        "url": "https://www.ecoledulouvre.fr"
      },
      {
        "@type": "Organization",
        "name": "Notre Dame de Sion Fransız Kız Lisesi",
        "url": "https://www.nds.k12.tr"
      }
    ],
    "knowsAbout": [
      "Bizans Sanat Tarihi",
      "Çağdaş Sanat",
      "Edebiyat",
      "Epigrafi",
      "Hiyeroglif Çözümlemesi",
      "İngiliz Dili ve Edebiyatı",
      "Tarih Araştırmaları",
      "Mimarlık Tarihi"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "",
      "occupationLocation": [
        {
          "@type": "Place",
          "name": "Paris, Fransa"
        },
        {
          "@type": "Place", 
          "name": "İstanbul, Türkiye"
        }
      ]
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "FR"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "İstanbul",
        "addressCountry": "TR"
      }
    ],
    "nationality": "Turkish",
    "birthPlace": {
      "@type": "Place",
      "name": "İstanbul, Türkiye"
    },
    "birthDate": "1980",
    "memberOf": {
      "@type": "Organization",
      "name": "AICA",
      "url": "https://www.aicaturkey.org/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arketon Yayınları"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 