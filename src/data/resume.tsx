import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jiya Rose P B",
  initials: "JR",
  url: "https://jiyarose.io",
  location: "Palakkad, Kerala",
  locationLink: "https://www.google.com/maps/place/palakkad",
  description:
    "MBA candidate in Hospital Administration & Medical Tourism seeking Quality Executive position. Proficient in hospital quality management systems, NABH accreditation procedures, and patient safety protocols.",
  summary:
    "A dynamic and self-motivated MBA candidate specializing in Hospital Administration & Medical Tourism, seeking an entry-level position as a Quality Executive at EMS Memorial Co-operative Hospital and Research Centre. Proficient in hospital quality management systems, NABH accreditation procedures, patient safety protocols, and pharmacy audits. Adept at applying academic knowledge to support healthcare quality standards and drive Continuous Quality Improvement (CQI) initiatives.",
  avatarUrl: "/me.jpg",
  skills: [
    "MS Office Suite",
    "SPSS",
    "Quality Tools Analysis",
    "Ishikawa Diagram",
    "Report Writing",
    "Presentation Skills",
    "Internal Audit Procedures",
    "Clinical Audit Procedures",
    "Python for Data Science",
    "NABH Accreditation",
    "Patient Safety Protocols",
    "Pharmacy Audits",
    "Hospital Quality Management",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jiyarosepb@gmail.com",
    tel: "+91 62385 75722",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jiya-rose-67125732a/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jiyarosepb@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "EMS Memorial Co-operative Hospital & Research Centre",
      href: "https://www.emshospital.org.in/",
      badges: ["Internship"],
      location: "Malappuram, Kerala",
      title: "Quality Assurance Intern",
      logoUrl: "/ems.jpg",
      start: "August 2024",
      end: "September 2024",
      description:
        "Used Ishikawa diagram to analyze and reduce patient waiting time in the outpatient department. Supported training on patient safety, biomedical waste management, and hand hygiene. Assisted in pharmacy audits through data collection and reporting.",
    },
  ],

  education: [
    {
      school: "Yenepoya (Deemed to be University)",
      href: "https://www.yenepoya.edu.in/",
      degree: "MBA in Hospital Administration and Medical Tourism",
      logoUrl: "/yenepoya.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "University of Calicut",
      href: "https://uoc.ac.in/",
      degree: "BBA in Finance",
      logoUrl: "/calicut-university.png",
      start: "2020",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Optimizing Maintenance Scheduling in the Biomedical Zone",
      href: "https://www.emshospital.org.in/",
      dates: "2025",
      active: true,
      description:
        "Research project focused on minimizing equipment downtime in the biomedical zone at EMS Memorial Co-operative Hospital through optimized maintenance scheduling strategies.",
      technologies: [
        "Quality Management",
        "Data Analysis",
        "Hospital Operations",
        "Maintenance Planning",
      ],
      links: [
        {
          type: "Research",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Tourism Sector Hurdles Post-Pandemic Study",
      href: "https://uoc.ac.in",
      dates: "2023",
      active: true,
      description:
        "A comprehensive study analyzing the challenges faced by the tourism sector in Palakkad following the COVID-19 pandemic, including recovery strategies and recommendations.",
      technologies: [
        "Market Research",
        "Data Collection",
        "Analysis",
        "Report Writing",
      ],
      links: [
        {
          type: "Study",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hospital Postings & Clinical Experience",
      href: "",
      dates: "2023 - 2025",
      active: true,
      description:
        "Completed hospital postings at EMS Memorial Co-operative Hospital (Malappuram) and Yenepoya Medical College Hospital (Deralakatte, Mangalore), gaining hands-on experience in hospital operations and quality management.",
      technologies: [
        "Hospital Operations",
        "Quality Management",
        "Patient Safety",
        "Clinical Procedures",
      ],
      links: [
        {
          type: "Hospital",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  certifications: [
    {
      title: "Design Thinking – Practitioner's Perspective",
      issuer: "TCS iON",
      date: "2024",
      description: "Professional certification in design thinking methodologies and practical applications.",
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2024",
      description: "Comprehensive certification covering Python programming for data science applications.",
    },
    {
      title: "Digital 101 Journey",
      issuer: "FutureSkills Prime",
      date: "2024",
      description: "Digital literacy and skills development certification program.",
    },
  ],

  languages: [
    "Malayalam (Native)",
    "English (Fluent)",
    "Hindi (Conversational)",
  ],

  minorStudies: [
    {
      title: "Minor Study - EMS Hospital",
      dates: "2024-2025",
      location: "EMS Memorial Co-operative Hospital, Malappuram",
      description: "Completed minor study focusing on hospital quality management and patient safety protocols.",
    },
    {
      title: "Minor Study - Yenepoya Hospital",
      dates: "2024-2025", 
      location: "Yenepoya Medical College Hospital, Deralakatte, Mangalore",
      description: "Completed minor study in clinical operations and medical tourism management.",
    },
  ],
} as const;