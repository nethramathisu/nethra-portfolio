import React, { useState } from "react";
import
{
	ArrowRight,
	BriefcaseBusiness,
	CheckCircle2,
	Code2,
	Database,
	Download,
	ExternalLink,
	Github,
	GraduationCap,
	Linkedin,
	Mail,
	MapPin,
	Menu,
	Server,
	X,
} from "lucide-react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
	{
		category: "Frontend",
		items: [
			"React.js",
			"JavaScript",
			"TypeScript",
			"Angular",
			"Redux Toolkit",
			"Tailwind CSS",
			"HTML5",
			"CSS3",
		],
	},
	{
		category: "Backend",
		items: ["Node.js", "Express.js", "REST APIs"],
	},
	{
		category: "Database",
		items: ["MongoDB", "Mongoose", "SQL"],
	},
	{
		category: "Tools & Technologies",
		items: ["Git", "GitHub", "Vite", "Postman"],
	},
];

const projects = [
	{
		title: "Pet Adoption Platform",
		type: "MERN Full Stack",
		description:
			"A role-based pet adoption platform with authentication, pet listings, adoption workflow, messaging and Cloudinary uploads.",
		tech: [
			"React",
			"TypeScript",
			"Node.js",
			"Express",
			"MongoDB",
			"Cloudinary",
		],
		live: "https://pet-adoption-we.netlify.app",
		frontendGithub:
			"https://github.com/nethramathisu/pet-adoption-frontend",
		backendGithub:
			"https://github.com/nethramathisu/pet-adoption-backend",
	},
	{
		title: "Expense Tracker",
		type: "MERN Full Stack",
		description:
			"A full-stack expense tracking application with secure authentication, transaction management, category filtering, search and spending summaries.",
		tech: [
			"React",
			"TypeScript",
			"Node.js",
			"Express",
			"MongoDB",
			"JWT",
		],
		live: "https://expensetrackerwebsapp.netlify.app/",
		frontendGithub:
			"https://github.com/nethramathisu/expense-tracker-frontend",
		backendGithub:
			"https://github.com/nethramathisu/expense-tracker-backend",
	},
	{
		title: "Book Management System",
		type: "MERN Full Stack",
		description:
			"A full-stack book management application with authentication, book management, borrowing and returning functionality, and borrowing history.",
		tech: [
			"React",
			"TypeScript",
			"Node.js",
			"Express",
			"MongoDB",
			"JWT",
		],
		live: "https://mernbookmanagement.netlify.app/",
		frontendGithub:
			"https://github.com/nethramathisu/book-management-frontend",
		backendGithub:
			"https://github.com/nethramathisu/book-management-backend",
	},
	{
		title: "Recipe App",
		type: "Frontend",
		description:
			"A responsive recipe search application focused on a clean and practical user experience.",
		tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
		live: "https://recipe-app-web-site.netlify.app",
		frontendGithub: "https://github.com/nethramathisu/Mini-project-Recipe",
	},
	{
		title: "Kanban Board",
		type: "Frontend",
		description:
			"A task-management application with a drag-and-drop interface for organising work clearly.",
		tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
		live: "https://kanban-board-web-site.netlify.app",
		frontendGithub: "https://github.com/nethramathisu/kanban_board",
	},
];

function App()
{
	const [open, setOpen] = useState(false);
	const handleSubmit = async (e) =>
	{
		e.preventDefault();

		const form = e.target;

		try
		{
			const response = await fetch("/", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams(new FormData(form)).toString(),
			});

			if (response.ok)
			{
				alert("Thank you! Your message has been sent successfully.");
				form.reset();
			} else
			{
				alert("Something went wrong. Please try again.");
			}
		} catch (error)
		{
			alert("Unable to send your message. Please try again.");
		}
	};
	return (
		<div className="min-h-screen bg-slate-950 text-slate-100">
			{/* HEADER */}
			<header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
				<div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
					<a href="#home" className="font-black text-xl">
						Nethra<span className="text-violet-400">.</span>
					</a>

					<nav className="hidden md:flex gap-7 text-sm text-slate-300">
						{[
							"About",
							"Skills",
							"Projects",
							"Experience",
							"Education",
							"Contact",
						].map((x) => (
							<a
								href={"#" + x.toLowerCase()}
								key={x}
								className="hover:text-white"
							>
								{x}
							</a>
						))}
					</nav>

					<a
						href="/Nethra-Resume.pdf"
						download
						className="hidden md:flex gap-2 items-center bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm"
					>
						<Download size={16} />
						Resume
					</a>

					<button
						onClick={() => setOpen(!open)}
						className="md:hidden"
					>
						{open ? <X /> : <Menu />}
					</button>
				</div>

				{open && (
					<nav className="md:hidden border-t border-white/10 px-5 py-3">
						{[
							"About",
							"Skills",
							"Projects",
							"Experience",
							"Education",
							"Contact",
						].map((x) => (
							<a
								onClick={() => setOpen(false)}
								href={"#" + x.toLowerCase()}
								key={x}
								className="block py-3 text-slate-300"
							>
								{x}
							</a>
						))}
					</nav>
				)}
			</header>

			<main>
				{/* HOME */}
				<section id="home" className="relative min-h-screen pt-28">
					<div className="glow left-[-10rem] top-20" />

					<div className="max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
						<div>
							<span className="inline-flex px-4 py-2 rounded-full border border-violet-400/20 bg-violet-400/10 text-violet-200 text-sm">
								Frontend / MERN Stack Developer
							</span>

							<h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
								Hi, I'm <span className="gradient">Nethra.</span>
							</h1>

							<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
								Frontend Developer with 2 years of industry experience and
								recent MERN Full Stack training. I build responsive web
								applications using modern frontend and backend technologies.
							</p>

							<div className="mt-9 flex flex-wrap gap-4">
								<a
									href="#projects"
									className="flex items-center gap-2 bg-violet-500 hover:bg-violet-400 px-6 py-3.5 rounded-full font-bold"
								>
									View my projects
									<ArrowRight size={18} />
								</a>

								<a
									href="/Nethra-Resume.pdf"
									download
									className="flex items-center gap-2 border border-white/10 px-6 py-3.5 rounded-full font-bold"
								>
									<Download size={18} />
									Download resume
								</a>
							</div>

							<div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
								<span className="flex gap-2 items-center">
									<MapPin size={16} />
									Palakkad, Kerala
								</span>

								<a
									href="mailto:nethra.gmr@gmail.com"
									className="flex gap-2 items-center hover:text-white"
								>
									<Mail size={16} />
									nethra.gmr@gmail.com
								</a>
							</div>

							<div className="mt-7 flex gap-4">
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.linkedin.com/in/nethra-mathisu-424194199"
									className="border border-white/10 rounded-full p-3"
								>
									<Linkedin size={19} />
								</a>

								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/nethramathisu"
									className="border border-white/10 rounded-full p-3"
								>
									<Github size={19} />
								</a>
							</div>
						</div>

						<div className="max-w-md w-full mx-auto">
							<div className="rounded-3xl border border-white/10 bg-white/[.04] p-5 flex items-center gap-5">
								<div className="profile-ring p-1 rounded-full shrink-0">
									<img
										src="/nethra-profile.jpeg"
										alt="Nethra Mathisu"
										className="w-32 h-32 rounded-full object-cover object-top"
									/>
								</div>

								<div>
									<p className="text-xs uppercase tracking-[.18em] text-violet-300 font-bold">
										Hello, I'm Nethra
									</p>

									<p className="mt-2 text-sm leading-6 text-slate-400">
										Frontend Developer building modern and responsive web
										applications.
									</p>
								</div>
							</div>

							<div className="mt-6 rounded-3xl border border-white/10 bg-white/[.04] p-6">
								<p className="text-xs text-slate-500 mb-4">
									developer.js
								</p>

								<pre className="text-sm leading-7 text-slate-300 overflow-auto">
									{`const nethra = {
  role: "Frontend / MERN",
  frontend: ["React","TypeScript","Angular"],
  backend: ["Node.js","Express.js"],
  database: ["MongoDB","SQL"]
};`}
								</pre>
							</div>
						</div>
					</div>
				</section>

				{/* ABOUT */}
				<Section id="about" num="01" title="A little about me">
					<div className="grid lg:grid-cols-[1.3fr_.7fr] gap-6">
						<Card>
							<p className="text-lg leading-8 text-slate-300">
								I'm a Frontend Developer with 2 years of industry experience
								and recent MERN Full Stack training. My professional experience
								includes responsive web interfaces, REST API integration, bug
								fixing and feature enhancement.
							</p>

							<p className="mt-5 leading-8 text-slate-400">
								I am currently strengthening my skills in React.js, JavaScript,
								TypeScript, Redux Toolkit, Tailwind CSS, Node.js, Express.js
								and MongoDB, with a focus on building practical, responsive web
								applications.
							</p>
						</Card>

						<div className="grid gap-4">
							<Mini
								icon={<Code2 />}
								title="Frontend"
								text="React.js, Angular, TypeScript, Tailwind CSS"
							/>

							<Mini
								icon={<Server />}
								title="Backend"
								text="Node.js, Express.js & REST APIs"
							/>

							<Mini
								icon={<Database />}
								title="Database"
								text="MongoDB, Mongoose & SQL"
							/>
						</div>
					</div>
				</Section>

				{/* SKILLS */}
				{/* SKILLS */}
				<Section id="skills" num="02" title="Technologies I work with">
					<div className="grid md:grid-cols-2 gap-6">
						{skills.map((group) => (
							<Card key={group.category}>
								<h3 className="text-lg font-bold text-violet-300">
									{group.category}
								</h3>

								<div className="mt-5 flex flex-wrap gap-2">
									{group.items.map((skill) => (
										<span
											key={skill}
											className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-300"
										>
											{skill}
										</span>
									))}
								</div>
							</Card>
						))}
					</div>
				</Section>

				{/* PROJECTS */}
				<Section id="projects" num="03" title="Projects I've built">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{projects.map((p, i) => (
							<article
								key={p.title}
								className={
									"rounded-3xl border p-7 flex flex-col " +
									(i === 0
										? "border-violet-400/30 bg-violet-500/[.07]"
										: "border-white/10 bg-white/[.03]")
								}
							>
								<div className="rounded-xl bg-violet-400/10 p-3 text-violet-300 w-fit">
									<Code2 size={21} />
								</div>

								<p className="mt-6 text-xs uppercase tracking-[.16em] text-slate-500 font-bold">
									{p.type}
								</p>

								<h3 className="mt-2 text-xl font-bold">
									{p.title}
								</h3>

								<p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
									{p.description}
								</p>

								<div className="mt-6 flex flex-wrap gap-2">
									{p.tech.map((t) => (
										<span
											key={t}
											className="bg-white/5 rounded-lg px-2.5 py-1 text-xs text-slate-300"
										>
											{t}
										</span>
									))}
								</div>

								<div className="mt-7 flex flex-wrap gap-4">
									<a
										href={p.live}
										target="_blank"
										rel="noopener noreferrer"
										className="flex gap-2 items-center text-sm font-semibold hover:text-violet-300"
									>
										<ExternalLink size={16} />
										Live Demo
									</a>

									{p.frontendGithub && (
										<a
											href={p.frontendGithub}
											target="_blank"
											rel="noopener noreferrer"
											className="flex gap-2 items-center text-sm font-semibold hover:text-violet-300"
										>
											<Github size={16} />
											Frontend
										</a>
									)}

									{p.backendGithub &&
										p.backendGithub.startsWith("https://github.com/") && (
											<a
												href={p.backendGithub}
												target="_blank"
												rel="noopener noreferrer"
												className="flex gap-2 items-center text-sm font-semibold hover:text-violet-300"
											>
												<Github size={16} />
												Backend
											</a>
										)}
								</div>
							</article>
						))}
					</div>
				</Section>

				{/* EXPERIENCE */}
				```jsx
				{/* EXPERIENCE */}
				<Section id="experience" num="04" title="Professional experience">
					<div className="max-w-4xl border-l border-white/10 pl-8">

						{/* Intact Green Services */}
						<div className="relative">
							<span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-slate-950 bg-violet-400" />

							<Card>
								<div className="flex flex-col sm:flex-row sm:justify-between gap-2">
									<div>
										<h3 className="text-xl font-bold">
											Front End Developer
										</h3>
										<p className="mt-1 text-violet-300 font-medium">
											INTACT GREEN SERVICES PVT. LTD.
										</p>
										<p className="mt-1 text-sm text-slate-500">
											Bengaluru
										</p>
									</div>

									<span className="text-sm text-slate-500">
										Mar 2019 – Feb 2020
									</span>
								</div>

								<ul className="mt-6 space-y-3">
									{[
										"Crafted intuitive and reusable UI elements with HTML, CSS, and Angular, facilitating a 30% faster integration of new product features into the existing application.",
										"Integrated REST APIs, implemented dynamic data rendering, and resolved UI defects with development and QA teams.",
									].map((x) => (
										<li
											key={x}
											className="flex gap-3 text-sm text-slate-400"
										>
											<CheckCircle2
												size={18}
												className="text-violet-400 shrink-0"
											/>
											{x}
										</li>
									))}
								</ul>
							</Card>
						</div>

						{/* Rhibhus Infosystem */}
						<div className="relative mt-10">
							<span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-slate-950 bg-violet-400" />

							<Card>
								<div className="flex flex-col sm:flex-row sm:justify-between gap-2">
									<div>
										<h3 className="text-xl font-bold">
											Frontend Developer
										</h3>
										<p className="mt-1 text-violet-300 font-medium">
											RHIBHUS INFOSYSTEM PVT. LTD.
										</p>
										<p className="mt-1 text-sm text-slate-500">
											Bengaluru
										</p>
									</div>

									<span className="text-sm text-slate-500">
										Mar 2020 – Jan 2021
									</span>
								</div>

								<ul className="mt-6 space-y-3">
									{[
										"Developed and maintained responsive Angular interfaces with backend API integration and dynamic components.",
										"Enhanced features, fixed application issues, and collaborated with cross-functional teams to improve usability and performance.",
									].map((x) => (
										<li
											key={x}
											className="flex gap-3 text-sm text-slate-400"
										>
											<CheckCircle2
												size={18}
												className="text-violet-400 shrink-0"
											/>
											{x}
										</li>
									))}
								</ul>
							</Card>
						</div>

					</div>
				</Section>
				```


				{/* EDUCATION */}
				<Section id="education" num="05" title="Education & certification">
					<div className="grid md:grid-cols-2 gap-6">

						<Card>
							<GraduationCap className="text-violet-300" />

							<h3 className="mt-5 text-xl font-bold">
								Master of Computer Applications (MCA)
							</h3>

							<p className="mt-2 text-slate-400">
								Kristu Jayanti College · 2018
							</p>

							<p className="mt-4 text-sm text-slate-500">
								PG Percentage: 76.94%
							</p>
						</Card>

						<Card>
							<BriefcaseBusiness className="text-violet-300" />

							<h3 className="mt-5 text-xl font-bold">
								GUVI Full Stack Development
							</h3>

							<p className="mt-2 text-slate-400">
								MERN · 2026
							</p>

							<a
								href="https://www.zenclass.in/certificateDownload/8m8WsXntFQEIWamK"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-violet-300 hover:text-violet-200"
							>
								<ExternalLink size={16} />
								View Certificate
							</a>
						</Card>

					</div>
				</Section>

				{/* CONTACT */}
				{/* CONTACT */}

				<Section id="contact" num="06" title="Let's connect">
					<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

						{/* Contact Information */}
						<div className="lg:order-1">
							<Card>
								<h3 className="text-2xl font-black">
									Looking for a new opportunity?
								</h3>

								<p className="mt-4 leading-7 text-slate-400">
									I'm open to opportunities where I can use my frontend experience
									and continue growing as a full-stack developer.
								</p>

								<div className="mt-8 space-y-5">
									<a
										href="mailto:nethra.gmr@gmail.com"
										className="flex items-center gap-3 text-slate-300 hover:text-white"
									>
										<Mail size={18} className="text-violet-300" />
										nethra.gmr@gmail.com
									</a>

									<a
										href="https://www.linkedin.com/in/nethra-mathisu-424194199"
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-3 text-slate-300 hover:text-white"
									>
										<Linkedin size={18} className="text-violet-300" />
										LinkedIn
									</a>

									<a
										href="https://github.com/nethramathisu"
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-3 text-slate-300 hover:text-white"
									>
										<Github size={18} className="text-violet-300" />
										GitHub
									</a>

									<div className="flex items-center gap-3 text-slate-300">
										<MapPin size={18} className="text-violet-300" />
										Palakkad, Kerala
									</div>
								</div>
							</Card>
						</div>

						{/* Contact Form */}
						<div className="lg:order-2">
							<Card>
								<h3 className="text-2xl font-black">
									Send me a message
								</h3>

								<p className="mt-2 text-sm leading-6 text-slate-400">
									Have an opportunity or a project in mind? Feel free to reach out.
								</p>

								<form
									name="contact"
									method="POST"
									data-netlify="true"
									onSubmit={handleSubmit}
									className="mt-7 space-y-5"
								>
									<input
										type="hidden"
										name="form-name"
										value="contact"
									/>

									<div>
										<label
											htmlFor="name"
											className="mb-2 block text-sm font-medium text-slate-200"
										>
											Name
										</label>

										<input
											id="name"
											type="text"
											name="name"
											required
											placeholder="Your name"
											className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-400"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="mb-2 block text-sm font-medium text-slate-200"
										>
											Email
										</label>

										<input
											id="email"
											type="email"
											name="email"
											required
											placeholder="your@email.com"
											className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-400"
										/>
									</div>

									<div>
										<label
											htmlFor="message"
											className="mb-2 block text-sm font-medium text-slate-200"
										>
											Message
										</label>

										<textarea
											id="message"
											name="message"
											required
											rows="5"
											placeholder="Write your message..."
											className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-400"
										/>
									</div>

									<button
										type="submit"
										className="w-full rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
									>
										Send Message
									</button>
								</form>
							</Card>
						</div>

					</div>
				</Section>

			</main>

			{/* FOOTER */}
			<footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
				© {new Date().getFullYear()} Nethra Mathisu · Built with React & Tailwind CSS
			</footer>
		</div>
	);
}

function Section({ id, num, title, children })
{
	return (
		<section id={id} className="py-24 border-t border-white/10">
			<div className="max-w-6xl mx-auto px-5">
				<p className="text-xs uppercase tracking-[.22em] font-bold text-violet-300">
					{num} — {title}
				</p>

				<h2 className="mt-3 mb-12 text-3xl sm:text-4xl font-black">
					{title}
				</h2>

				{children}
			</div>
		</section>
	);
}

function Card({ children })
{
	return (
		<div className="rounded-3xl border border-white/10 bg-white/[.03] p-7">
			{children}
		</div>
	);
}

function Mini({ icon, title, text })
{
	return (
		<div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
			{icon}

			<h3 className="mt-3 font-bold">{title}</h3>

			<p className="mt-1 text-sm leading-6 text-slate-400">
				{text}
			</p>
		</div>
	);
}

createRoot(document.getElementById("root")).render(<App />);