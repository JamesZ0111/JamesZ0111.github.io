export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaborative delivery, clear communication",
    description: "Structured check-ins, written updates, and transparent trade-offs so projects move forward without surprises.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Pragmatic and flexible ways of working",
    description: "Comfortable collaborating across time zones and teams, from early discovery to production rollouts.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Modern, composable tooling",
    description: "Next.js, TypeScript, Tailwind, and Python-based automation to ship reliable systems quickly.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Engineering mindset, product focus",
    description: "I enjoy turning ambiguous problems into concrete, testable solutions with measurable impact.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Continually learning, always shipping",
    description: "From internal tools to public-facing products, I iterate quickly while keeping quality high.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in working together?",
    description: "Reach out with a short brief or idea and we can explore the best way to collaborate.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Stint Job Platform",
    summary: "Responsive job marketplace for international students, built with the Next.js + Tailwind stack used throughout this portfolio.",
    details: [
      "Designed and implemented the full UI system with reusable shadcn components.",
      "Connected CMS-driven content to streamline role publishing.",
      "Improved Lighthouse performance to 95+ across the board.",
    ],
  img: "/images/stint-platform.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.stintcommunity.com/",
  },
  {
    id: 2,
    title: "Australian Synchrotron Motion Test Script",
    summary: "Python-based hardware validation framework for ANSTO motion controllers.",
    details: [
      "Built a reusable CLI to exercise controllers at the hardware layer.",
      "Reduced bring-up time by automating calibration checks.",
      "Open-sourced the tooling for the ANSTO control team.",
    ],
  img: "/images/synchrotron-lab.jpg",
    iconLists: [],
    link: "https://github.com/AustralianSynchrotron/motionTestScript",
  },
  {
    id: 3,
    title: "MLAI × MYMI AI Hospital",
    summary: "Hackathon finalist predicting PCOS likelihood with a Random Forest classifier.",
    details: [
      "Trained and tuned a model on ~540 patient records achieving an F1 score of 0.91.",
      "Built a Streamlit interface so clinicians could explore predictions live.",
      "Earned the Most Outstanding Pitch award among 300+ participants.",
    ],
  img: "/images/pcos-dashboard.png",
    iconLists: [],
    link: "https://pcos-byteme.streamlit.app/",
  },
  {
    id: 4,
    title: "Branach Robotics Automation",
    summary: "On-site robotics automation initiatives for Branach manufacturing.",
    details: [
      "Refined calibration pipelines to halve drilling + docking time (14 → 6 min).",
      "Integrated Python tooling with Odoo to fetch components in 3 seconds instead of 60.",
      "Documented procedures, reducing bug triage from 1 hour to minutes for future interns.",
    ],
  img: "/images/branach-factory.jpg",
    iconLists: [],
    link: "https://www.branach.com/",
  },
];

// Testimonials and logo sections removed as per new portfolio design.

export const workExperience = [
  {
    id: 1,
    title: "Robotics Engineer · Branach",
    desc: "Designed and deployed automated robotic arm workflows using Python and TM Flow to streamline manufacturing operations.",
    className: "md:col-span-2",
    thumbnail: "/workinglogo.jpeg",
  },
  {
    id: 2,
    title: "Web Developer · Stint",
    desc: "Contributed to the design and implementation of a React and Tailwind-based job platform for international students.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/workinglogo.jpeg",
  },
  {
    id: 3,
    title: "Cardiovascular Simulation Engineer · Monash Heart Hack",
    desc: "Helped develop hardware and software prototypes for testing a total artificial heart on a custom simulation platform.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/workinglogo.jpeg",
  },
  {
    id: 4,
    title: "Motion Control Engineer · Australian Synchrotron",
    desc: "Built the motion controller hardware validation framework that accelerated uptime and reliability for ANSTO's control stages.",
    className: "md:col-span-2",
    thumbnail: "/workinglogo.jpeg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
