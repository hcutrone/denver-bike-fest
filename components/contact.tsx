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
import { Label } from "radix-ui";
import { EmailForm } from "./email-form";

function validForm(form: HTMLFormElement) {
   const name = form.querySelector<HTMLInputElement>("#name")?.value.trim();
   const email = form.querySelector<HTMLInputElement>("#email")?.value.trim();
   const message = form
      .querySelector<HTMLTextAreaElement>("#message")
      ?.value.trim();

   return !!name && !!email && !!message;
}

export function ContactUs() {
   return (
      <Flex
         p={{ initial: "24px", sm: "32px" }}
         direction="column"
         gap={{ initial: "8px", sm: "16px" }}
         id="contact"
         maxWidth="1280px"
         m="auto"
      >
         <Heading
            as="h2"
            trim="end"
            size={{ initial: "7", xs: "8", sm: "9" }}
            style={{
               color: "var(--lime-11)",
            }}
         >
            Contact Us
         </Heading>
         <Text
            size={{ initial: "3", sm: "5", md: "6" }}
            style={{ color: "var(--lime-11)" }}
         >
            Have any questions, suggestions, or just want to say hi? We&apos;d
            love to hear from you! Your feedback and involvement help us make
            the festival better each year.
         </Text>

         <EmailForm
            template={process.env.NEXT_PUBLIC_CONTACT_EMAILJS_TEMPLATE_ID!}
            validate={validForm}
         >
            <Flex gap="8px" direction="column" maxWidth={"400px"} m="auto">
               <Box>
                  <Label.Root htmlFor="name">
                     <Text
                        size={{ initial: "3", sm: "5", md: "6" }}
                        style={{ color: "var(--lime-11)" }}
                     >
                        Name:
                     </Text>
                  </Label.Root>
                  <TextField.Root
                     id="name"
                     style={{ fontFamily: "var(--font-poppins)" }}
                  />
               </Box>
               <Box>
                  <Label.Root htmlFor="email">
                     <Text
                        size={{ initial: "3", sm: "5", md: "6" }}
                        style={{ color: "var(--lime-11)" }}
                     >
                        Email:
                     </Text>
                  </Label.Root>
                  <TextField.Root
                     id="email"
                     style={{ fontFamily: "var(--font-poppins)" }}
                     type="email"
                  />
               </Box>
               <Box>
                  <Label.Root htmlFor="message">
                     <Text
                        size={{ initial: "3", sm: "5", md: "6" }}
                        style={{ color: "var(--lime-11)" }}
                     >
                        Message:
                     </Text>
                  </Label.Root>
                  <TextArea
                     id="message"
                     size="3"
                     resize={"vertical"}
                     style={{ fontFamily: "var(--font-poppins)" }}
                  />
               </Box>
               <Button
                  type="submit"
                  radius="full"
                  style={{
                     width: "fit-content",
                     padding: "18px",
                     margin: "auto",
                     marginTop: "8px",
                     fontFamily: "var(--font-poppins)",
                     backgroundColor: "#d8af53",
                     cursor: "pointer",
                  }}
               >
                  <Text
                     size={{ initial: "3", sm: "5", md: "6" }}
                     style={{ color: "white" }}
                     weight="bold"
                  >
                     Submit
                  </Text>
               </Button>
            </Flex>
         </EmailForm>
      </Flex>
   );
}
