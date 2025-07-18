import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Bihter Sabanoğlu - Sanat Eleştirmeni, Yazar ve Akademisyen",
  description: "Bihter Sabanoğlu'nun kişisel portfolyo sitesi. Yazıları, podcastleri, sanatsal performansları ve etkinlik katılımlarını keşfedin.",
  keywords: "Bihter Sabanoğlu, sanat eleştirmeni, yazar, akademisyen, edebiyat, sanat",
  authors: [{ name: "Bihter Sabanoğlu" }],
  openGraph: {
    title: "Bihter Sabanoğlu - Sanat Eleştirmeni, Yazar ve Akademisyen",
    description: "Bihter Sabanoğlu'nun kişisel portfolyo sitesi",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
