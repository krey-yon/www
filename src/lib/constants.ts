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
]
