# 🌱 SocialSync

### Connect. Contribute. Create Impact.

**SocialSync** is a modern NGO management and community-impact platform designed to connect **NGOs, volunteers, donors, and communities** through one unified digital platform.

The platform enables users to discover social causes, explore campaigns, participate in volunteering opportunities, support initiatives through simulated donations, register for events, and visualize the impact created by their contributions.

It also provides an **admin dashboard** for managing campaigns, donations, volunteers, events, programs, and impact analytics.

🔗 **Live Demo:** https://preview--cause-bridge-hub.lovable.app/
🔗 **GitHub:** https://github.com/KasisGoenka15/SocialSync

---

## 🎯 Problem Statement

NGOs often manage campaigns, volunteers, donations, events, and community activities through disconnected systems.

At the same time, people who want to contribute to social causes may find it difficult to:

* Discover trustworthy campaigns
* Find suitable volunteering opportunities
* Participate in community events
* Understand how their contributions create impact
* Track social initiatives in one place

**SocialSync addresses this gap by bringing these activities together into a single, easy-to-use platform.**

---

## 💡 Solution

SocialSync provides a centralized digital ecosystem where:

**🙋 Volunteers** can discover opportunities based on their skills and interests.

**💚 Donors** can explore campaigns and support causes they care about.

**🏢 NGOs** can manage campaigns, volunteers, events, donations, and programs.

**🌍 Communities** can discover and participate in initiatives that create measurable social impact.

---

# ✨ Key Features

## 🌐 Public Platform

### 🏠 Home

* Impact-focused hero section
* Featured campaigns
* Social impact statistics
* Focus areas
* Testimonials
* Volunteer call-to-action

### 🎯 Campaign Discovery

* Browse campaigns
* Search campaigns
* Filter by category
* View campaign progress
* View funding goals
* View supporters and deadlines
* Detailed campaign pages

### 💰 Donation System

* Predefined donation amounts
* Custom donation amounts
* One-time donations
* Monthly donations
* Campaign selection
* Donation confirmation
* Demo donation receipts

> Payments are simulated and no real money is processed.

### 🤝 Volunteer Management

* Browse volunteer opportunities
* Skill-based participation
* Area of interest selection
* Availability selection
* Volunteer registration
* Application submission

### 📅 Events

Users can explore and register for community events such as:

* Health camps
* Tree plantation drives
* Women entrepreneurship workshops
* Education awareness campaigns

### 📊 Impact Analytics

The impact dashboard visualizes:

* Lives impacted
* Campaigns completed
* Active volunteers
* Communities reached
* Contributions
* Donation trends
* Program-wise impact
* Volunteer participation
* Campaign progress

---

# ⚙️ Admin Dashboard

SocialSync includes a dedicated administration interface for managing NGO operations.

### 📈 Dashboard

Administrators can monitor:

* Total donations
* Active volunteers
* Active campaigns
* Lives impacted
* Monthly donation trends
* Volunteer growth
* Campaign performance
* Recent activity

### 🎯 Campaign Management

Admins can:

* Create campaigns
* View campaigns
* Edit campaigns
* Delete campaigns
* Track campaign progress
* Manage campaign status
* Set campaign deadlines

### 👥 Volunteer Management

Admins can:

* View registered volunteers
* Review applications
* Check volunteer skills
* View interests
* Approve applications
* Reject applications

### 💳 Donation Management

Admins can view:

* Donor information
* Campaign
* Donation amount
* Payment method
* Date
* Payment status

---

# 🧩 Application Routes

| Route                    | Purpose                 |
| ------------------------ | ----------------------- |
| `/`                      | Home page               |
| `/about`                 | About SocialSync        |
| `/programs`              | Social programs         |
| `/campaigns`             | Campaign discovery      |
| `/campaigns/$campaignId` | Campaign details        |
| `/volunteers`            | Volunteer opportunities |
| `/events`                | Upcoming events         |
| `/impact`                | Impact analytics        |
| `/contact`               | Contact & FAQs          |
| `/donate`                | Simulated donation flow |
| `/login`                 | Demo login              |
| `/admin`                 | Admin dashboard         |
| `/admin/campaigns`       | Campaign management     |
| `/admin/donations`       | Donation management     |
| `/admin/volunteers`      | Volunteer management    |
| `/admin/events`          | Event management        |
| `/admin/programs`        | Program management      |
| `/admin/reports`         | Reports                 |
| `/admin/settings`        | Settings                |

---

# 🎨 Design & User Experience

SocialSync follows a modern NGO + SaaS design approach.

### Design Principles

* 🌱 Green-focused visual identity
* 🧡 Warm accent colors
* 📱 Fully responsive interface
* 🃏 Rounded cards
* ✨ Subtle animations
* 📊 Interactive data visualization
* 🎯 Clear call-to-action elements
* ♿ Reduced-motion support
* 🧭 Simple navigation

### Typography

* **Bricolage Grotesque** — Display headings
* **Plus Jakarta Sans** — Body text

The interface uses a warm off-white background, leafy green primary color, warm accent colors, soft shadows, and compact rounded components.

---

# 🛠️ Tech Stack

| Technology          | Purpose                     |
| ------------------- | --------------------------- |
| **React**           | Frontend UI                 |
| **TypeScript**      | Type-safe development       |
| **TanStack Start**  | Full-stack React framework  |
| **TanStack Router** | File-based routing          |
| **Tailwind CSS**    | Styling                     |
| **shadcn/ui**       | UI components               |
| **Lucide React**    | Icons                       |
| **Vite**            | Development & build tooling |
| **Lovable**         | AI-assisted development     |

The repository currently uses TanStack Start with TypeScript and includes Tailwind, shadcn/ui, and Lucide-based UI components.

---

# 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │      SocialSync      │
                    └──────────┬───────────┘
                               │
             ┌─────────────────┴─────────────────┐
             │                                   │
      Public Platform                      Admin Platform
             │                                   │
   ┌─────────┼─────────┐             ┌───────────┼───────────┐
   │         │         │             │           │           │
Campaigns  Volunteers Events      Campaigns   Donations  Volunteers
   │         │         │             │           │           │
   └─────────┼─────────┘             └───────────┼───────────┘
             │                                   │
             └─────────────────┬─────────────────┘
                               │
                       Impact Analytics
```

The application currently uses centralized mock data and browser-based state for demonstration purposes. Real persistence can be added through a backend/cloud layer in a future version.

---

# 📂 Project Structure

```text
SocialSync/
│
├── public/
│
├── src/
│   ├── components/
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── about.tsx
│   │   ├── programs.tsx
│   │   ├── campaigns.tsx
│   │   ├── campaigns.$campaignId.tsx
│   │   ├── volunteers.tsx
│   │   ├── events.tsx
│   │   ├── impact.tsx
│   │   ├── contact.tsx
│   │   ├── donate.tsx
│   │   ├── login.tsx
│   │   │
│   │   └── admin/
│   │       ├── admin.index.tsx
│   │       ├── admin.campaigns.tsx
│   │       ├── admin.donations.tsx
│   │       ├── admin.volunteers.tsx
│   │       ├── admin.events.tsx
│   │       ├── admin.programs.tsx
│   │       ├── admin.reports.tsx
│   │       └── admin.settings.tsx
│   │
│   ├── data/
│   ├── styles.css
│   └── router.tsx
│
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.*
└── README.md
```

---

# 🚀 Getting Started

## Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/)
* npm
* Git

## Clone the Repository

```bash
git clone https://github.com/KasisGoenka15/SocialSync.git
```

## Navigate to the Project

```bash
cd SocialSync
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Open the local development URL shown in your terminal.

---

# 🔐 Demo Data & Security

This project currently uses **mock/demo data**.

The following functionality is simulated:

* Authentication
* Donations
* Payment processing
* Transaction IDs
* Volunteer registration
* Event registration

### Important

* No real payments are processed.
* No real financial transactions take place.
* No real personal information is intentionally collected or stored.
* The project is intended for **educational, internship, demonstration, and portfolio purposes**.

---

# 🌱 Social Impact Areas

SocialSync focuses on multiple areas of community development:

### 📚 Education

Scholarships, digital learning, school supplies and mentorship.

### 👩 Women Empowerment

Skill development, entrepreneurship and employment opportunities.

### 🏥 Healthcare

Health camps, awareness programs and access to basic healthcare.

### 🌳 Environment

Tree plantation, recycling and sustainability initiatives.

### 🏘️ Community Development

Food distribution, livelihood support and community infrastructure.

---

# 🔮 Future Scope

SocialSync can be extended into a production-ready platform by adding:

### 🔐 Authentication

* Secure user authentication
* Role-based authorization
* NGO accounts
* Volunteer profiles
* Donor profiles

### 🗄️ Backend & Database

* PostgreSQL / MongoDB
* Persistent user data
* Campaign database
* Donation records
* Volunteer records

### 💳 Real Payments

* UPI
* Razorpay
* Stripe
* Secure payment verification
* Automated receipts

### 🤖 AI Features

* AI-powered campaign recommendations
* Volunteer opportunity matching
* Impact report generation
* Campaign success prediction
* Personalized cause discovery

### 📍 Location-Based Features

* Nearby volunteering opportunities
* NGO discovery
* Event discovery
* Location-based campaigns

### 📱 Mobile Application

A dedicated Android/iOS application for volunteers and donors.

---

# 📈 Why SocialSync?

SocialSync is more than an informational NGO website.

It demonstrates how a modern web application can combine:

**Community Engagement + NGO Management + Campaigns + Donations + Volunteering + Events + Analytics**

into a single platform.

The project is designed to demonstrate practical skills in:

* Frontend development
* TypeScript
* React architecture
* Routing
* Responsive UI
* Component-based development
* Dashboard design
* Data visualization
* Form handling
* Product-oriented UX

---

# 👨‍💻 Project

**SocialSync — NGO Management & Community Impact Platform**

**Developer:** Kasis Goenka

**GitHub:** https://github.com/KasisGoenka15/SocialSync

**Live Demo:** https://preview--cause-bridge-hub.lovable.app/

---

# ⭐ Support

If you found this project interesting, consider giving the repository a ⭐ on GitHub.

> **Connect. Contribute. Create Impact. 🌱**

---

## 📜 License

This project is provided for **educational, demonstration, internship, and portfolio purposes**.
