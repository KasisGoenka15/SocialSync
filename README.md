    socialsync-data.ts    # Centralized mock data and helpers
    utils.ts              # Utility functions
  routes/                 # TanStack file-based routes
    __root.tsx            # Root layout (header, footer, providers)
    index.tsx             # Home page
    about.tsx
    programs.tsx
    campaigns.tsx
    campaigns.$campaignId.tsx
    volunteers.tsx
    events.tsx
    impact.tsx
    contact.tsx
    donate.tsx
    login.tsx
    admin.tsx             # Admin layout
    admin.index.tsx
    admin.campaigns.tsx
    admin.donations.tsx
    admin.volunteers.tsx
    admin.events.tsx
    admin.programs.tsx
    admin.reports.tsx
    admin.settings.tsx
  styles.css              # Tailwind v4 theme tokens and global styles
  router.tsx              # TanStack Router setup
  start.ts                # TanStack Start configuration
public/
  favicon.svg
  robots.txt
```

---

## Design System

- **Primary Brand Color**: Leafy green (`oklch(0.5 0.13 150)`)
- **Secondary Accent**: Warm coral/amber (`oklch(0.67 0.17 38)`)
- **Background**: Warm off-white surfaces
- **Typography**: Bricolage Grotesque (display), Plus Jakarta Sans (body)
- **Shape**: Compact rounded corners (`0.75rem`)
- **Shadows**: Restrained, soft shadows for depth
- **Motion**: Subtle entrance animations, counters, progress bars, and hover effects with `prefers-reduced-motion` support

---

## Route Map

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About SocialSync |
| `/programs` | Programs overview |
| `/campaigns` | Campaign discovery |
| `/campaigns/$campaignId` | Campaign details |
| `/volunteers` | Volunteer opportunities and registration |
| `/events` | Upcoming events |
| `/impact` | Impact analytics |
| `/contact` | Contact form and FAQs |
| `/donate` | Simulated donation flow |
| `/login` | Demo login page |
| `/admin` | Admin dashboard |
| `/admin/campaigns` | Campaign management |
| `/admin/donations` | Donation management |
| `/admin/volunteers` | Volunteer management |
| `/admin/events` | Events placeholder |
| `/admin/programs` | Programs placeholder |
| `/admin/reports` | Reports placeholder |
| `/admin/settings` | Settings placeholder |

---

## Backend & Database

This project runs as a full-stack TanStack Start application. By default, it uses realistic mock data stored in the browser and does not require a backend.

If you want to add real persistence (authentication, database, file storage), enable **Lovable Cloud** in your project settings. This provisions a complete backend without external accounts or manual configuration.

---

## Important Notes

- All donations, payments, and registrations are **simulated**.
- No real money is processed.
- No real personal information is collected or stored.
- This project is intended for demo, internship, or portfolio use.

---

## License

This project is built with [Lovable](https://lovable.dev) and is provided as-is for educational and demonstration purposes.

---

## Credits

- Built with [TanStack Start](https://tanstack.com/start)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)
