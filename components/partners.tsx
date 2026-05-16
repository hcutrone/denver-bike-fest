import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/props";
import Image from "next/image";
import { allPartners as partners } from "../partner-data/partner-data";

export function Partners() {
   return (
      <Flex
         id="partners"
         style={{
            backgroundColor: "var(--dark-green)",
         }}
      >
         <Box
            position="absolute"
            width="100%"
            height="20px"
            style={{
               backgroundColor: "var(--yellow-accent)",
            }}
         />
         <Flex
            p={{ initial: "24px", sm: "32px" }}
            direction="column"
            gap={{ initial: "8px", sm: "16px", md: "32px" }}
            maxWidth="1280px"
            m="auto"
            overflowX="hidden"
         >
            <Flex align="center" gap={{ initial: "8px" }}>
               <Box
                  height={{ initial: "25px", xs: "30px", sm: "50px" }}
                  width={{ initial: "150px", xs: "180px", sm: "300px" }}
                  minWidth={"150px"}
                  mt="8px"
                  position="relative"
               >
                  <Image
                     src="/logo_horizontal_no_year.png"
                     alt="Denver Bike Fest Logo"
                     fill
                     style={{ objectFit: "contain" }}
                  />
               </Box>
               <Heading
                  as="h2"
                  trim="end"
                  size={{ initial: "7", xs: "8", sm: "9" }}
                  style={{ color: "var(--lime-3)" }}
               >
                  Partners
               </Heading>
            </Flex>
            <PartnerRegistrationClosed />
            <Flex gap={{ initial: "16px", sm: "32px" }} direction="column">
               {partners.map((partner) => (
                  <Flex
                     gap={{ initial: "8px", sm: "12px", md: "16px" }}
                     direction="column"
                     key={partner.header}
                  >
                     <Flex justify="between" align="center">
                        <Text size={{ initial: "5", sm: "7", md: "8" }}>
                           {partner.header}
                        </Text>
                        <Link
                           size={{ initial: "3", sm: "5", md: "6" }}
                           href="/partners"
                           wrap="nowrap"
                           style={{
                              textDecoration: "underline",
                              color: "var(--lime-3)",
                           }}
                        >
                           See All {">"}
                        </Link>
                     </Flex>
                     <Flex
                        direction="row"
                        overflowX="scroll"
                        gap={{ initial: "8px", sm: "16px" }}
                        style={{
                           backgroundColor: "var(--yellow-accent)",
                           borderRadius: "25px",
                        }}
                        py={{ initial: "16px", sm: "24px", md: "32px" }}
                     >
                        <div
                           style={{
                              position: "sticky",
                              left: 0,
                              minHeight: "100%",
                              minWidth: "20px",
                              display: "flex",
                              background:
                                 "linear-gradient(90deg, var(--yellow-accent) 0%, rgba(255, 255, 255, 0) 100%)",
                           }}
                        />
                        {partner.groups.map((group) => (
                           <PartnerCard
                              key={group.name}
                              {...group}
                              url={
                                 group.url ??
                                 (group.instagram
                                    ? `https://www.instagram.com/${group.instagram.substring(1)}`
                                    : undefined)
                              }
                              highlightClass={"hover-highlight-green-orange"}
                              imageSizing={{
                                 initial: "150px",
                                 sm: "175px",
                                 md: "200px",
                              }}
                           />
                        ))}
                        <div
                           style={{
                              position: "sticky",
                              right: 0,
                              minHeight: "100%",
                              minWidth: "20px",
                              display: "flex",
                              background:
                                 "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--yellow-accent) 100%)",
                           }}
                        />
                     </Flex>
                  </Flex>
               ))}
            </Flex>
         </Flex>
      </Flex>
   );
}

export const PartnerCard = ({
   name,
   url,
   logo,
   highlightClass,
   imageSizing,
}: {
   name: string;
   url?: string;
   logo: string;
   highlightClass: string;
   imageSizing: string | Responsive<string>;
}) => {
   return (
      <Flex
         key={name}
         minHeight={imageSizing}
         minWidth={imageSizing}
         align="center"
         justify="center"
         position="relative"
      >
         <Link
            href={url}
            target="_blank"
            style={{ width: "100%", height: "100%" }}
         >
            <Image
               className={highlightClass}
               src={logo}
               alt={name}
               fill
               style={{
                  objectFit: "contain",
                  borderRadius: "12px",
                  padding: "4px",
                  backgroundColor: "var(--light-background)",
               }}
            />
         </Link>
      </Flex>
   );
};

const PartnerRegistrationClosed = () => (
   <Text size={{ initial: "3", sm: "5", md: "6" }}>
      {`Partner registration for 2026 is closed! Join us on June 13th to see these wonderful partners:`}
   </Text>
);
