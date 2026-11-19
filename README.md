# Sirija Boinapally — Portfolio Redesign

A responsive, white + royal-blue creative developer portfolio built with HTML, CSS, JavaScript and Vite.

## 1. Requirements
- Node.js 18+ recommended
- npm

## 2. Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## 3. Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## 4. Deploy to Vercel
1. Create a new GitHub repository and upload this project.
2. Import that repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## 5. Add your resume
Copy your latest approved PDF to:
`public/assets/Sirija_Boinapally_Resume.pdf`

Create the `public/assets/` folder if it does not exist.

## 6. Add certificate scans
Copy certificate image files into:
`public/assets/certificates/`

The current certificate cards are listed in `src/data.js`.
For the image-backed entries, use these filenames:
- `great-appsec-2026.png`
- `idcss-2026.png`
- `hackwithhyderabad-2026.png`
- `devfest-hyderabad-2026.png`

Then update the relevant certificate object in `src/data.js` with an image link or add a View Certificate anchor. Do not publish private certificate verification QR codes if you do not want them public.

## 7. Update projects
Edit `src/data.js`. Every project supports:
- `title`
- `category` (`ai`, `web`, or `systems`)
- `description`
- `stack`
- `github`
- `demo`
- `visual`

Only list repositories and demo links that belong to you and are working. For projects without a dedicated repository, use your GitHub profile only if you are comfortable directing visitors to the general profile.

## Accuracy notes
- The project descriptions reflect the public portfolio, GitHub repository descriptions/READMEs, and details previously supplied by Sirija.
- The Voice Agent is described as an exploration because its public GitHub repository is a fork of a starter project. Update the description if you have made substantial original changes.
- Team Topic Challenge Portal is not shown as a completed project because earlier project notes described unfinished stages.
- The portfolio does not claim that certificates are independently verified. Add original certificate images and verification URLs where appropriate.
- The resume button expects `public/assets/Sirija_Boinapally_Resume.pdf`.
