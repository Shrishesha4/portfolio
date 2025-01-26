import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Shrishesha",
  lastName: "Narmatesshvara",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tech Enthusiast",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tamil"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shrishesha4",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shrishesha",
  },
  {
    name: "X",
    icon: "x",
    link: "https://www.x.com/shrishesha4",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:shrisheshanarmatesshvara@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.firstName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Shrishesha, a solo developer. I craft intuitive user experiences.
      <br />After hours, I build my own projects.
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
    link: "https://cal.com/shrishesha-n",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shrishesha is a Chennai-based Solo developer with a passion for transforming complex challenges
        into simple, elegant solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
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
        name: "Saveetha School Of Engineering",
        description: <>Studied Information Technology.</>,
      },
      {
        name: "Self Education",
        description: <>Apart from formal education, I have completed several milestones in learning about exciting new technologies with passion. </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>I have done quite a few projects using python. You can view them in my Github</>,
        images: [],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js.</>,
        images: [],
      },
      {
        title: "PostgreSQL",
        description: <>Experience with PostgreSQL database design, optimization, and management.</>,
        images: [],
      },
      {
        title: "Web Development",
        description: <>Full-stack web development using modern technologies and best practices.</>,
        images: [],
      },
      {
        title: "Tech Support",
        description: <>Experienced in providing technical support, troubleshooting, and resolving complex technical issues.</>,
        images: [],
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
  description: `And... I have a huge interest in Photography, here's a photo collection by me.`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A serene landscape at dawn",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "City lights reflecting on the river",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A quiet street in the old town",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "Sunset over the mountains",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A bustling market scene",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A tranquil beach at dusk",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
      caption: "A vibrant cityscape",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A peaceful forest path",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A historic building facade",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A colorful garden in bloom",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A majestic waterfall",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
      caption: "A panoramic view of the skyline",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
      caption: "A bustling city street",
    },
    {
      src: "/images/gallery/img-15.jpg",
      alt: "image",
      orientation: "horizontal",
      caption: "A serene lake at sunrise",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A quaint village scene",
    },
    {
      src: "/images/gallery/img-16.jpg",
      alt: "image",
      orientation: "vertical",
      caption: "A dramatic mountain range",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
