import {
   Box,
   Em,
   Flex,
   Heading,
   Link,
   Separator,
   Text,
} from "@radix-ui/themes";
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
         <Box
            width="100vw"
            height="20px"
            style={{ backgroundColor: "var(--yellow-accent)" }}
         />
         <Flex
            direction="column"
            justify="center"
            mx="32px"
            mb="32px"
            mt="16px"
            gap="16px"
         >
            <Heading
               as="h2"
               trim="end"
               size={{ initial: "5", sm: "7", md: "8" }}
               style={{ color: "var(--light-background)" }}
            >
               Want to help make Denver Bike Fest happen?
            </Heading>
            <Text
               size={{ initial: "3", sm: "5", md: "6" }}
               style={{ color: "var(--light-background)" }}
            >
               If your business or organization is interested in sponsoring the
               event or partnering with us, please reach out at{" "}
               <Link
                  href="mailto:denverbikefest@gmail.com"
                  underline="always"
                  style={{ color: "var(--yellow-accent)" }}
               >
                  denverbikefest@gmail.com
               </Link>
            </Text>
         </Flex>
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
