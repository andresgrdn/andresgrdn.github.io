<!--Greetings-->

<h1 align="center">
  Hi, I'm Andres Gordon
  <!--sleeping cat-->
  <img src="https://media.giphy.com/media/b2cphlu7GqmYM/giphy.gif" width="24">
  
  <!--paw greetting
  <img src="https://media.giphy.com/media/3UPNs8vXyJESQ/giphy.gif" width="50">
  -->
  <!--paw chat
  <img src="https://media.giphy.com/media/bJXVsDJI1q2tORd3RB/giphy.gif" width="50">
  -->
  <!--two paw greetting
  <img src="https://media.giphy.com/media/UdxJwrriQpQ2Y/giphy.gif" width="50">
  -->
</h1>

<!--Greetings-->



<!--About me-->

## About me

<img height="20" src="https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-30.gif"> Frontend Web developer  <br>
<img height="20" src="https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-30.gif"> Making some projects using Javascript ✨<br>
<img height="20" src="https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-30.gif"> Some projects finished [😉✨ Here](https://andresgrdn.github.io) <br>
<!--
<img height="20" src="https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-30.gif"> I write articles on Python, C++, UI/UX Design and Web Development to make your learning journey easier :)<br>
<img height="20" src="https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-30.gif"> I believe in learning by building and being consistent in what I do. <br>
<img height="20" src="https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-30.gif"> I actually like C++ but not as much as I like python though😉<br>
<img height="20" src="https://acegif.com/wp-content/uploads/2020/b72nv6/partyparrt-30.gif"> When I'm not coding, I am probably exploring new concepts, or thinking about my next project. 
-->

<!--About me-->



<!--Connect with me-->

<h2>
  <!--high five-->
  <img src="https://media.giphy.com/media/NQDcH2ZZaPV8QBDYK3/giphy.gif" width="24">
  Connect with me 
</h2>
  
[<img alt="Twitter" src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white&label=@andresgrdn" />](https://twitter.com/andresgrdn)

<!--
[<img alt="Hashnode" src="https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" />](https://thecodingcompany.hashnode.dev/)
[<img alt="DEV.to" src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white" />]
(https://dev.to/iayeshasahar)
-->

---

## This website

Built with [Astro](https://astro.build) and published to GitHub Pages.

| | |
| --- | --- |
| Framework | Astro (static output, zero client-side JavaScript) |
| Package manager | [pnpm](https://pnpm.io) |
| Styles | Plain CSS with native nesting + scoped component styles |
| Fonts | Self-hosted [Fontsource](https://fontsource.org) (DM Sans, Inter) |
| Deploy | GitHub Actions → GitHub Pages |

### Project structure

```
src/
├── assets/images/     # project screenshots (optimized to webp at build time)
├── components/        # SiteHeader, SocialLinks, ProjectCard, ProjectGrid
├── content/projects/  # one markdown file per project
├── layouts/           # BaseLayout (head, meta, fonts, global styles)
├── pages/             # index.astro, 404.astro
└── styles/            # global.css (design tokens + reset)
```

### Local development

```bash
pnpm install        # install dependencies
pnpm dev            # dev server on http://localhost:4321
pnpm build          # static build into dist/
pnpm preview        # serve the production build
pnpm check          # astro check (types + content collection schema)
```

### Adding a project

Create a markdown file in `src/content/projects/` — the card is rendered automatically:

```md
---
title: My project
description: What the project does.
tags:
  - HTML5
  - CSS3
image: '../../assets/images/my-project.jpg'
repoUrl: https://github.com/andresgrdn/my-project
liveUrl: https://andresgrdn.github.io/my-project/
order: 2
---
```

### Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site
and publishes it to <https://andresgrdn.github.io>.
