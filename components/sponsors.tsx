import { Box, Em, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

const sponsorTiers = [
   {
      name: "Tandem",
      logo: "/tandem.png",
      color: "#af9096",
   },
   {
      name: "Cargo",
      logo: "/cargo.png",
      color: "#d8af53",
   },
   {
      name: "Cruiser",
      logo: "/cruiser.png",
      color: "#8f9b93",
   },
];

export function Sponsors() {
   const SponsorHeader = ({
      name,
      logo,
      color,
      index,
   }: {
      name: string;
      logo: string;
      color: string;
      index: number;
   }) => (
      <Flex direction="column" align="center" gap="8px">
         <Image src={logo} alt={name} width={150 - index * 35} height={100} />
         <Flex
            width="100%"
            justify="center"
            px={"16px"}
            style={{
               backgroundColor: color,
               borderRadius: "50px",
            }}
         >
            <Text
               size={(6 - index).toString() as "6" | "5" | "4"}
               style={{
                  color: "white",
                  fontWeight: "bold",
               }}
            >
               {name}
            </Text>
         </Flex>
      </Flex>
   );
   return (
      <Flex
         direction="column"
         gap="8px"
         style={{ backgroundColor: "var(--dark-green)" }}
      >
         <Box
            width="100%"
            height="20px"
            style={{ backgroundColor: "var(--yellow-accent)" }}
         />
         <Flex
            pt={"12px"}
            style={{
               justifyContent: "center",
               textAlign: "center",
            }}
         >
            <Heading
               size={{ initial: "7", xs: "8", sm: "9" }}
               style={{ color: "var(--light-background)" }}
            >
               <Em>Thank you to our sponsors:</Em>
            </Heading>
         </Flex>
         {sponsorTiers.map((tier, idx) => (
            <Flex direction="column" key={tier.name} gap="16px" align="center">
               <SponsorHeader {...tier} index={idx} />
               <SponsorSpace index={idx} />
               {idx < sponsorTiers.length - 1 && (
                  <Separator
                     orientation="horizontal"
                     size="4"
                     mb={{ initial: "8px", sm: "12px" }}
                     style={{
                        height: "4px",
                        backgroundColor: "var(--light-background)",
                     }}
                  />
               )}
            </Flex>
         ))}
      </Flex>
   );
}

const SponsorSpace = ({ index }: { index: number }) => (
   // 200, 150, 100
   <Box
      style={{
         width: "100%",
         height: `${200 - index * 50}px`,
      }}
   />
);
