"use client";

import emailjs from "@emailjs/browser";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import { Toast } from "radix-ui";
import { useRef, useState } from "react";
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID } from "@/env";

if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID) {
   throw new Error("EmailJS environment variables are not set");
}

emailjs.init(EMAILJS_PUBLIC_KEY);

export function EmailForm({
   id,
   template,
   validate,
   formToTemplateParams,
   setLoading,
   children,
}: {
   id: string;
   template: string;
   validate: (form: HTMLFormElement) => boolean;
   formToTemplateParams: (
      form: HTMLFormElement,
   ) => Record<string, string | undefined>;
   setLoading: (loading: boolean) => void;
   children: React.ReactNode;
}) {
   const [error, setError] = useState<string | null>(null);
   const [showToast, setShowToast] = useState(false);
   const formRef = useRef<HTMLFormElement | null>(null);

   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!formRef.current) {
         return;
      }
      const form = formRef.current;
      setLoading(true);

      if (!validate(form)) {
         setError("Please fill out all fields.");
         setShowToast(true);
         return;
      }

      const templateParams = formToTemplateParams(form);
      emailjs
         .send(EMAILJS_SERVICE_ID!, template, templateParams)
         .then(() => {
            form.reset();
         })
         .catch((err) => {
            setError("Email failed to send.");
            console.error(err);
         })
         .finally(() => {
            setShowToast(true);
            setLoading(false);
         });
   };

   return (
      <>
         <form
            ref={formRef}
            id={id}
            onSubmit={sendEmail}
            style={{ width: "100%" }}
         >
            {children}
         </form>
         <ResponseToast open={showToast} setOpen={setShowToast} error={error} />
      </>
   );
}

const ResponseToast = ({
   open,
   setOpen,
   error,
}: {
   open: boolean;
   setOpen: (open: boolean) => void;
   error: string | null;
}) => {
   return (
      <Toast.Provider swipeDirection="down">
         <Toast.Root
            open={open}
            onOpenChange={setOpen}
            style={{
               backgroundColor: error ? "var(--red-2)" : "var(--lime-2)",
               borderColor: error ? "var(--red-7)" : "var(--lime-7)",
               borderWidth: "2px",
               borderStyle: "solid",
               padding: "8px",
               paddingRight: "16px",
               borderRadius: "8px",
               width: "fit-content",
            }}
         >
            <Flex direction="row" gap="12px" align="center">
               {error ? (
                  <CrossCircledIcon color="var(--red-9)" />
               ) : (
                  <CheckCircledIcon color="var(--lime-9)" />
               )}
               <Box>
                  <Toast.Title
                     style={{
                        textWrap: "nowrap",
                     }}
                  >
                     {error ? "Error sending message" : "Message sent"}
                  </Toast.Title>
                  <Toast.Description style={{ textWrap: "nowrap" }}>
                     {error ? error : "Thank you for your feedback!"}
                  </Toast.Description>
               </Box>
            </Flex>
         </Toast.Root>
         <Toast.Viewport
            style={{
               position: "fixed",
               bottom: 0,
               left: "50%",
               transform: "translateX(-50%)",
               padding: "12px",
               width: "fit-content",
               zIndex: 1000,
            }}
         />
      </Toast.Provider>
   );
};
