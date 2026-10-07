# ANUVYOM — Engineering Strategic Capability For The Next Era

ANUVYOM is a sovereign corporate platform for Defence, Aerospace, Advanced Autonomous Systems, and Petrochemical industrial engineering.

Built with Next.js App Router, React 19, Three.js 3D procedural visualizations, Tailwind CSS, TypeScript, and Node.js REST API architecture.

---

## 🚀 Key Features

- **Aerospace & Defence 3D Platform Viewer**: Interactive Three.js inspection stage with multi-mode shader controls (Solid Armor, Wireframe, Thermal IR), drag-to-rotate, zoom, and live telemetry overlays.
- **Cinematic Hero Experience**: Real-time 3D procedural supersonic UAV visualization with responsive mouse parallax, orbital rings, and tactical HUD reticles.
- **Core Business Sectors**: Dedicated architectures for 4 strategic pillars:
  - `01 — Aerospace`: UAV platforms, BVLOS avionics, aerial reconnaissance pods
  - `02 — Defence`: Tactical survivability, STANAG ballistic protection, soldier-worn telemetry
  - `03 — Advanced Systems`: Multi-sensor fusion, perimeter defense, autonomous ground robotics (UGV)
  - `04 — Petrochemical`: Aerospace turbine synthetic lubricants, molecular tribology, anti-corrosive coatings
- **Operational Showcase**: Simulated flight corridor telemetry with animated radar sweeps and diagnostics.
- **Strategic Ecosystem Matrix**: Transparent institutional reference framework with domain categorization.
- **Institutional Liaison Portal**: Full REST API contact/inquiry submission with encrypted tracking reference generation (`ANV-XXXXXX`), validation, and status lifecycles.
- **REST APIs**: Full suite of endpoints (`/api/health`, `/api/contact`, `/api/inquiry`, `/api/businesses`, `/api/capabilities`, `/api/partners`).

---

## 🛠️ Technology Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, Glassmorphism, CSS Custom Tokens
- **3D & Motion**: Three.js, Lucide Icons, Framer Motion
- **Backend / APIs**: Next.js Server Route Handlers + Standalone Express/Node.js server (`server/server.js`)

---

## 📁 Project Architecture

```
d:\defence/
├── server/
│   └── server.js                # Standalone Node.js / Express REST Service
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── businesses/      # GET /api/businesses
│   │   │   ├── capabilities/    # GET /api/capabilities
│   │   │   ├── contact/         # POST /api/contact
│   │   │   ├── health/          # GET /api/health
│   │   │   ├── inquiry/         # POST /api/inquiry
│   │   │   └── partners/        # GET /api/partners
│   │   ├── about/               # /about Page
│   │   ├── businesses/          # /businesses Page
│   │   ├── capabilities/        # /capabilities Page
│   │   ├── contact/             # /contact Page
│   │   ├── partnerships/        # /partnerships Page
│   │   ├── technology/          # /technology Page
│   │   ├── globals.css          # Dark Defence Design System & HUD Utilities
│   │   ├── layout.tsx           # Global Root Layout with SEO Metadata & Cursor
│   │   └── page.tsx             # Flagship Home Page
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── Hero3DCanvas.tsx        # Interactive 3D UAV Orbit Visualizer
│   │   │   └── PlatformViewer3D.tsx    # 3D Inspection Platform Stage
│   │   ├── layout/
│   │   │   ├── Footer.tsx              # Cinematic Corporate Footer
│   │   │   └── Navbar.tsx              # Sticky Glassmorphic Navigation Bar
│   │   ├── sections/
│   │   │   ├── AboutOverviewSection.tsx
│   │   │   ├── BusinessesSection.tsx
│   │   │   ├── CapabilitiesSection.tsx
│   │   │   ├── CinematicVideoSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PartnershipsSection.tsx
│   │   │   └── PlatformShowcaseSection.tsx
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── CustomCursor.tsx
│   │       └── Logo.tsx                # Geometric SVG Monogram Logo
│   └── data/
│       ├── businesses.ts
│       ├── capabilities.ts
│       ├── company.ts
│       ├── navigation.ts
│       └── partners.ts
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Next.js Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. (Optional) Run the Standalone Express Backend
```bash
npm run server
```
Runs the Express REST API service on [http://localhost:5000](http://localhost:5000).

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | System health check and uptime diagnostic |
| `POST` | `/api/contact` | Submits institutional liaison inquiry |
| `POST` | `/api/inquiry` | Specialized procurement submission |
| `GET` | `/api/businesses` | Lists 4 core sectors with specifications |
| `GET` | `/api/capabilities` | Returns technology matrices & TRL ratings |
| `GET` | `/api/partners` | Returns strategic ecosystem directory |

---

## 🛡️ Sovereign Compliance Notice

Strategic Ecosystem representations illustrate alignment with defence, aerospace, and sovereign industrial capability matrices. Names, acronyms, and organizational references represent domain standards, prospective integrations, and illustrative ecosystem frameworks.
