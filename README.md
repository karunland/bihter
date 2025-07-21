# 📚 Bihter Sabanoğlu – Kişisel Portfolyo Sitesi

Bu proje, sanat eleştirmeni, yazar ve akademisyen **Bihter Sabanoğlu** için hazırlanmış bir kişisel portfolyo sitesidir. Site, yazıları, podcastleri, sanatsal performansları ve etkinlik katılımlarını modern ve sade bir yapıda sunar.

•  Bihter Sabanoğlu Kişisel Portfolyo Sitesi (Freelance Proje)
Next.js, React ve TailwindCSS v3.4 kullanarak modern, responsive bir kişisel portfolyo sitesi geliştirdim

•  Sanat eleştirmeni ve akademisyen için yazılar, podcastler, performanslar ve etkinlikler gibi farklı içerik türlerini organize eden dinamik sayfa yapısı oluşturdum

•  SEO optimizasyonu, structured data, Open Graph meta etiketleri ve sitemap entegrasyonu ile arama motoru görünürlüğünü artırdım
Docker containerization ile deployment sürecini otomatikleştirdim

•  Tasarım ve UX Odaklı Geliştirme Yaklaşımı
Minimalist ve temiz tasarım prensibiyle, sanatçının profesyonel kimliğini yansıtan sofistike bir görsel kimlik oluşturdum
Apple tarzı sayfa geçiş animasyonları, hover efektleri ve smooth scrolling ile kullanıcı deneyimini geliştirdim

•  Mobile-first responsive tasarım yaklaşımıyla tüm cihazlarda optimal görüntüleme sağladım
Accessibility standartlarına uygun, keyboard navigation desteği ve semantic HTML yapısı ile erişilebilirlik standartlarını karşıladım

## 🧰 Kullanılan Teknolojiler

- **Next.js** – Dosya tabanlı routing ve SSG/SSR desteği
- **TailwindCSS** – Utility-first modern CSS framework
- **Framer Motion** – Sayfa geçişleri ve animasyonlar
- **Shadcn/UI** – UI bileşenleri (butonlar, sekmeler vs.)
- **MDX** – Yazı içeriklerini markdown+React formatında kullanmak için
- **Vercel** – Otomatik deploy ve hızlı hosting
- **next-sitemap** – Sitemap ve robots.txt üretimi
- **next-seo** – Sayfa bazlı SEO ayarları


## 📦 Dinamik Sayfalar (Next.js Dynamic Routing)

Her içerik kategorisi kendi sayfa parametresi ile URL alır:

```bash
/app/writings/[id]/page.js
/app/podcasts/[id]/page.js
/app/performance/[id]/page.js
/app/events/[id]/page.js
```

---

## 🐳 Docker ile Çalıştırma

### Production Build

```bash
# Arka planda çalıştırma
docker-compose up -d --build
```
