import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import localFont from "next/font/local";
import Script from "next/script";
import { DonateBanner, Footer, Header } from "@/components";

const poppins = localFont({
   src: [
      {
         path: "../public/fonts/poppins/Poppins-ExtraBold.ttf",
         weight: "800",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Bold.ttf",
         weight: "700",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Medium.ttf",
         weight: "500",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Light.ttf",
         weight: "300",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-ExtraBoldItalic.ttf",
         weight: "800",
         style: "italic",
      },
   ],
});

export const metadata: Metadata = {
   title: "Denver Bike Fest",
   description:
      "Denver Bike Fest 2026 - The ultimate celebration of Denver's bicycle community",
   keywords: [
      "Denver",
      "Bike Fest",
      "Denver Bike Fest",
      "Biking",
      "Bicycle",
      "Bike",
      "Community",
      "Events",
      "Cycling",
   ],
   authors: [
      {
         name: "Harrison Cutrone",
         url: "https://instagram.com/harrisoncutrone",
      },
      {
         name: "Emily Klienfelter",
         url: "https://instagram.com/bike.this.city",
      },
   ],
   creator: "Harrison Cutrone",
   robots: {
      index: true,
      follow: true,
   },
   openGraph: {
      title: "Denver Bike Fest",
      description: "Join us for the Denver Bike Fest!",
      url: "https://denverbikefest.app",
      siteName: "Denver Bike Fest",
      images: [
         {
            url: "https://denverbikefest.app/logo_vertical.jpg",
            alt: "Denver Bike Fest Logo",
         },
      ],
      type: "website",
      locale: "en_US",
   },
};

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en" className={poppins.className}>
         <Script id="fundraiseup" strategy="afterInteractive">
            {`
               (function(w,d,s,n,a){if(!w[n]){var l='call,catch,on,once,set,then,track,openCheckout'
               .split(','),i,o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
               :function(){return o.l.push([n,arguments])&&o}},t=d.getElementsByTagName(s)[0],
               j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a+'';
               t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=5;o.h=w.location.href;o.l=[];
               for(i=0;i<8;i++)o[l[i]]=o(l[i]);w[n]=o}
               })(window,document,'script','FundraiseUp','AUAHPMKJ');

               (function(){
                  var observer = new MutationObserver(function(){
                     var el = document.getElementById('XBWGTSDK');
                     if(el) el.remove();
                  });
                  observer.observe(document.documentElement,{childList:true,subtree:true});
               })();
            `}
         </Script>
         <body>
            <Theme
               appearance="light"
               style={{
                  fontFamily: "var(--font-poppins)",
                  // @ts-expect-error these font family props iare not recognized by Theme, but is used by the respective component
                  "--heading-font-family": "var(--font-poppins)",
                  "--em-font-family": "var(--font-poppins)",
               }}
               accentColor="lime"
            >
               <div style={{ backgroundColor: "var(--light-background)" }}>
                  <Header />
                  <main>
                     {children}
                     <DonateBanner />
                  </main>
                  <Footer />
               </div>
            </Theme>
         </body>
      </html>
   );
}
