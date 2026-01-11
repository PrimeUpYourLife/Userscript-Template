# Userscript Template

A complete GitHub template repository for building, maintaining, and deploying userscripts using Railway, GitHub Actions, and minified production output.

Repository URL:
`https://github.com/PrimeUpYourLife/Userscript-Template`

---

# 🚀 Features

- GitHub **Template Repository** structure
- Production-ready **minified userscript output**
- Strict **version bump enforcement**
- Automatic **Railway deployment**
- `project.json` Railway manifest included
- Clear agent guidelines in `AGENTS.md`

---

# 📁 Repo Structure

```
Userscript-Template/
│
├── src/
│   └── myscript.user.js        # Main userscript source (unminified)
│
├── dist/
│   └── myscript.user.min.js    # Auto-built production version
│
├── AGENTS.md                   # Contributor/agent rules
├── README.md                   # Full usage guide
│
├── project.json                # Railway deployment manifest
└── .github/
    └── workflows/
        └── deploy.yml          # Lint → Build → Minify → Deploy
```

---

# 🛠 Getting Started

## 1. Click “Use this template”
Go to:

**https://github.com/PrimeUpYourLife/Userscript-Template**

Click **Use this template → Create new repository**.

Clone your new repo locally or edit directly in GitHub.

---

# ✏️ 2. Configure the Userscript

Open:

```
src/myscript.user.js
```

Update these required metadata tags:

```js
// @updateURL    https://<your-railway-url>/myscript.user.min.js
// @downloadURL  https://<your-railway-url>/myscript.user.min.js
```

These URLs ensure Tampermonkey auto-updates your script.

---

# 🧪 3. Local Development (Optional)

Install dependencies:

```
npm install
```

To build & minify locally:

```
npm run build
```

This runs:

- `src/myscript.user.js` → **Terser** → `dist/myscript.user.min.js`

---

# 🚀 4. Deploy to Railway

You may deploy using **one of two methods**:

---

## OPTION A — Railway Dashboard (easiest)

1. Go to https://railway.app
2. Create → **New Project → Deploy from GitHub Repo**
3. Select your repository
4. Railway gives you a **public URL**

Your production script URL will be:

```
https://<railway-app>.up.railway.app/myscript.user.min.js
```

Update your userscript metadata accordingly.

---

## OPTION B — Railway CLI

```
npm i -g @railway/cli
railway login
railway up --service userscript
```

---

# 🔄 5. Updating the Userscript

Whenever you want to release an update:

1. Edit `src/myscript.user.js`
2. **Manually bump `@version`**
3. Commit and push

The GitHub Action will automatically:

- Lint check
- Minify the script into `/dist`
- Validate version bump
- Deploy to Railway

Users automatically update through Tampermonkey.

---

# 📌 Important Rules (Full details in AGENTS.md)

- Contributors **must** bump version on every logic change
- Never edit files in `/dist` manually
- Push only to `main` (workflow runs there)
- Update URLs must point to the **minified** script

---

# 🎉 You’re ready!

This template now gives you a complete, automated userscript CI/CD pipeline.
