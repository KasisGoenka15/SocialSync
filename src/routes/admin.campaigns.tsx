import { createFileRoute } from "@tanstack/react-router";
import { AdminCampaigns } from "@/components/socialsync/admin";
export const Route=createFileRoute("/admin/campaigns")({head:()=>({meta:[{title:"Campaign Management — SocialSync"},{name:"description",content:"SocialSync administration demo."},{property:"og:title",content:"Campaign Management — SocialSync"},{property:"og:description",content:"SocialSync administration demo."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:AdminCampaigns});
