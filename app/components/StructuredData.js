export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bihter Sabanoğlu",
    "jobTitle": "Sanat Eleştirmeni, Yazar ve Akademisyen",
    "description": "Bihter Sabanoğlu, Türk edebiyatı, feminist edebiyat eleştirisi ve sanat eleştirisi alanlarında uzmanlaşmış bir akademisyen ve yazardır.",
    "url": "https://bihter.com",
    "image": "https://bihter.com/edebiyat.jpg",
    "sameAs": [
      "https://twitter.com/bihter_sabanoglu",
      "https://linkedin.com/in/bihter-sabanoglu"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "İstanbul Üniversitesi",
      "url": "https://istanbul.edu.tr"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "İstanbul Üniversitesi",
      "url": "https://istanbul.edu.tr"
    },
    "knowsAbout": [
      "Türk Edebiyatı",
      "Feminist Edebiyat Eleştirisi",
      "Postmodern Edebiyat",
      "Sanat Eleştirisi",
      "Kültür Çalışmaları",
      "Dijital Edebiyat"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Akademisyen",
      "occupationLocation": {
        "@type": "Place",
        "name": "İstanbul, Türkiye"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "nationality": "Turkish",
    "birthPlace": {
      "@type": "Place",
      "name": "İstanbul, Türkiye"
    },
    "birthDate": "1985",
    "award": [
      "Türk Edebiyatı Araştırma Ödülü - Türk Dil Kurumu (2023)",
      "Sanat Eleştirisi Ödülü - İstanbul Sanat Vakfı (2021)",
      "Genç Akademisyen Ödülü - İstanbul Üniversitesi (2019)"
    ],
    "publication": [
      {
        "@type": "Article",
        "name": "Modern Edebiyatta Kadın Yazarların Rolü",
        "datePublished": "2024-03-15",
        "url": "https://bihter.com/writings/modern-edebiyatta-kadin-yazarlar"
      },
      {
        "@type": "Article",
        "name": "Sanat ve Toplumsal Değişim",
        "datePublished": "2024-03-08",
        "url": "https://bihter.com/writings/sanat-ve-toplumsal-degisim"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 