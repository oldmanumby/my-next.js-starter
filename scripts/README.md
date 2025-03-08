# Root Scripts

This `/scripts` folder at the root level contains build-time, development, and DevOps automation scripts.

## Purpose

Scripts in this folder are typically:

- Run from the command line
- Executed during CI/CD pipelines
- Used for data migration or seeding
- Generating assets before build
- Not imported directly into application code

## Usage

To run scripts in this folder:

```bash
node scripts/script-name.js
```

Or add them to your package.json scripts:

```json
"scripts": {
  "seed-db": "node scripts/seed-db.js"
}
```
