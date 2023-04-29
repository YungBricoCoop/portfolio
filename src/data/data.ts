export const techno = [
	{ src: 'banner/react.svg', link: 'https://reactjs.org/' },
	{
		src: 'banner/typescript.png',
		link: 'https://www.typescriptlang.org/',
	},
	{ src: 'banner/tailwind.png', link: 'https://tailwindcss.com/' },
	{ src: 'banner/python.png', link: 'https://www.python.org/' },
	{ src: 'banner/fastapi.png', link: 'https://fastapi.tiangolo.com/' },
	{ src: 'banner/nodejs.svg', link: 'https://nodejs.org/en/' },
];

export const tools = [
	{ src: 'banner/vscode.png', link: 'https://code.visualstudio.com/' },
	{ src: 'banner/git.png', link: 'https://git-scm.com/' },
	{ src: 'banner/postman.png', link: 'https://www.postman.com/' },
	{ src: 'banner/termius.png', link: 'https://termius.com/' },
	{ src: 'banner/copilot.png', link: 'https://copilot.github.com/' },
	{ src: 'banner/openai.png', link: 'https://openai.com/' },
	{ src: 'banner/figma.png', link: 'https://www.figma.com/' },
	{ src: 'banner/photoshop.png', link: 'https://www.adobe.com/' },
]

export const projects = [
	{
		name: 'Portfolio V3',
		description:
			'The third iteration of my portfolio, I tried to make it as simple as possible, but still good looking.',
		type: 'Web',
		technologies: [
			'React',
			'TypeScript',
			'TailwindCSS',
			'Framer Motion',
			'Spline',
			'ThreeJS',
		],
		link: 'https://elwan.ch/',
		github: 'https://github.com/YungBricoCoop/portfolio',
		image: 'gradients/gradient1.jpg',
	},
	{
		name: 'ELMA',
		description:
			'ELMA is a private project, it is a complete solution for managing clients, invcoices, services. It is used to keep track of the work done for each client, generate invoices, and manage the payments.',
		type: 'Fullstack',
		technologies: [
			'React',
			'TypeScript',
			'TailwindCSS',
			'MySQL',
			'FastAPI',
			'Python',
			'Nginx',
		],
		image: 'gradients/gradient2.jpg',
	},
	{
		name: 'Sophy Dashboard',
		description:
			'Sophy Dashboard is a private project, it is a dashboard used to manage job applications, and keep track of the progress and the relevancy of each application.',

		type: 'Fullstack',
		technologies: [
			'React',
			'TailwindCSS',
			'FileMaker',
			'Flask',
			'Python',
			'Nginx',
		],
		image: 'gradients/gradient5.jpg',
	},
	{
		name: 'Resume Dyno',
		description:
			'A chrome extension that works with ChatGPT to parse a given resume and return the parsed data in a JSON format. The JSON structure is totally customizable, and can be changed in the extension settings.',
		type: 'Extension',
		technologies: ['React', 'TypeScript', 'TailwindCSS', 'Rollup', 'ChatGPT', 'FastAPI'],
		github: 'https://github.com/YungBricoCoop/resume-dyno',
		image: 'gradients/gradient6.jpg',
	},
	{
		name: 'Vite React Starter',
		description:
			'Vite React Starter is a starter template for TypeScript React projects, it is based on Vite, and includes TailwindCSS, React Router, Prettier',
		type: 'Boilerplate',
		technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
		github: 'https://github.com/YungBricoCoop/vite-react-starter',
		image: 'gradients/gradient3.jpg',
	},
	{
		name: 'Blastify',
		description:
			'Blastify is a web app that I made to display your spotify top artists, tracks and albums. The UI is based on the macOS Monterey design and is very user friendly',
		type: 'Web',
		technologies: ['React', 'TailwindCSS', 'Spotify API'],
		link: 'https://elwan.ch/blastify',
		github: 'https://github.com/YungBricoCoop/blastify',
		image: 'gradients/gradient5.jpg',
	},
	{
		name: 'Wombo AI Scraper',
		description:
			'Wombo AI Scraper is a scraping tool that i made to download the images generated by the Wombo AI app. It is a simple tool that use Selenium to interact with the website, and download the images. It has currently 17⭐ on GitHub.',
		type: 'Script',
		technologies: ['Python', 'Selenium'],
		github: 'https://github.com/YungBricoCoop/wombo-ai-scraper',
		image: 'gradients/gradient8.jpg',
	}
]