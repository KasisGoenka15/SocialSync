# SocialSync NGO Platform

## Overview
Build a polished, responsive, demo-only NGO management platform with a public website, campaign discovery and detail flows, simulated donation and registration interactions, impact analytics, and a separate admin experience. All data remains realistic mock data in the browser; no real payments or personal information storage.

## Public experience
- Create a shared sticky header, responsive mobile menu, branded footer, page headers, section headings, cards, progress indicators, forms, dialogs, notifications, loading/empty states, and accessible controls.
- Build the home page with community-focused imagery, impact counters, audience cards, focus areas, featured campaigns, four-step process, volunteer callout, and testimonials.
- Add dedicated pages for About, Programs, Campaigns, campaign details, Volunteers, Events, Impact, Contact, Donation, and Login.
- Make campaign discovery functional with text search, category filters, campaign detail links, and load-more behavior.
- Build simulated donation, volunteer, contact, newsletter, event registration, and login flows with client-side validation and clear demo notices.
- Generate a downloadable/printable-looking mock donation receipt after successful submission, including the donor’s entered values and a dummy transaction ID.

## Admin experience
- Create a responsive admin shell with sidebar navigation and mobile navigation.
- Build the overview dashboard with KPI cards, donation/volunteer/campaign charts, and recent activity.
- Add campaign, volunteer, and donation management views with realistic tables, filters, status controls, and confirmation dialogs.
- Add campaign creation/editing UI and useful placeholder views for Events, Programs, Reports, and Settings so every sidebar destination works.

## Visual system
- Establish a semantic Tailwind design system using warm white surfaces, trustworthy leafy green, coral/amber accents, charcoal text, compact rounded corners, and restrained shadows.
- Use a distinctive modern display/body font pairing loaded in the document head.
- Generate and use a cohesive set of authentic community, volunteer, education, healthcare, water, women’s livelihood, and environmental imagery stored with the project.
- Add subtle entrance, counter, progress, and interaction motion while respecting reduced-motion preferences.
- Ensure layouts, tables, forms, navigation, and charts adapt cleanly across mobile, tablet, and desktop.

## Technical approach
- Use TanStack Router route files for all destinations and shared React components for public navigation, admin navigation, campaign cards, forms, and data displays.
- Centralize mock campaign, event, impact, testimonial, volunteer, donation, and activity data so public and admin views remain consistent.
- Use the existing component library, Lucide icons, React Hook Form with Zod validation, Sonner notifications, and Recharts.
- Add unique titles, descriptions, Open Graph metadata, and Twitter metadata to every content route.
- Validate the complete experience in the running preview at desktop and mobile widths, including navigation, filters, dialogs, forms, confirmation states, charts, and overflow.

## Route map
- `/` Home
- `/about`, `/programs`, `/campaigns`, `/campaigns/$campaignId`
- `/volunteers`, `/events`, `/impact`, `/contact`, `/donate`, `/login`
- `/admin`, `/admin/campaigns`, `/admin/donations`, `/admin/volunteers`
- `/admin/events`, `/admin/programs`, `/admin/reports`, `/admin/settings`
