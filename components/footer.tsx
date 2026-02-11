import { Avatar, Box, Flex, Link, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

export function Footer() {
   return (
      <footer>
         <Box
            width="100%"
            height="10px"
            style={{
               backgroundColor: "var(--yellow-accent)",
            }}
         />
         <Flex
            direction="column"
            gap="16px"
            p={"24px"}
            align="center"
            style={{ backgroundColor: "var(--dark-green)" }}
         >
            <Flex
               direction={{ initial: "column", xs: "row" }}
               align="center"
               gap="8px"
               justify="center"
               mx="auto"
            >
               <Text size={{ initial: "2", sm: "3" }}>Made with 🫶🏻 by</Text>
               <Box>
                  <Avatar
                     src="/harrison.jpeg"
                     fallback="HC"
                     alt="Harrison Cutrone"
                     size="2"
                  />
                  <Text
                     size={{ initial: "2", sm: "3" }}
                     style={{ marginLeft: "8px" }}
                  >
                     Harrison Cutrone (
                     <Link
                        href="https://instagram.com/harrisoncutrone"
                        style={{
                           fontSize: "inherit",
                           cursor: "pointer",
                           color: "var(--light-background)",
                        }}
                        underline="always"
                     >
                        @harrisoncutrone
                     </Link>
                     )
                  </Text>
               </Box>
            </Flex>
            <Separator
               size="3"
               style={{ backgroundColor: "var(--light-background)" }}
            />
            <Flex
               direction={{ initial: "column", xs: "row" }}
               align="center"
               gap="8px"
               justify="center"
               mx="auto"
            >
               <Text size={{ initial: "2", sm: "3" }}>
                  Organized with 🫶🏻 by
               </Text>
               <Box>
                  <Avatar
                     src="/bike-this-city.png"
                     fallback="EK"
                     alt="Emily Klienfelter"
                     size="2"
                  />
                  <Text
                     size={{ initial: "2", sm: "3" }}
                     style={{ marginLeft: "8px" }}
                  >
                     Emily Klienfelter (
                     <Link
                        href="https://instagram.com/bike.this.city"
                        style={{
                           fontSize: "inherit",
                           cursor: "pointer",
                           color: "var(--light-background)",
                        }}
                        underline="always"
                     >
                        @bike.this.city
                     </Link>
                     )
                  </Text>
               </Box>
            </Flex>
            <Separator
               size="3"
               style={{ backgroundColor: "var(--light-background)" }}
            />
            <Image
               src="/logo_horizontal_no_year.png"
               alt="Logo"
               width={500}
               height={200}
               style={{ margin: "auto" }}
            />
         </Flex>
      </footer>
   );
}
