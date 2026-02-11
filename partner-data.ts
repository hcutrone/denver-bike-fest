const communityGroups = [
   {
      name: "Bike and Brew Denver",
      logo: "/partners/bike-and-brew.png",
   },
   {
      name: "Chains of Strength",
      logo: "/partners/chains.png",
   },
   {
      name: "Wash Park Crewzers",
      logo: "/partners/crewzers.png",
   },
];

const nonProfits = [
   {
      name: "All Bodies on Bikes",
      logo: "/partners/abob.png",
   },
   {
      name: "Bike Law",
      logo: "/partners/bike-law.png",
   },
   {
      name: "Colorado History Rides",
      logo: "/partners/colorado-history-rides.png",
   },
   {
      name: "Mayor's Bicycling Advisory Committee",
      logo: "/partners/mayors-committee.png",
   },
   {
      name: "Sun Valley Youth Center",
      logo: "/partners/sun-valley-youth-center.webp",
   },
];

const localBusinesses = [
   {
      name: "Campus Cycles",
      logo: "/partners/campus-cycles.png",
   },
   {
      name: "Ben's Cycles",
      logo: "/partners/ben-cycles.png",
   },
   {
      name: "Kidical Mass Denver",
      logo: "/partners/kidical-mass.webp",
   },
   {
      name: "Hardt Family Cyclery",
      logo: "/partners/hardt.png",
   },
   {
      name: "Z Cycle Shop",
      logo: "/partners/zcycle.png",
   },
];

export const partners = [
   { header: "Community Groups", groups: communityGroups },
   {
      header: "Nonprofit Organizations & Government Agencies",
      groups: nonProfits,
   },
   { header: "Local Businesses", groups: localBusinesses },
];

export const featuredPartners = [
   { header: "Community Groups", groups: communityGroups.slice(0, 8) },
   {
      header: "Nonprofit Organizations & Government Agencies",
      groups: nonProfits.slice(0, 8),
   },
   { header: "Local Businesses", groups: localBusinesses.slice(0, 8) },
];
