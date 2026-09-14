import { createFileRoute } from "@tanstack/react-router";
import { CampaignDetailPage } from "@/components/socialsync/public-pages";
export const Route = createFileRoute("/campaigns/$campaignId")({ head:({params})=>({meta:[{title:`Campaign — ${params.campaignId} | SocialSync`},{name:"description",content:"Learn about this SocialSync campaign and its community impact."},{property:"og:title",content:"Support a SocialSync Campaign"},{property:"og:description",content:"See campaign progress, updates and planned contribution use."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component:Page });
function Page(){const {campaignId}=Route.useParams();return <CampaignDetailPage id={campaignId}/>;}
