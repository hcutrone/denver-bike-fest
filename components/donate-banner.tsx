"use client";

import { Button, Flex, IconButton, Link, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

export const DonateBanner = () => {
   const [isVisible, setIsVisible] = useState(true);
   if (!isVisible) {
      return null;
   }
   return (
      <Flex
         id="donate-banner"
         position="fixed"
         bottom="0"
         left="50%"
         minWidth={{ initial: "90%", sm: "700px", md: "760px" }}
         p="12px"
         mb="8px"
         align="center"
         justify="between"
         gap="12px"
         style={{
            backgroundColor: "var(--light-background)",
            border: "1px solid var(--dark-green)",
            borderRadius: "12px",
            transform: "translateX(-50%)",
            boxShadow: "0 6px 8px rgba(0, 0, 0, 0.3)",
         }}
      >
         <IconButton
            variant="ghost"
            color="gray"
            onClick={() => setIsVisible(false)}
            radius="full"
            style={{
               position: "absolute",
               top: "0",
               right: "8px",
               backgroundColor: "transparent",
               cursor: "pointer",
            }}
         >
            &times;
         </IconButton>
         <Flex gap="inherit" align="center">
            <Image
               src="/blucifer-tee.png"
               alt="Blucifer Bike Tee"
               width="60"
               height="60"
               style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                  border: "1px solid var(--yellow-accent)",
               }}
            />
            <Text
               size={{ initial: "3", sm: "4", md: "5" }}
               style={{ color: "var(--dark-green)" }}
            >
               Donate now to preorder a{" "}
               <strong>Denver Bike Fest 2026 shirt</strong>!
            </Text>
         </Flex>
         <Button
            asChild
            style={{
               padding: "12px 14px",
               cursor: "pointer",
               fontFamily: "var(--font-poppins)",
               backgroundColor: "var(--dark-green)",
               borderRadius: "12px",
            }}
         >
            <Link
               href="https://bikewalkbus.donorsupport.co/page/DenverBikeFest2026"
               target="_blank"
               rel="noopener noreferrer"
            >
               <Text
                  size={{ initial: "3", sm: "4", md: "5" }}
                  style={{ color: "var(--light-background)" }}
                  weight="bold"
               >
                  Donate
               </Text>
            </Link>
         </Button>
      </Flex>
   );
};
