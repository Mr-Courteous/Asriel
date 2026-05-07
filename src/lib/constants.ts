// Foundation data and constants

export const foundation = {
  name: "Asriel Foundation",
  tagline: "Empowering Students. Building Futures.",
  mission:
    "To inspire, encourage, and support hardworking and underprivileged elementary and secondary school students.",
  vision:
    "A world where every child has access to the best education — and the resources to maximize their full potential.",
  heroHeadline: "Raising Future Leaders Through Education",
  heroSubheadline:
    "We provide scholarships, STEM training, and mentorship to underprivileged students in Richmond, Texas and beyond.",
  ctaText: "Be the reason a child succeeds.",
  address: "Richmond, Texas",
  ein: "XX-XXXXXXX",
};

export const impactStats = [
  { label: "Students Supported", value: 500, suffix: "+" },
  { label: "Years Active", value: 15, suffix: "+" },
  { label: "Partner Schools", value: 12, suffix: "" },
  { label: "Programs Offered", value: 7, suffix: "" },
];

export const programs = [
  {
    id: "stem",
    title: "STEM Training",
    description:
      "Hands-on science, technology, engineering, and math education to prepare students for the future.",
    icon: "Cpu",
    eligibility: "Elementary and High School students",
    howToApply: "Submit application through our online portal",
  },
  {
    id: "utme",
    title: "UTME Preparation",
    description:
      "Comprehensive preparation for the Unified Tertiary Matriculation Examination.",
    icon: "BookOpen",
    eligibility: "SS3 students preparing for university",
    howToApply: "Contact us for enrollment details",
  },
  {
    id: "waec",
    title: "WAEC/GCE Coaching",
    description:
      "Expert coaching for West African Examinations Council and General Certificate of Education.",
    icon: "GraduationCap",
    eligibility: "SS1-SS3 students",
    howToApply: "Submit application through our online portal",
  },
  {
    id: "saat",
    title: "SAAT",
    description:
      "School Aid and Assistance Program providing educational materials and support.",
    icon: "HandHeart",
    eligibility: "Students in need of educational support",
    howToApply: "Apply through your school counselor",
  },
  {
    id: "mentorship",
    title: "Mentorship",
    description:
      "One-on-one guidance from experienced professionals to help students navigate their academic journey.",
    icon: "Users",
    eligibility: "All registered students",
    howToApply: "Automatically assigned upon enrollment",
  },
  {
    id: "scholarship",
    title: "Scholarship",
    description:
      "Financial support for outstanding students demonstrating academic potential and need.",
    icon: "Award",
    eligibility: "Students with excellent academic record",
    howToApply: "Submit scholarship application with transcripts",
  },
  {
    id: "leadership",
    title: "Leadership & Life Skills",
    description:
      "Personal development through leadership training and life skills seminars.",
    icon: "Compass",
    eligibility: "All students welcome",
    howToApply: "No application needed - open to all",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Asriel Foundation gave me the resources I needed to excel in my studies. Now I'm in university pursuing my dreams.",
    name: "Sarah M.",
    result: "University Student, Computer Science",
  },
  {
    id: 2,
    quote:
      "The mentorship program changed my life. I went from struggling in math to being top of my class.",
    name: "James K.",
    result: "High School Graduate, Engineering",
  },
  {
    id: 3,
    quote:
      "Thanks to the STEM training, I built my first robot at age 14. I'm now pursuing robotics in college.",
    name: "Emily O.",
    result: "College Sophomore, Robotics",
  },
];

export const partners = [
  "Saint Thomas Secondary Grammar School, Otan Ayegbaju",
  "Oke Akangbe Compound Students",
  "Richmond Community Center",
  "Texas Education Association",
];

export const donationTiers = [
  { amount: 10, impact: "Provides school supplies for one student" },
  { amount: 25, impact: "Covers a student's exam registration fee" },
  { amount: 50, impact: "Provides textbooks and learning materials for a month" },
  { amount: 100, impact: "Funds a full scholarship for one student for a semester" },
  { amount: "custom", impact: "Any amount helps us continue our mission" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: "Facebook" },
  { href: "https://twitter.com", label: "Twitter", icon: "Twitter" },
  { href: "https://instagram.com", label: "Instagram", icon: "Instagram" },
];