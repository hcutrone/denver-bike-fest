"use client";

import {
   Box,
   Button,
   Flex,
   Heading,
   Text,
   TextArea,
   TextField,
} from "@radix-ui/themes";
import Image from "next/image";
import { Label } from "radix-ui";
import { CollapsiblePartnerGrid, EmailForm } from "@/components";
import { partners } from "../../partner-data";

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
            size={{ initial: "6", sm: "8", md: "9" }}
            style={{ color: "var(--lime-10)" }}
         >
            Denver Bike Fest Partners
         </Heading>
         <Text
            style={{ color: "var(--lime-10)" }}
            size={{ initial: "3", sm: "5", md: "6" }}
         >
            {
               "Denver Bike Fest is proud to partner with so many amazing local groups, organizations, and businesses."
            }
         </Text>
         {partners.map((partner) => (
            <CollapsiblePartnerGrid key={partner.header} partner={partner} />
         ))}

         <Flex
            id="contact-form"
            direction={{ initial: "column", sm: "row" }}
            width="100%"
            gap="16px"
         >
            <Flex align="center" direction="column" gap="32px" p="12px">
               <Text
                  style={{ color: "var(--lime-10)" }}
                  size={{ initial: "3", sm: "5", md: "6" }}
               >
                  Interested in partnering with Denver Bike Fest next year?
                  Check back in on <strong>March 15, 2026!</strong>
               </Text>
            </Flex>
         </Flex>
      </Flex>
   );
}
