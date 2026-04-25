"use client";

import { BarChart, Database, TrendingUp } from "lucide-react";
import React from "react";

import molLogo from "../public/MOL.png";
import churnImage from "../public/Churn.jpg";
import churn2 from "../public/churn2.jpg";
import churn3 from "../public/churn3.jpg";
import churn4 from "../public/churn4.jpg";
import churn5 from "../public/churn5.jpg";
import redbullImage from "../public/Redbull.jpg";
import ssamzImage from "../public/SSAMZ.jpg";
import ssamz1 from "../public/SSAMZ 1.jpg";
import ssamz2 from "../public/SSAMZ 2.jpg";
import ssamz3 from "../public/SSAMZ 3.jpg";
import ssamz4 from "../public/SSAMZ 4.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  link: string;
  category: string;
  icon: React.ReactNode;
  challenges: string[];
  solutions: string[];
  screenshots?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  grade: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const education: Education[] = [
  {
    school: "Kafr El-Sheikh University | Faculty of Commerce",
    degree: "BBA, Business Administration (English Section)",
    period: "Oct 2021 – Jul 2025",
    grade: "Good"
  }
];

export const certifications: Certification[] = [
  { name: "Fabric Analytics Engineer Associate (DP-600)", issuer: "Microsoft", date: "Nov 2024" },
  { name: "Power Platform Functional Consultant (PL-200)", issuer: "Microsoft", date: "Nov 2024" },
  { name: "Power Platform App Maker Associate (PL-100)", issuer: "Microsoft", date: "Oct 2024" },
  { name: "Power Platform Developer Associate (PL-400)", issuer: "Microsoft", date: "Apr 2024" },
  { name: "Azure Administrator Associate (AZ-104)", issuer: "Microsoft", date: "Jun 2023" },
  { name: "Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft", date: "Mar 2022" },
  { name: "Data Analysis with Python", issuer: "IBM / Skills Network", date: "Nov 2021" },
  { name: "Google Digital Marketing", issuer: "Google", date: "Apr 2021" }
];

export const experiences: Experience[] = [
  {
    id: "concentrix-csr",
    role: "English Customer Service Representative",
    company: "Concentrix",
    period: "Jan 2026 – Apr 2026",
    description: "Handled English-language customer operations while applying CRM tools like SAP in a fast-paced environment. Consistently recognized for performance excellence.",
    highlights: [
      "Ranked as top performer in Average Handle Time (AHT) and Appointment Rate.",
      "Awarded 'Golden Hour' multiple times for both AHT and Appointment Rate categories.",
      "Managed English customer operations using advanced CRM systems (SAP).",
      "Ensured high-quality service and data accuracy for complex customer cases."
    ]
  },
  {
    id: "verse-bi-cofounder",
    role: "Co-Founder",
    company: "Verse BI",
    period: "Oct 2024 – Jan 2026",
    description: "Built end-to-end BI solutions to help businesses move from raw, disconnected data to actionable dashboards using Power BI and Microsoft Fabric.",
    highlights: [
      "Led full-cycle BI implementation projects from data modeling to final delivery.",
      "Implemented enterprise-level reporting solutions for international clients.",
      "Optimized ETL processes and improved data reliability across organizations.",
      "Directed the transition to Microsoft Fabric-based modern data architectures."
    ]
  },
  {
    id: "elharefa-coach-r3",
    role: "Power Bi Freelance Coach R3",
    company: "Elharefa",
    period: "Sep 2025 – Dec 2025",
    description: "Career strategist and technical coach helping students transition into professional freelancing and data analytics roles.",
    highlights: [
      "Guided students in building high-conversion LinkedIn and freelance profiles.",
      "Developed comprehensive training for portfolio preparation and job searching.",
      "Provided end-to-end support until students secured their first professional gigs.",
      "Shared expertise in competitive positioning for the data analytics market."
    ]
  },
  {
    id: "microsoft-gold",
    role: "Gold Student Ambassador",
    company: "Microsoft",
    period: "Feb 2025 – Jan 2026",
    description: "The highest milestone in the Microsoft Learn Student Ambassador program, recognizing top-tier technical leadership and community impact.",
    highlights: [
      "Received Microsoft Gold Swag Kit in recognition of global community impact.",
      "Mentored hundreds of students in Data Analysis, AI, and Cloud Architecture.",
      "Organized large-scale technical events and community growth initiatives.",
      "Connected and learned with global innovators to solve real-world problems."
    ]
  },
  {
    id: "depi-intern",
    role: "Power BI Developer Intern",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Jun 2024 – Aug 2024",
    description: "Participated in an intensive apprenticeship program covering the entire lifecycle of Business Intelligence development.",
    highlights: [
      "Built 5+ interactive dashboards to visualize complex real-world business datasets.",
      "Applied advanced DAX and Power Query for robust data modeling and transformation.",
      "Collaborated with expert analysts to address stakeholder reporting requirements.",
      "Completed an end-to-end program from data ingestion to final reporting."
    ]
  },
  {
    id: "microsoft-founders-hub",
    role: "Microsoft for Startups Founders Hub Mentor",
    company: "Microsoft",
    period: "Sep 2024 – Sep 2024",
    description: "Represented Microsoft at major entrepreneurship festivals, introducing technical infrastructure to startups.",
    highlights: [
      "Introduced the Founders Hub platform to early-stage startups and entrepreneurs.",
      "Provided consultation on Cloud Architecture and Microsoft Azure implementation.",
      "Advised founders on technical marketing and problem-solving strategies.",
      "Represented the company at the Rally Festival for Entrepreneurship."
    ]
  },
  {
    id: "elharefa-coach-r2",
    role: "Power BI Freelancing Coach R2",
    company: "Elharefa",
    period: "Jun 2024 – Sep 2024",
    description: "Advised clients on job search strategies and professional branding for global data roles.",
    highlights: [
      "Optimized freelance portals and LinkedIn profiles to increase visibility.",
      "Tailored resume building and interview prep for specialized Power BI positions.",
      "Analyzed market demands to help clients position their technical skillsets.",
      "Assisted clients in securing part-time and freelance opportunities."
    ]
  },
  {
    id: "microsoft-beta",
    role: "Beta Student Ambassador",
    company: "Microsoft",
    period: "Mar 2024 – Feb 2025",
    description: "Advanced leadership milestone focusing on workshop delivery and deep technical community engagement.",
    highlights: [
      "Achieved Beta status and recognized as a key technical community leader.",
      "Delivered workshops on Azure basics and data analytics to student bodies.",
      "Mastered and shared insights on the Microsoft ecosystem and cloud tools.",
      "Organized hands-on labs and events for beginner and intermediate learners."
    ]
  },
  {
    id: "aptos-labs",
    role: "Decentralized Application (DApp) Developer",
    company: "Aptos Labs",
    period: "Feb 2024 – Jul 2024",
    description: "Explored blockchain technology and decentralized applications as a DApp developer.",
    highlights: [
      "Gained experience in Smart Contract development using Rust and Solidity.",
      "Explored Ethereum-based and Aptos-specific blockchain architectures.",
      "Contributed to decentralized application logic and frontend integration.",
      "Stayed at the forefront of Web3 and decentralized technology trends."
    ]
  },
  {
    id: "microsoft-alpha",
    role: "Alpha Student Ambassador",
    company: "Microsoft",
    period: "Dec 2023 – Mar 2024",
    description: "Initial leadership milestone within the Microsoft Learn community, focusing on technical learning paths.",
    highlights: [
      "Completed rigorous technical training modules on Microsoft Azure.",
      "Initiated peer-to-peer knowledge sharing sessions on cloud fundamentals.",
      "Began building a professional presence within the global MLSA network.",
      "Earned the Alpha Certificate for technical and community achievement."
    ]
  },
  {
    id: "microsoft-sa-intern",
    role: "Student Ambassador Intern",
    company: "Microsoft",
    period: "Nov 2023 – Dec 2023",
    description: "Foundation-level internship exploring the intersection of technology and community leadership.",
    highlights: [
      "Developed basic IT expertise and explored Cloud Architecture concepts.",
      "Engaged with Microsoft Azure learning resources and student programs.",
      "Contributed to initial student-led technology awareness campaigns.",
      "Participated in initial MLSA introductory training sessions."
    ]
  },
  {
    id: "spark-foundation",
    role: "Data Science Intern",
    company: "The Sparks Foundation",
    period: "Sep 2023 – Nov 2023",
    description: "Short-term intensive internship focusing on applied data science and analysis tasks.",
    highlights: [
      "Worked on real-world data analysis challenges and task completions.",
      "Engaged with a global community of interns in the GRIP program.",
      "Developed practical skills in data cleaning and visualization.",
      "Successfully delivered technical outcomes for assigned foundation tasks."
    ]
  },
  {
    id: "cybertalents-blue",
    role: "Cyber Security Trainee (Blue Team)",
    company: "CyberTalents",
    period: "Jul 2023 – Sep 2023",
    description: "Focused on defensive security operations, incident response, and SOC fundamentals.",
    highlights: [
      "Completed the Blue Team Scholarship 2023 for defensive operations.",
      "Gained hands-on experience in Security Operations Center (SOC) workflows.",
      "Mastered fundamentals of incident response and cyber defense strategies.",
      "Analyzed system logs and network traffic for potential security threats."
    ]
  },
  {
    id: "cybertalents-trainee",
    role: "Cyber Security Internship Trainee",
    company: "CyberTalents",
    period: "Jul 2022 – Oct 2022",
    description: "A comprehensive deep dive into digital forensics, network security, and defensive tools.",
    highlights: [
      "Utilized forensic tools including Autopsy, Wireshark, and FTK Imager.",
      "Studied OWASP Top 10, network security, and WiFi attack vectors.",
      "Mastered fundamentals of Cryptography, Steganography, and the OSI Model.",
      "Gained proficiency in tools like Burp Suite, Netcat, and Python for security."
    ]
  },
  {
    id: "ieee-volunteer",
    role: "Technical Volunteer",
    company: "IEEE Kafrelshiekh Student Branch",
    period: "Jan 2021 – Jul 2022",
    description: "Contributed to local student branch growth and technical event organization.",
    highlights: [
      "Assisted in coordinating technical workshops and community events.",
      "Supported peer-to-peer learning initiatives for university students.",
      "Collaborated with multidisciplinary teams on leadership and project tasks.",
      "Gained early experience in technical community building and volunteering."
    ]
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-mol",
    name: "Hamood Al.",
    role: "PMO",
    company: "MOL",
    content: "Ahmed is an excellent expert in his field, working with him into different projects was an excellent experience. Very respectful, humble, solution oriented, and deep expert in his area. Speed in delivery, and always exceeding exceeding expectations. I strongly recommend him, he is the go-to person if you are looking for data analysis and dashboards.",
    avatar: molLogo
  },
  {
    id: "test-geosa",
    name: "Maged Al.",
    role: "PMO",
    company: "GEOSA",
    content: "Ahmed delivered a strong and effective dashboard that improved reporting and visibility within our geospatial data workflows at GEOSA. His expertise in data analysis and dashboard development is clear in the quality and clarity of the output. He was professional, fast, and solution-oriented throughout the project, with excellent attention to detail and a strong ability to understand requirements quickly. I highly recommend him for any data analytics or dashboard work in geospatial or data-driven environments.",
    avatar: "https://ui-avatars.com/api/?name=Maged+Al&background=random"
  },
  {
    id: "test-bpo",
    name: "O.S",
    role: "Director of Customer Operations",
    company: "BPO KSA",
    content: "Ahmed delivered an excellent dashboard solution that greatly improved our customer service visibility and reporting. He is highly skilled in data analysis and dashboard development, with a strong ability to translate business requirements into clear and actionable insights. Working with him was a smooth and professional experience. He is respectful, responsive, and consistently solution-oriented. His delivery was fast, and the final output exceeded our expectations. I strongly recommend Ahmed for any data analysis or dashboard-related projects—he is a reliable go-to expert in his field.",
    avatar: "https://ui-avatars.com/api/?name=O+S&background=random"
  },
  {
    id: "test-3",
    name: "Paradeep S.",
    role: "Community Lead",
    company: "Microsoft",
    content: "As a Gold Student Ambassador, Ahmed has shown incredible leadership and mentorship skills. His sessions on Data Analysis are always highly rated.",
    avatar: "https://ui-avatars.com/api/?name=Paradeep+S&background=random"
  }
];

export const projects: Project[] = [
  {
    id: "bank-churn-dashboard",
    title: "Bank Churn Dashboard in Power BI",
    description: "Comprehensive churn analysis for a banking institution to identify at-risk customers.",
    longDescription: "This dashboard provides a holistic view of customer retention patterns, product usage, and financial behavior enabling banks to identify high risk segments and make informed retention strategies. It features an overview of total customers, products, and financial status, alongside deep demographic insights and behavioral splits. By analyzing churn through various lenses like age, geography, and financial standing, it offers actionable intelligence for customer retention.",
    tech: ["Power BI", "DAX", "Data Modeling", "Visual Design", "Figma", "Customer Analytics"],
    image: churnImage,
    screenshots: [churn2, churn3, churn4, churn5],
    link: "#",
    category: "Banking / Fintech",
    icon: <BarChart className="w-5 h-5 text-accent" />,
    challenges: [
      "Identifying significant churn predictors among diverse customer attributes",
      "Visualizing temporal trends in customer attrition",
      "Creating actionable segments for retention marketing"
    ],
    solutions: [
      "🏠 Dashboard / Overview: Key cards for Total Customers, Products, Balance, and Credit Cards with Geo Insights (Geography pie charts).",
      "👥 Demographics: Analysis of Tenure by Geography and Churn Rate KPIs with trend indicators. Total Churned/Retained cards.",
      "💼 Products & Behavior: Donut charts for Activity Split and column charts for Churn by Credit Card and Bank Products.",
      "💰 Financial Insights: Churn by Balance, Score Range, and Average Credit Score comparisons."
    ]
  },
  {
    id: "redbull-sales",
    title: "Red Bull Sales Dashboard",
    description: "Comprehensive sales analysis for Red Bull across various sectors and products (2017-2021).",
    longDescription: "This dashboard provides a comprehensive look at Red Bull's sales from 2017 to 2021 across various sectors (Bar, Club, Hotel, Restaurant) and offers insights into sugar-free vs. regular product sales and cooler storage preferences. It enables business decision-makers to derive actionable insights, optimize product distribution, and better align marketing strategies with consumer preferences.",
    tech: ["Power BI", "DAX", "Data Modeling", "Visual Design"],
    image: redbullImage,
    link: "#",
    category: "FMCG / Sales",
    icon: <TrendingUp className="w-5 h-5 text-accent" />,
    challenges: [
      "Analyzing high-volume sales data across five years",
      "Segmenting performance by diverse sectors and product types",
      "Identifying the impact of storage preferences on regional sales"
    ],
    solutions: [
      "📊 Total Sales by Year: Annual sales figures showcase growth trends and performance over time.",
      "🥤 Product Composition: Breakdown of sales for sugar-free and regular drinks.",
      "❄️ Storage Insights: Analysis of cooler vs. non-cooler storage and its impact on sales.",
      "📈 Growth Trends: Visualizations of the annual growth rate, helping identify seasonal trends and high-growth periods."
    ]
  },
  {
    id: "ssamz-sales",
    title: "SSAMZ Sales Performance",
    description: "Multi-dimensional sales analysis for SSAMZ, tracking market penetration and regional growth.",
    longDescription: "A deep-dive analysis of SSAMZ's market performance, focusing on regional sales distribution, product line profitability, and seasonal trends. The dashboard provides stakeholders with real-time visibility into inventory turnover and customer acquisition costs, enabling data-driven expansion strategies in competitive markets.",
    tech: ["Power BI", "DAX", "Data Modeling", "ETL Processes", "Figma"],
    image: ssamzImage,
    screenshots: [ssamz1, ssamz2, ssamz3, ssamz4],
    link: "#",
    category: "FMCG / Retail",
    icon: <Database className="w-5 h-5 text-accent" />,
    challenges: [
      "Integrating disparate data sources from multiple regional branches",
      "Normalizing inventory metrics for seasonal variability",
      "Visualizing complex logistics chain data for executive decision-making"
    ],
    solutions: [
      "📊 Regional Breakdown: Visualizing sales performance across different geographical zones using interactive maps.",
      "📦 Inventory Tracking: Optimized view of stock levels vs. demand forecasts to reduce overhead.",
      "💰 Profitability Analysis: Deep dive into margin performance by product category and SKU.",
      "🗓️ Seasonal Forecasting: Implementation of time-series analysis to predict upcoming peak periods."
    ]
  }
];
