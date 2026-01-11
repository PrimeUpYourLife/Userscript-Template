# AGENTS: CONTRIBUTION RULES

This repository enforces predictable and safe deployment of userscripts.

## 🔢 Version Bumping Rules

ALWAYS bump the `@version` field in `src/myscript.user.js` before pushing changes.

Example:

```diff
- // @version      1.2.4
+ // @version      1.2.5
```

Rules:
- Patch → small fixes (1.2.x)
- Minor → feature additions (1.x.0)
- Major → breaking changes (x.0.0)

## ⛔ Do NOT:
- push without bumping version
- modify `/dist/` manually
- change deployment workflow without approval

## ✔ Workflow:
- You update `/src/myscript.user.js`
- GitHub Actions validates version bump
- Script is automatically minified
- Deployment to Railway occurs
- Users receive auto-updates
