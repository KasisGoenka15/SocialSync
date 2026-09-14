import { createFileRoute } from "@tanstack/react-router";
import { AdminPlaceholder } from "@/components/socialsync/admin";
export const Route=createFileRoute("/admin/programs")({head:()=>({meta:[{title:"Programs Management — SocialSync"},{name:"description",content:"SocialSync programs administration demo."},{property:"og:title",content:"Programs Management — SocialSync"},{property:"og:description",content:"SocialSync programs administration demo."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:()=> <AdminPlaceholder section="Programs"/>});
