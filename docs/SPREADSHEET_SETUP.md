# Spreadsheet Setup

This portfolio now reads content from a Google Sheets database through a Google Apps Script web app.

## 1. Create The Spreadsheet

Create a new Google Spreadsheet and add these sheets. The first row must be the column headers exactly as written.

### Settings

| key | value |
| --- | --- |
| site.brand | PORTFOLIO |
| site.copyright | All rights reserved |
| hero.name | Nasa Balthazar ST Padan |
| hero.title | Information and Data Administrator Officer |
| hero.tagline | Your hero paragraph |
| hero.avatar | https://example.com/photo.jpg |
| hero.welcomePrefix | Welcome - I'm |
| hero.primaryCtaLabel | Hire Me |
| hero.primaryCtaHref | #contact |
| hero.secondaryCtaLabel | View Portfolio |
| hero.secondaryCtaHref | #work |
| hero.identityLabel | - identity |
| hero.initials | NB |
| hero.scrollLabel | Scroll |
| about.eyebrow | About Me |
| about.photo | https://example.com/photo.jpg |
| about.photoAlt | Nasa Balthazar ST Padan |
| about.status | Available for work |
| about.headline | Not limited by experience, |
| about.highlight | Driven by the ability to learn and adapt. |
| about.bio | Your about paragraph |
| portfolio.eyebrow | Selected Work |
| portfolio.title | The Evidence |
| portfolio.highlight | Gallery. |
| portfolio.viewProjectLabel | View Project |
| skills.eyebrow | Expertise |
| skills.title | Skills & |
| skills.highlight | Capabilities. |
| skills.description | Your skills description |
| skills.categoryPrefix | Category |
| footer.eyebrow | Get in touch |
| footer.email | hello@example.com |

### NavItems

| label | href | order |
| --- | --- | --- |
| WORK | #work | 1 |
| ABOUT | #about | 2 |
| CONTACT | #contact | 3 |

### HeroStats

| value | label | order |
| --- | --- | --- |
| 5+ | Years Exp. | 1 |
| 40+ | Projects | 2 |
| 15+ | Clients | 3 |

### AboutStats

| value | label | order |
| --- | --- | --- |
| 3+ | Years of Working Experience | 1 |
| 2+ | Work Experience | 2 |

### AboutSkills

| name | order |
| --- | --- |
| React | 1 |
| TypeScript | 2 |

### PortfolioCategories

| label | order |
| --- | --- |
| All | 1 |
| Web App | 2 |
| Full Stack | 3 |
| Mobile | 4 |
| UI/UX | 5 |

### Projects

| id | title | description | category | image | year | url | order |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Project title | Project description | Web App | https://example.com/image.jpg | 2024-2026 | https://example.com | 1 |

Leave `url` blank if the project does not have a link yet.

### SkillCategories

| id | label | icon | order |
| --- | --- | --- | --- |
| frontend | Frontend | code | 1 |
| backend | Backend | server | 2 |
| tools | Tools & Infra | wrench | 3 |

Allowed icons are `code`, `server`, and `wrench`.

### Skills

| categoryId | name | level | order |
| --- | --- | --- | --- |
| frontend | React | 95 | 1 |
| backend | Node.js | 90 | 1 |
| tools | Git | 95 | 1 |

`categoryId` must match an `id` from `SkillCategories`.

### SocialLinks

| label | href | order |
| --- | --- | --- |
| GitHub | https://github.com/your-name | 1 |
| LinkedIn | https://linkedin.com/in/your-name | 2 |

## 2. Add Apps Script

1. In the spreadsheet, open `Extensions > Apps Script`.
2. Delete the starter code.
3. Paste the code from `apps-script/Code.gs`.
4. Save the Apps Script project.
5. Optional: run `setupPortfolioSheets` once to create all sheet tabs and headers automatically. Google will ask for permission.

## 3. Deploy The Backend

1. In Apps Script, click `Deploy > New deployment`.
2. Choose type `Web app`.
3. Set `Execute as` to `Me`.
4. Set `Who has access` to `Anyone`.
5. Click `Deploy`.
6. Copy the Web app URL.

## 4. Connect The Portfolio

Add the web app URL to `.env.local`:

```env
VITE_PORTFOLIO_API_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart the dev server after changing `.env.local`:

```bash
npm run dev
```

For Vercel, add the same `VITE_PORTFOLIO_API_URL` in `Project Settings > Environment Variables`, then redeploy.

## Notes

- The site keeps using local fallback content if `VITE_PORTFOLIO_API_URL` is empty or the Apps Script request fails.
- After editing Apps Script code, create a new deployment version or update the existing deployment.
- After editing spreadsheet rows, refresh the portfolio page. No redeploy is needed.
