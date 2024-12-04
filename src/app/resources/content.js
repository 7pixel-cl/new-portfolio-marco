import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Marco",
  lastName: "Alvarado",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  location: "Villarrica/Chile", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/7pixel-cl",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/marcoalvaradot/",
  },

  {
    name: "Email",
    icon: "email",
    link: "mailto:marco.alvarado.t@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I
      craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/marco-alvarado-7pixel",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Front-End Developer | Software Engineer | React, COBOL, WordPress | SQL
        | Agile | Mixpanel | Next.JS | I Help Tech Companies Boost Performance
        and User Engagement
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "The Fizzy LLC",
        timeframe: "Jul 2024 - Present",
        role: "Sr. Full Stack Developer",
        achievements: [
          "Solo developer of Marapod, a Web App for PTSA Administration.",
          "Develop new initiatives for the current product, including a new feature that increased user engagement by 30%. New feats as Directory management and bugs fixing.",
          "Lead the current transition from React/Vanilla.Js to Next.js / Typescript, improving the performance and scalability of the app.",
        ],
        images: [],
      },
      {
        company: "JoVE",
        timeframe: "Jul 2022 - May 2024",
        role: "Full Stack Developer",
        achievements: [
          "Spearheaded the transition to Next.js, enhancing site performance and scalability.",
          "Implemented Mixpanel, tracking over 100,000 daily events, significantly improving performance metrics.",
          "Managed FullStack development tasks, utilizing JIRA and actively participating in Scrum ceremonies.",
        ],
        images: [],
      },
      {
        company: "Grupo Loang",
        timeframe: "Jan 2023 - Feb 2024",
        role: "Website Developer",
        achievements: [
          "Developed over 70 websites using Elementor and WordPress.",
          "Generated SEO content for each landing page, driving organic traffic and improving search engine rankings.",
        ],
        images: [],
      },
      {
        company: "Accenture Chile",
        timeframe: "Oct 2014 - Jun 2022",
        role: "Software Developer Sr. Analyst",
        achievements: [
          "Innovated an online debt repayment system for Banco Itaú.",
          "Supervised and executed manual and automated tests, ensuring the smooth migration of over 1,500 code components.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Pontificia Universidad Catolica de Valparaiso, Chile",
        description: <>Software engineering.</>,
      },
      {
        name: "Udemy",
        description: (
          <>
            - Next.js: El framework de React para producción. - React: De cero a
            experto ( Hooks y MERN ) - React PRO: Lleva tus bases al siguiente
            nivel
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI Tools",
        description: (
          <>
            Using the best of AI tools to improve performance. I develop with
            tools as ChatGPT, V0, Github Copilot
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "React",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },

      {
        title: "WordPress",
        description: (
          <>Building simple websites with WordPress. Using Divi and Elementor</>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
