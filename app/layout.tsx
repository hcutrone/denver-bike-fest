import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Flex, Text, Theme } from "@radix-ui/themes";
import localFont from "next/font/local";
import { headers } from "next/headers";
import Image from "next/image";
import Script from "next/script";
import { Footer, Header } from "@/components";

const poppins = localFont({
   src: [
      {
         path: "../public/fonts/poppins/Poppins-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-ExtraBold.ttf",
         weight: "800",
         style: "normal",
      },
      {
         path: "../public/fonts/poppins/Poppins-Light.ttf",
         weight: "300",
         style: "normal",
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
            url: "/logo.png",
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
   const headerStore = await headers();
   const showSite = headerStore.get("x-show-site") === "true";
   return (
      <html lang="en" className={poppins.className}>
         <head>
            <Script id="fundraiseup" strategy="afterInteractive">
               {`
						(function(w,d,s,n,a){if(!w[n]){var l='call,catch,on,once,set,then,track,openCheckout'
						.split(','),i,o=function(n){return'function'==typeof n?o.l.push([arguments])&&o
						:function(){return o.l.push([n,arguments])&&o}},t=d.getElementsByTagName(s)[0],
						j=d.createElement(s);j.async=!0;j.src='https://cdn.fundraiseup.com/widget/'+a+'';
						t.parentNode.insertBefore(j,t);o.s=Date.now();o.v=5;o.h=w.location.href;o.l=[];
						for(i=0;i<8;i++)o[l[i]]=o(l[i]);w[n]=o}
						})(window,document,'script','FundraiseUp','AUAHPMKJ');
					`}
            </Script>
         </head>
         <body>
            <Theme
               appearance="light"
               style={{ fontFamily: "var(--font-poppins)" }}
               accentColor="lime"
            >
               <div style={{ backgroundColor: "var(--lime-1)" }}>
                  {showSite ? (
                     <>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                     </>
                  ) : (
                     <main>
                        <ComingSoon />
                     </main>
                  )}
               </div>
            </Theme>
         </body>
      </html>
   );
}

function ComingSoon() {
   return (
      <Flex
         style={{
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
         }}
      >
         <Image
            src="/landing.jpeg"
            alt="Landing"
            fill
            style={{ objectFit: "cover", opacity: 0.5 }}
         />
         <Flex
            width="100%"
            px="16px"
            gap="8px"
            style={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               fontSize: "48px",
               fontWeight: "bold",
               flexDirection: "column",
               alignItems: "center",
               textAlign: "center",
            }}
         >
            <Image
               src="/logo_vertical.png"
               alt="Logo"
               width={500}
               height={500}
            />
            <HighlightedText>
               2026 Date & Location announcement coming soon!
            </HighlightedText>
         </Flex>
      </Flex>
   );
}

const HighlightedText = ({ children }: { children: React.ReactNode }) => (
   <Flex
      px={{ initial: "16px", sm: "24px" }}
      py={{ initial: "4px", sm: "12px" }}
      style={{
         backgroundColor: "#d8af53",
         borderRadius: "50px",
      }}
   >
      <Text size={{ initial: "6", sm: "8" }} style={{ color: "white" }}>
         {children}
      </Text>
   </Flex>
);
