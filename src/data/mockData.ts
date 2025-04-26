
// Mock job data
export const jobs = [
  {
    id: "job1",
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    salary: "$80K-$100K",
    type: "Full-time",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
    postedDate: "3 days ago",
    skills: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    description: "We are looking for a skilled Frontend Developer who can create responsive and interactive web applications using React and TypeScript."
  },
  {
    id: "job2",
    title: "Backend Engineer",
    company: "CloudSystems",
    location: "San Francisco, CA",
    salary: "$110K-$130K",
    type: "Full-time",
    logo: "https://avatars.githubusercontent.com/u/3591786?s=280&v=4",
    postedDate: "1 week ago",
    skills: ["Node.js", "Express", "MongoDB", "AWS", "Docker"],
    description: "Join our team as a Backend Engineer and help build scalable APIs and microservices that power our cloud-based platform."
  },
  {
    id: "job3",
    title: "DevOps Engineer",
    company: "InfraTech",
    location: "New York, NY",
    salary: "$100K-$120K",
    type: "Full-time",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png",
    postedDate: "2 days ago",
    skills: ["AWS", "Terraform", "Kubernetes", "CI/CD", "Docker"],
    description: "As a DevOps Engineer, you will build and maintain our cloud infrastructure and deployment pipelines."
  },
  {
    id: "job4",
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Austin, TX",
    salary: "$75K-$90K",
    type: "Full-time",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    postedDate: "5 days ago",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"],
    description: "We're seeking a talented UX/UI Designer to create beautiful and intuitive user experiences for our digital products."
  },
  {
    id: "job5",
    title: "Data Scientist",
    company: "DataInsights",
    location: "Boston, MA",
    salary: "$120K-$140K",
    type: "Full-time",
    logo: "https://cdn-icons-png.flaticon.com/512/2103/2103607.png",
    postedDate: "2 weeks ago",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "TensorFlow"],
    description: "As a Data Scientist, you will analyze complex data sets and build predictive models to drive business decisions."
  },
  {
    id: "job6",
    title: "Mobile Developer (iOS)",
    company: "AppFactory",
    location: "Remote",
    salary: "$90K-$110K",
    type: "Contract",
    logo: "https://cdn-icons-png.flaticon.com/512/831/831276.png",
    postedDate: "4 days ago",
    skills: ["Swift", "iOS", "SwiftUI", "UIKit", "Core Data"],
    description: "We're looking for an iOS Developer to join our team and build innovative mobile applications for our clients."
  }
];

// Mock mentor data
export const mentors = [
  {
    id: "mentor1",
    name: "Dr. Sarah Johnson",
    title: "Senior Software Engineer",
    company: "Google",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    expertise: ["Frontend Development", "React", "JavaScript"],
    rating: 4.9,
    reviewCount: 127,
    bio: "With over 10 years of experience in web development, I specialize in frontend technologies and love teaching others. I hold a Ph.D. in Computer Science from Stanford University.",
    experience: "10+ years",
    availableFor: ["Resume Reviews", "Mock Interviews", "Career Guidance"]
  },
  {
    id: "mentor2",
    name: "Michael Chen",
    title: "Data Science Manager",
    company: "Amazon",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    expertise: ["Data Science", "Machine Learning", "Python"],
    rating: 4.8,
    reviewCount: 93,
    bio: "Data science leader with expertise in machine learning and big data. I help aspiring data scientists build practical skills and land their dream jobs.",
    experience: "8 years",
    availableFor: ["Technical Guidance", "Project Reviews", "Interview Prep"]
  },
  {
    id: "mentor3",
    name: "Priya Patel",
    title: "Product Manager",
    company: "Microsoft",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    expertise: ["Product Management", "UX Research", "Agile"],
    rating: 4.7,
    reviewCount: 84,
    bio: "Product manager with a passion for user-centered design. I can help you transition into product management or improve your existing PM skills.",
    experience: "7 years",
    availableFor: ["Product Strategy", "PM Interviews", "Career Transitions"]
  },
  {
    id: "mentor4",
    name: "James Wilson",
    title: "DevOps Engineer",
    company: "Netflix",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    expertise: ["DevOps", "AWS", "Kubernetes", "Docker"],
    rating: 4.9,
    reviewCount: 67,
    bio: "Cloud infrastructure expert specializing in DevOps practices and tooling. I help developers understand the operations side of software delivery.",
    experience: "9 years",
    availableFor: ["Cloud Architecture", "CI/CD Pipeline Setup", "Infrastructure as Code"]
  }
];

// Mock course data
export const courses = [
  {
    id: "course1",
    title: "Complete React Developer in 2024",
    instructor: "Dr. Sarah Johnson",
    thumbnail: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
    level: "Intermediate",
    duration: "40 hours",
    category: "Web Development",
    rating: 4.8,
    enrolledCount: 12483,
    description: "Learn to build modern web applications with React, Redux, Hooks, and more. This comprehensive course covers everything from the basics to advanced patterns.",
    chapters: [
      { title: "Introduction to React", duration: "2.5 hours" },
      { title: "React Fundamentals", duration: "5 hours" },
      { title: "Hooks in Depth", duration: "4 hours" },
      { title: "State Management with Redux", duration: "6 hours" },
      { title: "Building Real-world Applications", duration: "8 hours" }
    ],
    relatedJobs: ["job1"]
  },
  {
    id: "course2",
    title: "Python for Data Science and Machine Learning",
    instructor: "Michael Chen",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/3098/3098090.png",
    level: "Beginner to Intermediate",
    duration: "50 hours",
    category: "Data Science",
    rating: 4.9,
    enrolledCount: 18743,
    description: "Master Python for data analysis, visualization, and machine learning. Learn popular libraries like Pandas, NumPy, Matplotlib, Scikit-learn, and TensorFlow.",
    chapters: [
      { title: "Python Basics for Data Science", duration: "6 hours" },
      { title: "Data Analysis with Pandas", duration: "8 hours" },
      { title: "Data Visualization", duration: "7 hours" },
      { title: "Machine Learning Fundamentals", duration: "10 hours" },
      { title: "Deep Learning Introduction", duration: "8 hours" }
    ],
    relatedJobs: ["job5"]
  },
  {
    id: "course3",
    title: "The Complete Product Management Bootcamp",
    instructor: "Priya Patel",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
    level: "All Levels",
    duration: "30 hours",
    category: "Product Management",
    rating: 4.7,
    enrolledCount: 9254,
    description: "Learn everything you need to become a successful product manager. From user research and roadmapping to agile development and product analytics.",
    chapters: [
      { title: "Introduction to Product Management", duration: "3 hours" },
      { title: "User Research and Personas", duration: "5 hours" },
      { title: "Product Strategy and Roadmapping", duration: "6 hours" },
      { title: "Agile Product Development", duration: "5 hours" },
      { title: "Product Analytics and Growth", duration: "4 hours" }
    ],
    relatedJobs: []
  },
  {
    id: "course4",
    title: "DevOps Engineering: CI/CD with AWS",
    instructor: "James Wilson",
    thumbnail: "https://cdn-icons-png.flaticon.com/512/5044/5044229.png",
    level: "Advanced",
    duration: "35 hours",
    category: "DevOps",
    rating: 4.8,
    enrolledCount: 7392,
    description: "Master DevOps practices using AWS services. Learn to set up CI/CD pipelines, infrastructure as code, monitoring, and more.",
    chapters: [
      { title: "DevOps Principles", duration: "3 hours" },
      { title: "AWS Services for DevOps", duration: "7 hours" },
      { title: "Infrastructure as Code with Terraform", duration: "6 hours" },
      { title: "CI/CD Pipeline Setup", duration: "8 hours" },
      { title: "Monitoring and Observability", duration: "5 hours" }
    ],
    relatedJobs: ["job3"]
  }
];
