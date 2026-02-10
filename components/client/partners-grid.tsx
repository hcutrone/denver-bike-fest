"use client";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon, Flex, Grid, Text } from "@radix-ui/themes";
import { Collapsible } from "radix-ui";
import { useState } from "react";
import { PartnerCard } from "@/components";

export function CollapsiblePartnerGrid({
   partner,
}: {
   partner: { header: string; groups: { name: string; logo: string }[] };
}) {
   const [isOpen, setIsOpen] = useState(true);
   return (
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
         <Flex
            direction="column"
            gap="16px"
            width="100%"
            style={{
               backgroundColor: "var(--yellow-accent)",
               borderRadius: "12px",
               padding: "16px",
            }}
         >
            <Collapsible.Trigger
               style={{
                  width: "100%",
                  cursor: "pointer",
               }}
            >
               <Flex
                  direction="row"
                  justify="between"
                  align="center"
                  width="100%"
               >
                  <Text
                     size={{ initial: "4", sm: "5", md: "6" }}
                     style={{ color: "white" }}
                  >
                     {partner.header}
                  </Text>
                  {isOpen ? (
                     <ChevronUpIcon aria-hidden style={{ color: "white" }} />
                  ) : (
                     <ChevronDownIcon aria-hidden style={{ color: "white" }} />
                  )}
               </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content style={{ padding: "16px" }}>
               <Grid
                  columns={{ initial: "2", sm: "4", md: "5", lg: "6" }}
                  gap="16px"
               >
                  {partner.groups.map((group, index) => (
                     <PartnerCard
                        key={group.name + index.toString()}
                        group={group}
                     />
                  ))}
               </Grid>
            </Collapsible.Content>
         </Flex>
      </Collapsible.Root>
   );
}
