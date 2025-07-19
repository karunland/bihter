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
/app/writings/[id]/page.js
/app/podcasts/[id]/page.js
/app/performance/[id]/page.js
/app/events/[id]/page.js
```

---

## 🐳 Docker ile Çalıştırma

### Production Build

```bash
# Production build ve çalıştırma
docker-compose up --build

# Arka planda çalıştırma
docker-compose up -d --build
```

### Development Mode

```bash
# Development modunda çalıştırma
docker-compose --profile dev up --build

# Arka planda development modunda çalıştırma
docker-compose --profile dev up -d --build
```

### Docker Komutları

```bash
# Container'ları durdurma
docker-compose down

# Container'ları ve image'ları temizleme
docker-compose down --rmi all --volumes

# Logları görüntüleme
docker-compose logs -f

# Belirli bir servisin loglarını görüntüleme
docker-compose logs -f bihter-app
```

### Portlar

- **Production**: http://localhost:3000
- **Development**: http://localhost:3001
- **Health Check**: http://localhost:3000/api/health

### Environment Variables

Production için `.env` dosyası oluşturabilirsiniz:

```env
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```