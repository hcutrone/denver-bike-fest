"use client";

import { Flex, Heading } from "@radix-ui/themes";
import { CollapsiblePartnerGrid } from "@/components";
import { foodAndMusic, partners } from "../../partner-data/partner-data";

export default function PartnersPage() {
   return (
      <Flex
         maxWidth="1280px"
         m="auto"
         width="100%"
         minHeight="100vh"
         p="32px"
         mt="64px"
         direction="column"
         gap={{ initial: "16px", sm: "32px" }}
      >
         <Heading
            as="h1"
            trim="end"
            size={{ initial: "7", xs: "8", sm: "9" }}
            style={{ color: "var(--dark-green)" }}
         >
            Denver Bike Fest Partners
         </Heading>
         <Flex justify="center">
            <Heading
               as="h2"
               trim="end"
               weight="medium"
               size={{ initial: "5", sm: "6", md: "7" }}
               style={{ color: "black", textAlign: "center" }}
            >
               Explore our 2026 Partners!
            </Heading>
         </Flex>
         {partners.map((partner) => (
            <CollapsiblePartnerGrid key={partner.header} partner={partner} />
         ))}
         <Flex py={"32px"} justify="center">
            <Heading
               as="h2"
               trim="end"
               weight="medium"
               size={{ initial: "5", sm: "6", md: "7" }}
               style={{ color: "black", textAlign: "center" }}
            >
               Enjoy live music and great food at the fest!
            </Heading>
         </Flex>
         {foodAndMusic.map((partner) => (
            <CollapsiblePartnerGrid
               key={partner.header}
               partner={partner}
               variant="green"
            />
         ))}
      </Flex>
   );
}
