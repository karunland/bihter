import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata = {
  title: {
    default: "Bihter Sabanoğlu - Sanat Eleştirmeni, Yazar ve Akademisyen",
    template: "%s | Bihter Sabanoğlu"
  },
  description: "Bihter Sabanoğlu&apos;nun kişisel portfolyo sitesi. Edebiyat eleştirileri, sanat yazıları, podcastler ve akademik çalışmalarını keşfedin.",
  keywords: [
    "Bihter Sabanoğlu",
    "sanat eleştirmeni",
    "yazar",
    "akademisyen",
    "edebiyat eleştirisi",
    "Türk edebiyatı",
    "feminist edebiyat",
    "sanat yazıları",
    "podcast",
    "akademik çalışmalar",
    "İstanbul Üniversitesi",
    "edebiyat araştırmaları"
  ],
  authors: [{ name: "Bihter Sabanoğlu" }],
  creator: "Bihter Sabanoğlu",
  publisher: "Bihter Sabanoğlu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bihter.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://bihter.com',
    title: 'Bihter Sabanoğlu - Sanat Eleştirmeni, Yazar ve Akademisyen',
    description: 'Bihter Sabanoğlu&apos;nun kişisel portfolyo sitesi. Edebiyat eleştirileri, sanat yazıları, podcastler ve akademik çalışmalarını keşfedin.',
    siteName: 'Bihter Sabanoğlu',
    images: [
      {
        url: 'https://bihter.whoisedgar.net/edebiyat.jpg',
        width: 200,
        height: 200,
        alt: 'Bihter Sabanoğlu - Sanat Eleştirmeni ve Yazar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bihter Sabanoğlu - Sanat Eleştirmeni, Yazar ve Akademisyen',
    description: 'Bihter Sabanoğlu&apos;nun kişisel portfolyo sitesi. Edebiyat eleştirileri, sanat yazıları, podcastler ve akademik çalışmalarını keşfedin.',
    images: ['https://bihter.whoisedgar.net/edebiyat.jpg'],
    creator: '@bihter_sabanoglu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#BDB395" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bihter Sabanoğlu" />
        <meta name="msapplication-TileColor" content="#BDB395" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.variable} ${dancingScript.variable} font-sans antialiased overflow-x-hidden`}>
        <div className="min-h-screen flex flex-col max-w-full overflow-x-hidden">
          <Navbar />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
