import { createFileRoute } from "@tanstack/react-router";
import { AdminDonations } from "@/components/socialsync/admin";
export const Route=createFileRoute("/admin/donations")({head:()=>({meta:[{title:"Donation Management — SocialSync"},{name:"description",content:"SocialSync administration demo."},{property:"og:title",content:"Donation Management — SocialSync"},{property:"og:description",content:"SocialSync administration demo."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:AdminDonations});
