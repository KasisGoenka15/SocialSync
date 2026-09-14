import { createFileRoute } from "@tanstack/react-router";
import { AdminVolunteers } from "@/components/socialsync/admin";
export const Route=createFileRoute("/admin/volunteers")({head:()=>({meta:[{title:"Volunteer Management — SocialSync"},{name:"description",content:"SocialSync administration demo."},{property:"og:title",content:"Volunteer Management — SocialSync"},{property:"og:description",content:"SocialSync administration demo."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:AdminVolunteers});
