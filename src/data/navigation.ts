export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description: string;
  }[];
}

export const NAV_LINKS: NavItem[] = [
  {
    label: "About",
    href: "/about",
    description: "Our mission, strategic vision, and sovereign capability architecture."
  },
  {
    label: "Businesses",
    href: "/businesses",
    description: "Specialized engineering across 4 strategic industrial sectors.",
    children: [
      {
        label: "01 — Aerospace",
        href: "/businesses#aerospace",
        description: "UAV platforms, aerial surveillance & autonomous flight control."
      },
      {
        label: "02 — Defence",
        href: "/businesses#defence",
        description: "Tactical gear, protective systems & rugged field technologies."
      },
      {
        label: "03 — Advanced Systems",
        href: "/businesses#advanced-systems",
        description: "Detection, autonomous ground vehicles & perimeter defense."
      },
      {
        label: "04 — Petrochemical",
        href: "/businesses#petrochemical",
        description: "Specialized industrial lubricants & engineered molecular materials."
      }
    ]
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    description: "Core technological capabilities and precision engineering matrices."
  },
  {
    label: "Technology",
    href: "/technology",
    description: "Proprietary telemetry, edge compute, and sensor fusion suites."
  },
  {
    label: "Partnerships",
    href: "/partnerships",
    description: "Institutional collaboration and strategic ecosystem engagement."
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Direct strategic liaison and institutional inquiry portal."
  }
];

export const FOOTER_LINKS = {
  sectors: [
    { label: "Aerospace Systems", href: "/businesses#aerospace" },
    { label: "Defence Solutions", href: "/businesses#defence" },
    { label: "Advanced Ground Systems", href: "/businesses#advanced-systems" },
    { label: "Petrochemical & Materials", href: "/businesses#petrochemical" }
  ],
  capabilities: [
    { label: "Autonomous Flight Systems", href: "/capabilities#aerospace" },
    { label: "Tactical Sensor Integration", href: "/capabilities#defence" },
    { label: "Perimeter Electronic Security", href: "/capabilities#advanced-systems" },
    { label: "High-Performance Lubricants", href: "/capabilities#petrochemical" },
    { label: "Real-time Telemetry & HUD", href: "/technology" }
  ],
  company: [
    { label: "About Sky Wardens", href: "/about" },
    { label: "Strategic Vision", href: "/about#vision" },
    { label: "Governance & Quality", href: "/about#governance" },
    { label: "Ecosystem & Affiliations", href: "/partnerships" },
    { label: "Institutional Inquiries", href: "/contact" }
  ]
};
