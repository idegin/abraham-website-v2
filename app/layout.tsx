import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Briie Consulting",
  description: `Briie Consulting is a premier management consulting firm dedicated to delivering exceptional strategic solutions and driving transformative growth for our clients.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/meanmenu.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/splitting.css" />
        <link rel="stylesheet" href="/css/nice-select.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {/* <TopHeader /> */}
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/meanmenu.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/nice-select.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/parallax.js" strategy="afterInteractive" />
        <Script src="/js/splitting.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.js" strategy="afterInteractive" />
        <Script src="/js/gsap/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/gsap/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
