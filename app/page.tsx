"use server";

import { Flex, VisuallyHidden } from "@radix-ui/themes";
import Image from "next/image";
import { ContactUs, General, Partners, Sponsors } from "@/components";
import { HighlightedText } from "./layout";

export default async function Home() {
   return (
      <>
         <LandingImage />
         <General />
         <Partners />
         <Sponsors />
         <ContactUs />
      </>
   );
}

function LandingImage() {
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
               alt="Denver Bike Fest Logo"
               width={300}
               height={300}
            />
            <VisuallyHidden>
               <h1>Denver Bike Fest</h1>
            </VisuallyHidden>
            <HighlightedText>Bikes, Community, and Connection!</HighlightedText>
            <HighlightedText>June 13, 2026 | 3PM - 9PM</HighlightedText>
            <HighlightedText>York Street Yards</HighlightedText>
         </Flex>
      </Flex>
   );
}
