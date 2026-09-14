import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/socialsync/admin";
export const Route=createFileRoute("/admin/reports")({head:()=>({meta:[{title:"Reports Management — SocialSync"},{name:"description",content:"SocialSync reports administration demo."},{property:"og:title",content:"Reports Management — SocialSync"},{property:"og:description",content:"SocialSync reports administration demo."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:()=> <AdminPlaceholder section="Reports"/>});
