# Yassine Khlif Portfolio

Create a modern, animated personal portfolio website for a software/AI engineer. Single-page app with smooth scroll and smooth section transitions (fade/slide on scroll, subtle parallax on hero). Dark theme by default with a light/dark toggle. Clean, professional, slightly tech/AI-flavored aesthetic (think: subtle gradient accents, glassmorphism cards, animated background grid or particles behind the hero — keep it tasteful, not busy). Fully responsive (mobile, tablet, desktop).

PERSON:
Name: Yassine Khlif
Title: Software Engineer | AI & Full-Stack Engineer
Location: Sfax, Tunisia
Tagline: Engineering student (top of class) passionate about turning AI into genuinely useful full-stack software.
Contact: yassinkhlif08@gmail.com | +216 92 951 113 | LinkedIn: yassine-khlif | GitHub: yassinekh08

SECTIONS (in this order):

1. HERO
- Name, title, short tagline
- Animated intro (typewriter or fade-in effect on the title/role)
- CTA buttons: "View Projects" (scrolls to projects) and "Download CV" (download button, link to a PDF placeholder /cv.pdf)
- Social icons: GitHub, LinkedIn, Email

2. ABOUT
- Short professional bio (engineering student at Institut International de Technologie de Sfax, Génie Informatique 2023–2026, previously Classes Préparatoires at IPEIS Sfax 2020–2023)
- Languages spoken: Arabic (native), French (fluent), English (fluent) — show as small badges or a simple bar/tag list

3. SKILLS (animated, grouped in cards or tabs)
- Languages: Java, JavaScript, Python, C, PHP
- Frameworks/Libraries: Spring Boot, React.js, .NET, Angular, Flutter, Laravel, PyTorch
- Databases: MySQL, Oracle, PostgreSQL, SQL Server
- Tools & DevOps: Git, GitHub, GitLab, Docker, Kubernetes, LangChain, FAISS
- Use animated skill icons or progress bars that animate into view on scroll

4. EXPERIENCE (vertical animated timeline)
- Sunevit — AI Full-Stack Engineering Intern (Feb 2026 – Jun 2026), Sfax
  Built an intelligent e-commerce platform for a clothing store: product catalog, customer interface, admin dashboard. Implemented backend business logic with Spring Boot (user/product/stock management, order processing, secure REST APIs). Built an AI chatbot using product data and user context. Integrated Corrective RAG (CRAG) with a vector database for accurate contextual answers. Built a recommendation engine based on user preferences and catalog similarity.
  Tech: React.js, Spring Boot, Python, FastAPI, LangChain, MySQL, Docker, Git

- Acteol — Web Development Intern (Jun 2025 – Sep 2025), Sfax
  Integrated OAuth2 authentication to strengthen security and access control. Built and consumed REST APIs for survey retrieval/submission. Implemented validation, conditional UI display, session tracking, and error handling.
  Tech: .NET Core, React.js, JavaScript, OAuth2, SQL Server, REST API, Git

- ExaDev — Web Development Intern (Jun 2024 – Aug 2024), Sfax
  Designed a database and built dynamic pages with Blade for a company showcase website, following Laravel MVC best practices.
  Tech: PHP, Laravel, MySQL, Blade, Git

5. PROJECTS (animated grid of cards, hover effects, link out to GitHub)
Pull repo info dynamically-style (static content is fine) for these GitHub repos under github.com/yassinekh08:
- PFE — AI-Powered E-Commerce Assistant: final-year project, the Sunevit AI e-commerce platform (chatbot, CRAG, recommendations). Link: https://github.com/yassinekh08/PFE
- Intelligent Image Captioning System: image pipeline combining photo/non-photo classification with automatic caption generation using a Vision-Language Model (BLIP) plus RAG rules for short, factual, contextual captions. Tech: Python, PyTorch, Transformers, BLIP, scikit-learn, FAISS, NumPy, Pandas. (no public link needed, describe as a project)
- Web-Development-and-Secure-Service-Integration: OAuth2-secured web app with REST APIs, .NET Core + React. Link: https://github.com/yassinekh08/Web-Development-and-Secure-Service-Integration
- Developpement-dun-site-web-de-presentation-dentreprise: company showcase website built with Laravel/Blade. Link: https://github.com/yassinekh08/Developpement-dun-site-web-de-presentation-dentreprise
- Cocktail-Project: TypeScript project. Link: https://github.com/yassinekh08/Cocktail-Project
- E-Commerce_net: C#/.NET e-commerce project. Link: https://github.com/yassinekh08/E-Commerce_net
Each project card: title, short description, tech stack tags, "View on GitHub" button (opens in new tab).

6. CERTIFICATIONS (animated badge list or small cards)
- 365 Data Science — Deep Learning with PyTorch (Nov 17, 2025)
- 365 Data Science — Data Cleaning and Preprocessing with Pandas (Nov 16, 2025)
- IBM — Advanced RAG with Vector Databases (Aug 27, 2025)
- IBM — Generative AI: Introduction and Applications (Aug 27, 2025)
Also link to the GitHub repo "professional-certifications" (https://github.com/yassinekh08/professional-certifications) as "View all certifications"

7. RESUME / CV SECTION
- A dedicated section presenting the CV in a clean visual summary format (not just a link): short recap of education, key skills, and experience as an at-a-glance timeline or infographic style
- Prominent "Download CV (PDF)" button
- Optional: embedded PDF viewer or preview thumbnail of the CV

8. CONTACT
- Simple contact form (name, email, message) with animated focus states
- Direct contact info repeated (email, phone, LinkedIn, GitHub)
- Animated footer

TECHNICAL REQUIREMENTS:
- Smooth scroll-triggered animations (use fade-up / stagger effects as sections enter viewport)
- Sticky/floating navbar with active-section highlighting and smooth scroll navigation
- Subtle micro-interactions on buttons and cards (hover lift, glow, scale)
- Loading animation on first load (short, tasteful, not intrusive)
- Fully responsive, mobile-first
- Accessible (proper contrast, alt text, keyboard navigation)
- Fast-loading, no heavy unnecessary assets

Use a modern color palette (e.g., deep navy/charcoal background with a single accent color like electric blue, teal, or violet). Typography should feel technical but clean (e.g., Inter, Space Grotesk, or similar for headings).

This project was built with [](https://.dev).

**Live app**: https://portfolio-yassine..app

## Build with 

Continue developing this project in the [ editor](https://.dev/projects/13492492-1170-4d43-bd35-01364ee8de5c).

- **Ship faster**: describe what you want to build and  handles the code.
- **Stay in sync**: every change made in  is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into , ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
