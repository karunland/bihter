export default function sitemap() {
  const baseUrl = 'https://bihter.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writings`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podcasts`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/performance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/editorial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/media`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // Dinamik yazı sayfaları
    {
      url: `${baseUrl}/writings/modern-edebiyatta-kadin-yazarlar`,
      lastModified: new Date('2024-03-15'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writings/sanat-ve-toplumsal-degisim`,
      lastModified: new Date('2024-03-08'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writings/dijital-cagda-edebiyat`,
      lastModified: new Date('2024-03-01'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writings/postmodern-roman-teknigi`,
      lastModified: new Date('2024-02-20'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writings/sanat-ve-felsefe`,
      lastModified: new Date('2024-02-10'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/writings/cumhuriyet-donemi-edebiyati`,
      lastModified: new Date('2024-01-25'),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
} 