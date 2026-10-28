import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Home,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Award,
  FileText,
  FolderKanban,
  Phone,
  Play,
  Send,
  Sparkles,
  Sun,
  X,
  UserRound,
} from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Marquee, ScrollBar, useFx } from "@/components/fx";
import analyticsAdminImage from "@/images/capture-analytics-admin.png";
import catalogueImage from "@/images/capture-catalogue.png";
import chatbotClientImage from "@/images/capture-chatbot-client.png";
import dashboardAdminImage from "@/images/capture-dashboard-admin.png";
import moduleIaCragImage from "@/images/capture-module-ia-crag.png";
import modulesGestionImage from "@/images/capture-modules-gestion.png";
import produitPanierImage from "@/images/capture-produit-panier.png";
import uploadCragImage from "@/images/capture-upload-crag.png";
import captioningDemoVideo from "@/demo/Enregistrement de l'écran 2026-02-06 034657.mp4?url";
import agentsCertificate from "@/certif/agents.pdf?url";
import businessIntelligenceCertificate from "@/certif/BI_certif.pdf?url";
import dataCleaningCertificate from "@/certif/CC-43BDBA5FEE.pdf?url";
import gitGithubCertificate from "@/certif/CC-E8A1371C59.pdf?url";
import generativeAiCertificate from "@/certif/Generative_AI_certif.pdf?url";
import pytorchCertificate from "@/certif/pytorch.pdf?url";
import ragCertificate from "@/certif/RAG_fundamentals.pdf?url";
import softwareTestingCertificate from "@/certif/Test_certif.pdf?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yassine Khlif — Software & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Yassine Khlif, a software engineer building practical AI-powered full-stack products in Sfax, Tunisia.",
      },
      { property: "og:title", content: "Yassine Khlif — Software & AI Engineer" },
      {
        property: "og:description",
        content: "AI and full-stack engineering portfolio, projects, experience, and résumé.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", icon: FolderKanban },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "resume", label: "Résumé", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];
const cvUrl = "/resume.pdf";

const skillGroups = [
  { title: "Languages", icon: Code2, skills: ["Java", "JavaScript", "Python", "C", "PHP", "HTML", "CSS"] },
  {
    title: "Frameworks & libraries",
    icon: Sparkles,
    skills: ["Spring Boot", "React.js", ".NET", "Angular", "Flutter", "Laravel", "PyTorch"],
  },
  { title: "Databases", icon: BriefcaseBusiness, skills: ["MySQL", "Oracle", "PostgreSQL", "SQL Server"] },
  {
    title: "Tools & AI stack",
    icon: CheckCircle2,
    skills: ["Git", "GitHub", "GitLab", "Docker", "Kubernetes", "LangChain", "FAISS"],
  },
];

const experience = [
  {
    company: "Sunevit",
    role: "AI Full-Stack Engineering Intern",
    date: "Feb 2026 — Jun 2026",
    summary:
      "Built an intelligent commerce platform spanning catalog, customer experience, administration, secure APIs, and order operations.",
    highlights: [
      "Created an AI chatbot grounded in product data and user context.",
      "Integrated Corrective RAG with vector search for precise answers.",
      "Built personalized recommendations using preferences and catalog similarity.",
    ],
    tech: ["React.js", "Spring Boot", "Python", "FastAPI", "LangChain", "MySQL", "Docker"],
  },
  {
    company: "Acteol",
    role: "Web Development Intern",
    date: "Jun 2025 — Sep 2025",
    summary:
      "Strengthened service security with OAuth2 and built REST workflows for survey retrieval and submission.",
    highlights: ["Implemented validation and conditional UI states.", "Added session tracking and resilient error handling."],
    tech: [".NET Core", "React.js", "JavaScript", "OAuth2", "SQL Server", "REST API"],
  },
  {
    company: "ExaDev",
    role: "Web Development Intern",
    date: "Jun 2024 — Aug 2024",
    summary: "Designed the database and dynamic Blade pages for a company showcase website.",
    highlights: ["Applied Laravel MVC, routing, and maintainable code organization."],
    tech: ["PHP", "Laravel", "MySQL", "Blade", "Git"],
  },
];

const projects = [
  {
    title: "PFE — AI-Powered E-Commerce Assistant",
    number: "01",
    description: "A complete commerce experience with an AI chatbot, Corrective RAG, and personalized recommendations.",
    tech: ["React", "Spring Boot", "LangChain", "FastAPI"],
    href: "https://github.com/yassinekh08/PFE",
  },
  {
    title: "Intelligent Image Captioning System",
    number: "02",
    description:
      "A vision-language pipeline combining image classification, BLIP captioning, and RAG rules for concise contextual captions.",
    tech: ["Python", "PyTorch", "BLIP", "FAISS"],
  },
  {
    title: "Secure Service Integration",
    number: "03",
    description: "An OAuth2-secured web application with robust survey workflows and REST API integration.",
    tech: [".NET Core", "React", "OAuth2", "SQL Server"],
    href: "https://github.com/yassinekh08/Web-Development-and-Secure-Service-Integration",
  },
  {
    title: "Corporate Presentation Website",
    number: "04",
    description: "A dynamic company showcase built around Laravel MVC conventions and Blade templates.",
    tech: ["Laravel", "PHP", "Blade", "MySQL"],
    href: "https://github.com/yassinekh08/Developpement-dun-site-web-de-presentation-dentreprise",
  },
  {
    title: "Cocktail Project",
    number: "05",
    description: "A TypeScript application for exploring and working with cocktail data through a clean interface.",
    tech: ["TypeScript", "Web UI", "API"],
    href: "https://github.com/yassinekh08/Cocktail-Project",
  },
  {
    title: "E-Commerce .NET",
    number: "06",
    description: "A C# and .NET commerce project focused on structured domain logic and scalable web architecture.",
    tech: ["C#", ".NET", "E-Commerce"],
    href: "https://github.com/yassinekh08/E-Commerce_net",
  },
];

const certifications = [
  { issuer: "365 Data Science", title: "Intro to AI Agents and Agentic AI", date: "Nov 11, 2025", file: agentsCertificate },
  { issuer: "Google · Coursera", title: "Foundations of Business Intelligence", date: "Aug 28, 2025", file: businessIntelligenceCertificate },
  { issuer: "365 Data Science", title: "Data Cleaning and Preprocessing with pandas", date: "Nov 16, 2025", file: dataCleaningCertificate },
  { issuer: "365 Data Science", title: "Git and GitHub", date: "Nov 11, 2025", file: gitGithubCertificate },
  { issuer: "IBM · Coursera", title: "Generative AI: Introduction and Applications", date: "Aug 27, 2025", file: generativeAiCertificate },
  { issuer: "365 Data Science", title: "Deep Learning with PyTorch", date: "Nov 17, 2025", file: pytorchCertificate },
  { issuer: "IBM · Coursera", title: "Advanced RAG with Vector Databases and Retrievers", date: "Aug 27, 2025", file: ragCertificate },
  { issuer: "University of Leeds · Coursera", title: "Foundations of Software Testing and Validation", date: "Aug 27, 2025", file: softwareTestingCertificate },
];

const pfeScreens = [
  { title: "Maison storefront", area: "Customer experience", image: catalogueImage, note: "A premium fashion storefront with collection browsing, product filters, and a direct path to the stylist." },
  { title: "Product detail & cart", area: "Commerce", image: produitPanierImage, note: "Product details and shopping actions come together with an easy route to stylist advice." },
  { title: "AI stylist conversations", area: "Generative AI", image: chatbotClientImage, note: "Conversational outfit advice grounded in products and store knowledge." },
  { title: "AI module controls", area: "LLM operations", image: moduleIaCragImage, note: "Configure model behavior, prompt strategy, retrieval settings, safety, and tools." },
  { title: "Management workspace", area: "Catalog management", image: modulesGestionImage, note: "Admin tools for managing the products and operational data behind the storefront." },
  { title: "Knowledge operations", area: "RAG pipeline", image: uploadCragImage, note: "Manage source documents, indexing status, and retrieval traces for grounded answers." },
  { title: "Store overview", area: "Commerce operations", image: dashboardAdminImage, note: "A single view of revenue, orders, customers, products, and operational queues." },
  { title: "Merchandising insights", area: "Analytics", image: analyticsAdminImage, note: "Read customer demand and product preferences to support better merchandising." },
];

function PfeCataloguePreview() {
  const [current, setCurrent] = useState(0);
  const screen = pfeScreens[current]!;

  const move = (offset: number) => {
    setCurrent((index) => (index + offset + pfeScreens.length) % pfeScreens.length);
  };

  return (
    <div className="pfe-inline-catalogue">
      <div className="pfe-inline-top"><span>MAISON / PROJECT CATALOGUE</span><span>{String(current + 1).padStart(2, "0")} / {String(pfeScreens.length).padStart(2, "0")}</span></div>
      <div className="pfe-inline-image"><img key={screen.image} src={screen.image} alt={`${screen.title} screenshot`} /></div>
      <div className="pfe-inline-caption"><div><span>{screen.area}</span><strong>{screen.title}</strong></div><div className="pfe-inline-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Previous project screen"><ChevronLeft size={16} /></button>
        <button type="button" onClick={() => move(1)} aria-label="Next project screen"><ChevronRight size={16} /></button>
      </div></div>
      <div className="pfe-inline-thumbnails" aria-label="Choose a project screen">
        {pfeScreens.map((item, index) => <button type="button" key={item.title} className={index === current ? "is-current" : ""} aria-label={`Show ${item.title}`} aria-pressed={index === current} onClick={() => setCurrent(index)}><img src={item.image} alt="" loading="lazy" /></button>)}
      </div>
    </div>
  );
}

function CaptioningPreview() {
  return (
    <button className="captioning-preview" type="button" onClick={() => document.getElementById("captioning-demo")?.scrollIntoView({ behavior: "smooth" })} aria-label="Watch the image captioning project demo">
      <span className="captioning-preview-kicker">VISION / LANGUAGE</span>
      <span className="captioning-flow">
        <span className="captioning-node"><small>01 / INPUT</small><strong>Image</strong><i>Visual features</i></span>
        <span className="captioning-connector" aria-hidden="true">→</span>
        <span className="captioning-node"><small>02 / MODEL</small><strong>BLIP + RAG</strong><i>Contextualize</i></span>
      </span>
      <span className="captioning-preview-bottom"><span>PYTORCH · FAISS · CAPTIONING</span><i><Play size={16} fill="currentColor" /></i></span>
    </button>
  );
}

function SectionHeading({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <div className="section-kicker"><span>{number}</span>{eyebrow}</div>
      <div className="section-title-row">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

function Portfolio() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [loading, setLoading] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  useFx();

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-theme");
    setDark(stored ? stored === "dark" : true);
    const timer = window.setTimeout(() => setLoading(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const sections = document.querySelectorAll("main section[id]");
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    reveals.forEach((item) => revealObserver.observe(item));
    const sectionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%" },
    );
    sections.forEach((section) => sectionObserver.observe(section));
    return () => { revealObserver.disconnect(); sectionObserver.disconnect(); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    const next = !dark;
    const startViewTransition = (document as Document & {
      startViewTransition?: (update: () => void) => { finished: Promise<void> };
    }).startViewTransition;

    if (startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      startViewTransition.call(document, () => setDark(next));
    } else {
      setDark(next);
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 18;
    heroRef.current.style.setProperty("--parallax-x", `${x}px`);
    heroRef.current.style.setProperty("--parallax-y", `${y}px`);
  };

  const handleNavPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${String(data.get("name"))}`);
    const body = encodeURIComponent(`${String(data.get("message"))}\n\nReply to: ${String(data.get("email"))}`);
    window.location.href = `mailto:yassinkhlif08@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="portfolio-shell">
      <ScrollBar />
      <div className={`loader ${loading ? "is-loading" : "is-loaded"}`} aria-hidden={!loading}>
        <div className="loader-mark">YK<span>.</span></div><div className="loader-line" />
      </div>

      <header className="site-header">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }} aria-label="Yassine Khlif, home">YK<span>.</span></a>
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation" onPointerMove={handleNavPointerMove}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "page" : undefined} title={label} onClick={(e) => { e.preventDefault(); scrollTo(id); }}><Icon size={17} aria-hidden="true" /><span>{label}</span></a>
          ))}
        </nav>
        <div className="header-actions">
          <Button variant="icon" className="theme-toggle" aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title={dark ? "Light theme" : "Dark theme"} onClick={toggleTheme}>
            {dark ? <Sun size={24} strokeWidth={2.2} /> : <Moon size={24} strokeWidth={2.2} />}
          </Button>
          <Button variant="icon" className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
          </Button>
        </div>
      </header>

      <main>
        <section id="home" className="hero" ref={heroRef} onPointerMove={handlePointerMove}>
          <svg className="hero-light-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path className="light-line line-olive" d="M650 175 C850 60 1010 115 1135 210 S1370 335 1510 205" />
            <path className="light-line line-rust" d="M645 205 C855 95 1015 150 1145 245 S1385 365 1525 240" />
            <path className="light-line line-olive" d="M640 238 C855 130 1025 185 1155 280 S1390 400 1535 275" />
            <path className="light-line line-rust" d="M665 690 C865 575 1020 610 1160 710 S1380 825 1520 680" />
            <path className="light-line line-olive" d="M675 725 C875 610 1035 645 1175 745 S1390 860 1530 715" />
          </svg>
          <div className="hero-particles" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="hero-content">
            <div className="availability"><span /> Available for new opportunities</div>
            <p className="hero-intro">Hello, I’m</p>
            <h1 aria-label="Yassine Khlif">Yassine<br /><span>Khlif.</span></h1>
            <div className="role-line"><span>Software Engineer</span><i />AI & Full-Stack Engineer</div>
            <p className="hero-copy">Engineering student, top of class, turning ambitious AI ideas into genuinely useful full-stack software.</p>
            <div className="hero-actions">
              <Button onClick={() => scrollTo("projects")}>View projects <ArrowDown size={17} /></Button>
              <Button asChild variant="outline"><a href={cvUrl} download="Yassine-Khlif-CV.pdf">Download CV <Download size={17} /></a></Button>
            </div>
          </div>
          <div className="hero-aside">
            <div className="code-window" aria-label="Developer profile summary">
              <div className="window-bar"><span /><span /><span /><small>profile.ts</small></div>
              <pre><code><b>const</b> engineer = {`{`}<br />  location: <em>"Sfax, Tunisia"</em>,<br />  focus: [<em>"AI"</em>, <em>"Full-Stack"</em>],<br />  mindset: <em>"build useful things"</em>,<br />  currentlyLearning: <b>true</b><br />{`}`};</code></pre>
            </div>
            <p className="hero-note"><span>YK / 26</span> Computer Engineering · IIT Sfax</p>
            <div className="social-rail">
              <a href="https://github.com/yassinekh08" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
              <a href="https://www.linkedin.com/in/yassine-khlif" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href="mailto:yassinkhlif08@gmail.com" aria-label="Email"><Mail size={19} /></a>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => scrollTo("about")} aria-label="Scroll to about"><span>Scroll</span><ArrowDown size={16} /></button>
        </section>

        <Marquee />

        <section id="about" className="section about-section">
          <SectionHeading number="01" eyebrow="About" title="Engineering with purpose." />
          <div className="about-layout">
            <div className="about-copy reveal">
              <p className="large-copy">I bridge robust software engineering and applied AI to create products that solve real problems—not demos that live in notebooks.</p>
              <p>I’m completing a Computer Engineering degree at the International Institute of Technology of Sfax, after a technology preparatory cycle at IPEIS. As the top student in my graduating class, I bring curiosity, rigor, and a product mindset to every build.</p>
              <div className="location-line"><MapPin size={17} /> Sfax, Tunisia</div>
            </div>
            <div className="education-stack reveal">
              <article className="education-item"><span>2023—2026</span><GraduationCap /><div><h3>Computer Engineering</h3><p>International Institute of Technology, Sfax</p></div></article>
              <article className="education-item"><span>2020—2023</span><GraduationCap /><div><h3>Technology Preparatory Cycle</h3><p>IPEIS, Sfax</p></div></article>
              <div className="language-list"><Languages size={19} /><strong>Languages</strong><span>Arabic · Native</span><span>French · Fluent</span><span>English · Fluent</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section band-section">
          <SectionHeading number="02" eyebrow="Toolkit" title="Built to ship end-to-end." copy="A versatile stack for turning a concept into secure, intelligent, production-ready software." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => <article className="skill-card reveal" style={{ "--delay": `${index * 80}ms` } as React.CSSProperties} key={group.title}><div className="skill-card-head"><group.icon size={22} /><span>0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="skill-meter"><i /></div></article>)}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionHeading number="03" eyebrow="Experience" title="Work that moved ideas forward." />
          <div className="timeline">
            {experience.map((item, index) => <article className="timeline-item reveal" key={item.company}><div className="timeline-marker"><span>0{index + 1}</span></div><div className="timeline-meta"><p>{item.date}</p><small>Sfax, Tunisia</small></div><div className="timeline-content"><div className="company-row"><h3>{item.company}</h3><span>{item.role}</span></div><p>{item.summary}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="tech-tags">{item.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div></article>)}
          </div>
        </section>

        <section id="projects" className="section band-section">
          <SectionHeading number="04" eyebrow="Selected work" title="Projects with intelligence built in." copy="A selection of AI systems, secure web applications, and full-stack product builds." />
          <div className="projects-stack">
            {projects.map((project, index) => <article className={`project-card reveal ${index === 0 ? "featured" : ""}`} style={{ "--delay": `${index * 75}ms`, "--stack-index": index } as React.CSSProperties} key={project.title}>
              <div className="project-copy">
                <div className="project-top"><span>{project.number} / 06</span><Github size={20} /></div>
                <h3>{project.title}</h3><p>{project.description}</p><div className="tech-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                {project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={17} /></a> : <span className="project-link muted-link">Private project</span>}
              </div>
              <div className={`project-art project-art-${index + 1}`} aria-hidden={index > 1}>
                {index === 0 ? <PfeCataloguePreview /> : index === 1 ? <CaptioningPreview /> : <><div className="art-window"><div className="art-toolbar"><i /><i /><i /><span>{["commerce / assistant", "vision / captioning", "security / survey", "web / presentation", "data / cocktails", "commerce / .net"][index]}</span></div>
                  <div className="art-screen"><div className="art-orbit"><b /><b /><b /><b /></div><div className="art-panel"><i /><i /><i /><i /></div><div className="art-signal"><span /><span /><span /><span /><span /><span /><span /></div><div className="art-note"><small>BUILD / {project.number}</small><strong>{["Grounded answers", "Image to language", "Secure by design", "Built with Laravel", "Typed end to end", "Domain driven"][index]}</strong></div></div>
                </div><span className="art-caption">A closer look <ArrowUpRight size={14} /></span></>}
              </div>
            </article>)}
          </div>
          <div className="pfe-catalogue reveal">
            <div className="pfe-catalogue-heading">
              <div><span className="pfe-kicker">PFE / 2026 · CASE STUDY</span><h3>Maison Commerce OS</h3><p>An AI-assisted fashion commerce platform, from the shopping experience to the systems that run the store.</p></div>
              <div className="pfe-stack"><span>React</span><span>Spring Boot</span><span>FastAPI</span><span>MySQL</span><span>LangChain</span></div>
            </div>
            <div className="pfe-story-grid">
              <article><span>01 / SHOP</span><h4>A real fashion storefront</h4><p>Customers browse a curated catalog, inspect product details, and ask for outfit help without leaving the shopping flow.</p></article>
              <article><span>02 / ASSIST</span><h4>Advice grounded in the catalog</h4><p>The AI stylist combines product context with indexed store knowledge, using Corrective RAG to keep answers relevant and verifiable.</p></article>
              <article><span>03 / OPERATE</span><h4>One connected admin workspace</h4><p>Teams manage products, orders, stock, documents, conversations, and analytics from a commerce operations console.</p></article>
            </div>
            <div className="pfe-gallery-heading"><div><span className="pfe-kicker">PRODUCT TOUR</span><h4>Inside the platform</h4></div><span>08 SCREENS / CUSTOMER + ADMIN</span></div>
            <div className="pfe-gallery">
              {pfeScreens.map((screen, index) => <figure className="pfe-screen-card" key={screen.image}>
                <div className={`pfe-screen-image pfe-screen-image-${index + 1}`}><div className="pfe-screen-placeholder"><span>MAISON / {String(index + 1).padStart(2, "0")}</span><strong>{screen.title}</strong></div><img src={screen.image} alt={`${screen.title} screen`} loading="lazy" onError={(event) => event.currentTarget.classList.add("is-missing")} /></div>
                <figcaption><span>{screen.area}</span><strong>{screen.title}</strong><p>{screen.note}</p></figcaption>
              </figure>)}
            </div>
          </div>
          <div id="captioning-demo" className="captioning-case-study reveal">
            <div className="captioning-case-heading"><span className="pfe-kicker">COMPUTER VISION / PROJECT 02</span><h3>From pixels to a useful description.</h3><p>An image captioning pipeline that combines visual recognition with retrieval context to produce concise, more relevant descriptions.</p></div>
            <div className="captioning-case-layout">
              <div className="captioning-player"><video src={captioningDemoVideo} controls preload="metadata" playsInline aria-label="Image captioning system demonstration" /><div className="captioning-video-label"><span>LIVE DEMO</span><span>SCREEN RECORDING · 2026</span></div></div>
              <div className="captioning-method">
                <span className="pfe-kicker">HOW IT WORKS</span>
                <article><b>01</b><div><strong>Read the image</strong><p>PyTorch vision models identify the main visual content.</p></div></article>
                <article><b>02</b><div><strong>Retrieve context</strong><p>FAISS search supplies relevant rules and supporting information.</p></div></article>
                <article><b>03</b><div><strong>Write the caption</strong><p>BLIP and the retrieval step shape a concise, context-aware description.</p></div></article>
                <div className="captioning-tech"><span>Python</span><span>PyTorch</span><span>BLIP</span><span>FAISS</span><span>RAG</span></div>
              </div>
            </div>
          </div>
          <p className="skiper-credit">Motion studies inspired by <a href="https://skiper-ui.com/components" target="_blank" rel="noreferrer">Skiper UI</a>.</p>
        </section>

        <section id="certifications" className="section">
          <SectionHeading number="05" eyebrow="Certifications" title="Always learning. Always applying." />
          <div className="cert-grid">
            {certifications.map((cert, index) => <article className="cert-card reveal" key={cert.title}>
              <div className="cert-card-heading"><div><span>{cert.issuer}</span><h3>{cert.title}</h3><p>Issued {cert.date}</p></div><small>{String(index + 1).padStart(2, "0")}</small></div>
              <div className="cert-document"><iframe src={`${cert.file}#toolbar=0&navpanes=0&view=FitH`} title={`${cert.title} certificate`} loading="lazy" /></div>
              <a className="cert-open" href={cert.file} target="_blank" rel="noreferrer">Open full certificate <ExternalLink size={15} /></a>
            </article>)}
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <SectionHeading number="06" eyebrow="Résumé" title="The story, at a glance." />
          <div className="resume-layout">
            <div className="resume-preview reveal"><a className="resume-paper" href={cvUrl} target="_blank" rel="noreferrer" aria-label="Open Yassine Khlif résumé PDF"><img className="resume-page-image" src="/resume-preview.webp" alt="Preview of Yassine Khlif’s résumé" loading="lazy" /></a></div>
            <div className="resume-summary reveal">
              <div className="summary-stat"><strong>3</strong><span>Industry internships</span></div><div className="summary-stat"><strong>2026</strong><span>Computer Engineering graduate</span></div><div className="summary-stat"><strong>#1</strong><span>Graduating class rank</span></div>
              <div className="resume-line"><span /><div><small>Focus</small><p>AI systems, RAG, intelligent commerce, and secure full-stack delivery.</p></div></div>
              <div className="resume-line"><span /><div><small>Core stack</small><p>React, Spring Boot, Python, .NET, SQL, Docker, LangChain, FAISS.</p></div></div>
              <Button asChild><a href={cvUrl} download="Yassine-Khlif-CV.pdf">Download CV (PDF) <Download size={17} /></a></Button>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionHeading number="07" eyebrow="Contact" title="Let’s build something useful." copy="Have a role, a product idea, or an AI challenge? I’d like to hear about it." />
          <div className="contact-layout">
            <div className="contact-details reveal">
              <a href="mailto:yassinkhlif08@gmail.com"><Mail size={19} /><span><small>Email</small>yassinkhlif08@gmail.com</span></a>
              <a href="tel:+21692951113"><Phone size={19} /><span><small>Phone</small>+216 92 951 113</span></a>
              <a href="https://www.linkedin.com/in/yassine-khlif" target="_blank" rel="noreferrer"><Linkedin size={19} /><span><small>LinkedIn</small>yassine-khlif</span></a>
              <a href="https://github.com/yassinekh08" target="_blank" rel="noreferrer"><Github size={19} /><span><small>GitHub</small>yassinekh08</span></a>
            </div>
            <form className="contact-form reveal" onSubmit={submitContact}>
              <div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" required type="email" placeholder="you@company.com" /></label></div>
              <label>Message<textarea name="message" required rows={5} placeholder="Tell me about your project or opportunity…" /></label>
              <Button type="submit">Send message <Send size={17} /></Button>
            </form>
          </div>
        </section>
      </main>

      <footer><a className="brand" href="#home">YK<span>.</span></a><p>Designed and engineered by Yassine Khlif · 2026</p><Button variant="icon" onClick={() => scrollTo("home")} aria-label="Back to top"><ArrowUpRight size={18} /></Button></footer>
    </div>
  );
}
