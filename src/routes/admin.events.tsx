import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/socialsync/admin";
export const Route=createFileRoute("/admin/events")({head:()=>({meta:[{title:"Events Management — SocialSync"},{name:"description",content:"SocialSync events administration demo."},{property:"og:title",content:"Events Management — SocialSync"},{property:"og:description",content:"SocialSync events administration demo."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:()=> <AdminPlaceholder section="Events"/>});
