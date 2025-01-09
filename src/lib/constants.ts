type NavItems = {
  name: string
  href: string
}[]

export const navItems: NavItems = [{ name: 'Projects', href: '/projects' }]

export const topProjects = [
  {
    videoSrc:
      'https://res.cloudinary.com/deqxdempa/video/upload/v1734584541/gulwtc6wt5mus2bzqj2a.mp4',
    imageSrc: '/images/project/CTM.png',
    title: 'CTM',
    tags: ['React', 'Typescript', 'Shadcn UI', 'Socket.io', 'TailwindCSS'],
    timeline: 'Dec 2024',
    tagline: 'A website to collaborate on daily tasks with friends.',
    sourceCodeHref: 'https://github.com/krey-yon/CTM',
    liveDemoHref: 'https://ctm.kreyon.tech/',
  },
  {
    videoSrc:
      'https://res.cloudinary.com/deqxdempa/video/upload/v1736438359/pcppjrpngbuc3mtjac8w.mp4',
    imageSrc: '/images/project/CTM.png',
    title: 'NoBg',
    tags: ['React', 'Typescript', 'ClipDrop', 'TailwindCSS'],
    timeline: 'Jan 2024',
    tagline: 'A website to remove background from images.',
    sourceCodeHref: 'https://github.com/krey-yon/NoBG',
    liveDemoHref: 'https://nobg.kreyon.tech/',
  },
]
