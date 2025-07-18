# 📚 Bihter Sabanoğlu – Kişisel Portfolyo Sitesi

Bu proje, sanat eleştirmeni, yazar ve akademisyen **Bihter Sabanoğlu** için hazırlanmış bir kişisel portfolyo sitesidir. Site, yazıları, podcastleri, sanatsal performansları ve etkinlik katılımlarını modern ve sade bir yapıda sunar.

---

## 🧰 Kullanılan Teknolojiler

- **Next.js** – Dosya tabanlı routing ve SSG/SSR desteği
- **TailwindCSS** – Utility-first modern CSS framework
- **Framer Motion** – Sayfa geçişleri ve animasyonlar
- **Shadcn/UI** – UI bileşenleri (butonlar, sekmeler vs.)
- **MDX** – Yazı içeriklerini markdown+React formatında kullanmak için
- **Vercel** – Otomatik deploy ve hızlı hosting
- **next-sitemap** – Sitemap ve robots.txt üretimi
- **next-seo** – Sayfa bazlı SEO ayarları

---

## 🎨 Renk Paleti

| Kullanım           | HEX       |
|--------------------|-----------|
| Ana Arka Plan      | `#F6F0F0` |
| Hover / Vurgu      | `#F2E2B1` |
| İkincil Zemin      | `#D5C7A3` |
| Metin ve Çizgiler  | `#BDB395` |

---

## 🗂️ Sayfa Yapısı

| Sayfa          | Route             | Açıklama                                        |
|----------------|-------------------|-------------------------------------------------|
| Ana Sayfa      | `/`               | Yazar portresi, kısa tanıtım ve öne çıkan içerikler |
| Yazılar        | `/writings`       | Makaleler, eleştiriler, denemeler               |
| Podcastler     | `/podcasts`       | Spotify ve iVoox bağlantılı podcast bölümleri   |
| Editörlük      | `/editorial`      | Editörlüğünü üstlendiği kitaplar                |
| Performans     | `/performance`    | Sanatsal işler, sergiler ve performanslar       |
| Etkinlikler    | `/events`         | Katıldığı konferans, panel, sempozyumlar        |
| Medya          | `/media`          | Belgesel ve video içerikleri                    |
| Hakkında       | `/about`          | Biyografi ve akademik geçmiş                    |
| İletişim       | `/contact`        | E-posta iletişim formu veya bilgisi             |

---

## 📦 Dinamik Sayfalar (Next.js Dynamic Routing)

Her içerik kategorisi kendi sayfa parametresi ile URL alır:

```bash
/pages/writings/[slug].tsx
/pages/podcasts/[slug].tsx
/pages/performance/[slug].tsx
/pages/events/[slug].tsx