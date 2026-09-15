# Post-redesign setup

Three things need real values before this is ready to publish — everything
else works out of the box.

## 1. Install the new dependencies
```
npm install
```
This pulls in `motion` (animations), `lucide-react` (icons), and
`@emailjs/browser` (contact form), which weren't in the original `package.json`.

## 2. Wire up the contact form
The form in `src/pages/Contact/Contact.jsx` is fully functional but needs an
EmailJS account:
1. Sign up at https://emailjs.com and connect an email provider.
2. Create a template with `{{name}}`, `{{email}}`, `{{message}}` variables.
3. Copy `.env.example` to `.env` and fill in the three IDs.
`.env` is already git-ignored — don't commit it.

## 3. Add the missing real assets
- **Resume**: drop a PDF at `public/resume-abhijith-subash.pdf` (the Resume
  button on the hero links here and will 404 until it's added).
- **Project repo links**: `src/pages/Projects/Projects.jsx` has `codeLink: null`
  for every project — each card shows "Repo pending" instead of a dead link
  until you add the real GitHub URL.
- **Social links**: `src/components/SocialLinks/SocialLinks.jsx` has
  placeholder GitHub/LinkedIn/email URLs — swap in the real ones.

## What changed
See the redesign guide for the full rationale. Summary of the biggest shifts:
- Visual system: cyan/amber/dark "diagnostic terminal" palette replacing the
  purple/yellow scheme, JetBrains Mono for the code-comment eyebrows,
  Bebas Neue for display headings.
- All 10 tracked bugs fixed (dead EmailJS-free form, broken nav links,
  reversed project arrows, non-responsive contact card on mobile, etc. — see
  inline `// Bug #N fix` comments).
- Content rewritten around the embedded/automotive security narrative
  instead of the earlier full-stack-only framing.
- Motion pass: staggered entrances, animated nav underline, project card
  transitions, a car that actually drives along the progress track,
  `prefers-reduced-motion` respected globally.
- Skills regrouped by category with a reusable `SkillChip` component;
  qualifications now render as a timeline.
- Five project cards are placeholder diagram SVGs (`public/images/projects/`)
  until real screenshots/diagrams are ready to swap in.
