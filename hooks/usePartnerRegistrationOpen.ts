const endOfPartnerRegistration = 1778911199000; // May 15th, 11:59pm MST

export function usePartnerRegistrationOpen() {
   return { isPartnerRegistrationOpen: endOfPartnerRegistration > Date.now() };
}
