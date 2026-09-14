import heroImage from "@/assets/socialsync-hero.jpg";
import programsImage from "@/assets/socialsync-programs.jpg";
import volunteersImage from "@/assets/socialsync-volunteers.jpg";

export const images = { heroImage, programsImage, volunteersImage };
export type Campaign = { id:string; title:string; category:string; description:string; goal:number; raised:number; supporters:number; deadline:string; image:string; ngo:string; };
export const campaigns: Campaign[] = [
 {id:"educate-a-child",title:"Educate a Child",category:"Education",description:"Equip 500 children with learning kits, digital access and a year of community mentorship.",goal:500000,raised:375000,supporters:284,deadline:"30 Nov 2026",image:heroImage,ngo:"Udaan Learning Collective"},
 {id:"clean-water",title:"Clean Water for Communities",category:"Community Development",description:"Install reliable filtration systems across six underserved rural communities.",goal:800000,raised:520000,supporters:412,deadline:"15 Dec 2026",image:programsImage,ngo:"Jal Jeevan Network"},
 {id:"women-skills",title:"Women Skill Development",category:"Women Empowerment",description:"Support women with market-ready skills, mentorship and micro-enterprise starter kits.",goal:400000,raised:300000,supporters:196,deadline:"20 Oct 2026",image:volunteersImage,ngo:"Sakhi Enterprise Trust"},
 {id:"green-future",title:"Green Future Initiative",category:"Environment",description:"Plant and nurture 8,000 native trees with neighborhood eco-clubs.",goal:600000,raised:420000,supporters:328,deadline:"5 Jan 2027",image:programsImage,ngo:"Harit Cities Foundation"},
 {id:"mobile-health",title:"Mobile Health Clinics",category:"Healthcare",description:"Bring preventive screenings and essential care to remote settlements.",goal:700000,raised:294000,supporters:178,deadline:"28 Feb 2027",image:heroImage,ngo:"Swasthya Access"},
 {id:"school-library",title:"Libraries That Travel",category:"Education",description:"Create mobile libraries for children in twelve low-access neighborhoods.",goal:350000,raised:154000,supporters:109,deadline:"18 Mar 2027",image:volunteersImage,ngo:"Read India Circle"},
];
export const focusAreas = [
 {title:"Education",description:"Scholarships, digital learning, school supplies and mentorship."},
 {title:"Women Empowerment",description:"Skill development, entrepreneurship and employment opportunities."},
 {title:"Healthcare",description:"Health camps, awareness programs and access to basic healthcare."},
 {title:"Environment",description:"Tree plantation, recycling and sustainability initiatives."},
 {title:"Community Development",description:"Food distribution, livelihood support and community infrastructure."},
];
export const events = [
 {title:"Community Health Camp",date:"20 September 2026",location:"Community Center",needed:20,description:"Free screenings, nutrition guidance and referrals for local families.",image:heroImage},
 {title:"Tree Plantation Drive",date:"25 September 2026",location:"City Park",needed:50,description:"A citywide morning of planting and caring for native saplings.",image:programsImage},
 {title:"Women Entrepreneurship Workshop",date:"2 October 2026",location:"SocialSync Community Hall",needed:15,description:"Practical sessions on pricing, digital selling and financial confidence.",image:volunteersImage},
 {title:"Education Awareness Campaign",date:"10 October 2026",location:"Local Schools",needed:30,description:"Interactive workshops helping families discover learning resources.",image:heroImage},
];
export const stats = [{value:"10,000+",label:"Lives Impacted"},{value:"150+",label:"Active Volunteers"},{value:"35+",label:"Successful Campaigns"},{value:"25+",label:"Communities Reached"}];
export const monthly = [{m:"Apr",v:180000},{m:"May",v:260000},{m:"Jun",v:220000},{m:"Jul",v:345000},{m:"Aug",v:390000},{m:"Sep",v:475000}];
export const programImpact = [{name:"Education",value:35},{name:"Healthcare",value:25},{name:"Women",value:20},{name:"Environment",value:10},{name:"Community",value:10}];
export const volunteers = [
 {name:"Aarav Mehta",email:"aarav@example.com",skills:"Teaching, Hindi",interest:"Education",status:"Approved",date:"12 Sep 2026"},
 {name:"Meera Iyer",email:"meera@example.com",skills:"First aid",interest:"Healthcare",status:"Pending",date:"13 Sep 2026"},
 {name:"Kabir Singh",email:"kabir@example.com",skills:"Photography",interest:"Environment",status:"Approved",date:"14 Sep 2026"},
 {name:"Naina Das",email:"naina@example.com",skills:"Community outreach",interest:"Women Empowerment",status:"Pending",date:"14 Sep 2026"},
];
export const donations = [
 {donor:"Priya Sharma",campaign:"Educate a Child",amount:5000,method:"UPI",date:"14 Sep 2026",status:"Completed"},
 {donor:"Rohan Gupta",campaign:"Clean Water for Communities",amount:10000,method:"Card",date:"13 Sep 2026",status:"Completed"},
 {donor:"Anonymous",campaign:"Green Future Initiative",amount:2500,method:"Net Banking",date:"12 Sep 2026",status:"Pending"},
 {donor:"Ananya Rao",campaign:"Women Skill Development",amount:7500,method:"UPI",date:"11 Sep 2026",status:"Completed"},
];
export const formatInr = (n:number) => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
