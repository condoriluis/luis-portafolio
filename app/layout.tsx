import type { Metadata } from "next";

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import 'lightbox2/dist/css/lightbox.min.css';

import "./globals.css";
import './responsive.css';

export const metadata: Metadata = {
  title: "Luis Alberto - Portafolio",
  description: "Mi portafolio desarrollado en Next.js, React y Tailwind CSS",
  icons: {
    icon: "/assets/images/favicon.png",
  },
  openGraph: {
    title: "Luis Alberto - Portafolio",
    description: "Mi portafolio desarrollado en Next.js, React y Tailwind CSS",
    images: ["/assets/images/favicon.png"],
  },
  metadataBase: new URL("https://luis-portafolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
      </head>

      <body className={`home-page`}>
        {children}
      </body>
    </html>
  );
}
