type NavItems = {
  name: string
  href: string
}[]

export const navItems: NavItems = [{ name: 'Projects', href: '/projects' }]

export const topProjects = [
  {
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729062244/20241016-0702-36.7349933_se5srd.mp4',
    imageSrc: '/images/project/Pages.png',
    title: 'Pages',
    tags: ['Nextjs', 'Typescript', 'Shadcn UI', 'Accertnity UI', 'TailwindCSS'],
    timeline: 'Aug 2024',
    tagline: 'A website to read your favourite Mangas',
    sourceCodeHref: 'https://github.com/krey-yon/Pages',
    liveDemoHref: 'https://pages-nine-eta.vercel.app/',
  },
  {
    imageSrc: '/images/project/Codehub.png',
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729062837/20241016-0712-39.9608416_lgupvx.mp4',
    title: 'CodeHub',
    tags: ['Reactjs', 'Nodejs', 'MongoDB', 'TailwindCSS', 'Passport.js'],
    timeline: 'Jun 2024 - July 2024',
    tagline: 'An interface to interact with Githubs API',
    sourceCodeHref: 'https://github.com/krey-yon/Codehub',
    liveDemoHref: 'https://codehub-d7oo.onrender.com/',
  },
  {
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729063268/20241016-0719-12.9521917_qjswsa.mp4',
    imageSrc: '/images/project/Linkup.png',
    title: 'Linkup',
    tags: ['Nextjs', 'Typescript', 'Convex', 'Clerk', 'TailwindCSS'],
    timeline: 'July 2024',
    tagline: 'A simple whatsapp inspired Chat App',
    sourceCodeHref: 'https://github.com/krey-yon/LinkUp',
    liveDemoHref: 'https://link-up-three.vercel.app/',
  },
  {
    videoSrc:
      'https://res.cloudinary.com/dpj8y0x4s/video/upload/v1729063637/20241016-0726-31.5989794_q3bfgg.mp4',
    imageSrc: '/images/project/StayNest.png',
    title: 'StayNest',
    tags: ['Expressjs', 'EJS', 'cloudinary', 'Javascript', 'Bootstrap'],
    timeline: 'May 2024',
    tagline: 'Rent your spaces',
    sourceCodeHref: 'https://github.com/krey-yon/StayNest',
    liveDemoHref: 'https://staynest-zd60.onrender.com/listings',
  },
]
