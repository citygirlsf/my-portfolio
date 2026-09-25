# Amera R. — Portfolio

A bold, dark-themed React portfolio site built for frontend & full stack developer job hunting.

## 🚀 Deploy to Vercel in 5 Minutes

### Step 1 — Push to GitHub

```bash
# In your terminal:
cd amera-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/citygirlsf/portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Select your `portfolio` repo
4. Leave all settings as default — Vercel auto-detects React
5. Click **"Deploy"**
6. Done! Your site is live at `https://your-project.vercel.app`

### Step 3 — Custom Domain (optional)

If you have a domain (like `amerardesigns.com`):
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain and follow DNS instructions

---

## 🛠 Run Locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`

---

## 📁 Project Structure

```
src/
  components/
    Nav.jsx        ← Fixed navigation with smooth scroll
    Hero.jsx       ← Full-screen hero with fade-in animation
    About.jsx      ← Bio + stat cards
    Skills.jsx     ← Skill pills with hover effects
    Projects.jsx   ← Project cards with live links
    Contact.jsx    ← Contact form (see below to wire up)
    Footer.jsx     ← Links footer
  App.jsx          ← Assembles all sections
  index.js         ← React entry point
  index.css        ← Global styles + CSS variables
```

---

## 📬 Wiring Up the Contact Form

The contact form is ready to go — you just need to connect it to a service.

**Easiest option — Formspree (free):**
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — copy your form endpoint URL
3. In `Contact.jsx`, replace the `handleSubmit` function with:

```js
const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) return;
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  setSent(true);
};
```

---

## ✏️ Updating Your Projects

Edit the `projects` array in `src/components/Projects.jsx`:

```js
const projects = [
  {
    num: '01',
    title: 'Your Project Name',
    desc: 'Short description of what it does.',
    tags: ['React', 'CSS3'],
    github: 'https://github.com/citygirlsf/your-repo',
    live: 'https://yoursite.com', // or null if no live link
  },
  // ...
];
```

---

Built with React · Hosted on Vercel · Fonts by Google Fonts (Syne + DM Sans)
