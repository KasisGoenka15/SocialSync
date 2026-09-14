import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/socialsync/admin";
export const Route=createFileRoute("/admin/settings")({head:()=>({meta:[{title:"Settings Management — SocialSync"},{name:"description",content:"SocialSync settings administration demo."},{property:"og:title",content:"Settings Management — SocialSync"},{property:"og:description",content:"SocialSync settings administration demo."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:()=> <AdminPlaceholder section="Settings"/>});
