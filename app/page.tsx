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
            position="relative"
            width="100%"
            height="calc(100% - 72px)"
            mt="72px"
         >
            <Flex
               direction="column"
               position="absolute"
               top="50%"
               left="50%"
               width="100%"
               maxHeight="100%"
               p="16px"
               gap="8px"
               align="center"
               style={{
                  transform: "translate(-50%, -50%)",
               }}
            >
               <Flex
                  width={{ initial: "300px", sm: "350px", md: "400px" }}
                  height={{ initial: "300px", sm: "350px", md: "400px" }}
                  position="relative"
               >
                  <Image
                     src="/logo_vertical.png"
                     alt="Denver Bike Fest Logo"
                     fill
                     style={{ objectFit: "contain" }}
                  />
               </Flex>
               <VisuallyHidden>
                  <h1>Denver Bike Fest</h1>
               </VisuallyHidden>
               <HighlightedText>
                  Bikes, Community, and Connection!
               </HighlightedText>
               <HighlightedText>
                  June 13, 2026 | 3:00 pm - 8:00 pm
               </HighlightedText>
               <HighlightedText>York Street Yards</HighlightedText>
            </Flex>
         </Flex>
      </Flex>
   );
}
