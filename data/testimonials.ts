export type AuthorName =
  | 'brett'
  | 'mikey'
  | 'jo'
  | 'ze'
  | 'ben'
  | 'andrew'
  | 'yohan'

type AuthorDetails = {
  avatar: string
  name: string
  title: string
  company: string
  testimonial: string
}

export const AUTHORS: Record<AuthorName, AuthorDetails> = {
  brett: {
    avatar: 'brett',
    name: 'Brett Sun',
    title: 'CTO',
    company: 'Aragon One',
    testimonial:
      'I have seldom met an individual who personifies the senior UI/UX engineer as well as Andy. He not only drives to personally deliver to the highest of standards, but goes the distance to improve the work of everyone around him',
  },
  mikey: {
    avatar: 'mikey',
    name: 'Mikey Allan',
    title: 'Head of Design',
    company: 'Brandwatch',
    testimonial:
      "Andy is hands down one of the most talented people I've worked with in the web industry. It's rare to see a talent in design matched so equally by competency in development",
  },
  jo: {
    avatar: 'jo',
    name: 'Jo Petty',
    title: 'Digital Project Manager',
    company: 'Brandwatch',
    testimonial:
      "Andy is one of the most creative and talented people I've had the pleasure of working with. Collaborating with him on the Brandwatch website was a rewarding experience: he strived for perfection, had a very detail-orientated approach to design, and was constantly trying new and better techniques.",
  },
  ze: {
    avatar: 'ze',
    name: 'Zé Meirinhos',
    title: 'Javascript Developer',
    company: 'Bright Interactive',
    testimonial:
      'Andy is inspiring, supportive, curious, always looking to expand his skills, and generally a great person to be around with. Working in a team he understands the importance of clear goals and how to best achieve the team’s aims. His attention to detail makes everything he touches look incredibly polished, and affirms his elegant simplicity.',
  },
  ben: {
    avatar: 'ben',
    name: 'Ben Browning',
    title: 'UI/UX Developer',
    company: 'Bright Interactive',
    testimonial:
      'Andy is a rare find in UI development. He is equally brilliant at the creative visual design side as he is with the technical side of engineering a modern web app. Whatever task he is working on he will go above and beyond to deliver at a very high quality level.',
  },
  andrew: {
    avatar: 'andrew',
    name: 'Andrew Khan',
    title: 'Lead Software Architect',
    company: 'Opia',
    testimonial:
      'Andy has a tremendous understanding of front-end on the web and was often a source of knowledge for me in areas such as web performance, animation and technology. His front-end implementations have always taken into consideration my requirements as a developer, allowing our code to integrate effectively. This has always resulted in a faster, better experience for the end user.',
  },
  yohan: {
    avatar: 'yohan',
    name: 'Yohan Fernando',
    title: 'Senior Software Engineer',
    company: 'Brandwatch',
    testimonial:
      'Andy has an unparalleled thirst for knowledge which keeps him always on top of his game, self-motivated and not only positively contribute to projects, but guide & motivates other team members too. His ability to absorb the brief and come up with unique and artistic designs whilst conforming to constraints of web is phenomenal.',
  },
}
