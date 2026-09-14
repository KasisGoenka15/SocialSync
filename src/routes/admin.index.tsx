import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "@/components/socialsync/admin";
export const Route=createFileRoute("/admin/")({head:()=>({meta:[{title:"SocialSync Admin Dashboard"},{name:"description",content:"SocialSync administration demo."},{property:"og:title",content:"SocialSync Admin Dashboard"},{property:"og:description",content:"SocialSync administration demo."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"}]}),component:AdminDashboard});
