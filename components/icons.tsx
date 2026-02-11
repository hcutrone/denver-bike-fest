import { Flex, Link, Text } from "@radix-ui/themes";
import Image from "next/image";

export const Icons = () => (
   <Flex direction="column" gap="16px">
      {iconCredits.map((icon) => (
         <Flex key={icon.name} direction="row" align="center" height="32px">
            <Image
               src={icon.iconPath}
               alt={icon.name}
               width={48}
               height={24}
               style={{ marginRight: "8px" }}
            />
            <Text style={{ color: "var(--dark-green)" }}>
               icon made by{" "}
               <Link
                  href={icon.authorLink}
                  title={icon.author}
                  style={{ color: "var(--yellow-accent)" }}
                  underline="always"
               >
                  {icon.author}
               </Link>{" "}
               from{" "}
               <Link
                  href="https://www.flaticon.com/"
                  title="Flaticon"
                  style={{ color: "var(--yellow-accent)" }}
                  underline="always"
               >
                  {" "}
                  www.flaticon.com
               </Link>
            </Text>
         </Flex>
      ))}
   </Flex>
);

const iconCredits = [
   {
      name: "Tandem Bike Icon",
      iconPath: "/tandem.png",
      author: "Fliqqer",
      authorLink: "https://www.flaticon.com/authors/fliqqer",
   },
   {
      name: "Cargo Bike Icon",
      iconPath: "/cargo.png",
      author: "Darwin Mulya",
      authorLink: "https://www.flaticon.com/authors/darwin-mulya",
   },
   {
      name: "Cruiser Bike Icon",
      iconPath: "/cruiser.png",
      author: "Becris",
      authorLink: "https://www.flaticon.com/authors/becris",
   },
   {
      name: "Commuter Bike Icon",
      iconPath: "/commuter.png",
      author: "HAJICON",
      authorLink: "https://www.flaticon.com/authors/hajicon",
   },
   {
      name: "Strider Bike Icon",
      iconPath: "/strider.png",
      author: "berkahicon",
      authorLink: "https://www.flaticon.com/authors/berkahicon",
   },
];
