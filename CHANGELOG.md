# Changelog

All notable changes to this project will be documented in this file.

**Changelog Standards:**

- The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

**Format Guidelines:**

- Entries are ordered chronologically from **newest to oldest**
- Each version entry begins with `## YYYY-MM-DD | [version]`
- Changes are grouped by type under subheadings:
  - `### Added` - New features, components, files, docs, etc.
  - `### Changed` - Modifications or updates to existing functionality or files
  - `### Fixed` - Bug fixes
  - `### Improved` - Enhancements
  - `### Deprecated` - Soon-to-be removed features
  - `### Removed` - Eliminated features
  - `### Security` - Vulnerability fixes
- Only include sections for change types that are present in a version

---

## 2025-03-11 | 0.1.0

### Added

- Added integrated ThemeSwitcher component to Navbar with light/dark/system theme support
- Added ThemeSwitcher component to toggle between light, dark, and system themes
- Added Shadcn UI button component to the ui directory
- Added sticky Navbar component with blur effect and logo
- Increased GitHub icon size in footer by 20%
- Added About page with rich content to demonstrate sticky navbar
- Added Motion-Primitives UI 'Animated Background Tabs' component
- Added Lucid-React icons
- Added Footer basic component and menu

### Fixed

- Fixed ESLint and Prettier formatting issues in About page and Navbar
- Resolved unescaped entities in text content
- Fixed build failures during deployment
- Resolved ESLint/Prettier formatting issues in the footer component
- Fixed TypeScript type errors in the animated-background component
- Excluded \_references folder from TypeScript compilation
- Added missing React import in animated-background component

## 2025-03-08 | 0.1.0

### Added

- Added 'auth' placeholder page

### Changed

- Enabled Tailwind CSS Dark Mode

### Removed

- Disabled Next.JS Dev Tools

## 2025-03-07 | 0.1.0

### Added

- Added placeholder files for .ENV, favicon, logo and scripts
- Added prettier and adjusted things to work with ESLint
- Added TypeScript ESLint Plugin and adjusted config files

## 2025-03-06 | 0.1.0

### INITIAL COMMIT

All necessary dependencies for developing with Next.js, Shadcn UI, and Tailwind CSS are installed, and the project follows modern best practices. The Next.js Starter Template is well-structured and includes:

**Main Framework & Tools:**

- Next.js 15.2.1 and React 19.0.0
- TypeScript is fully configured
- Tailwind CSS v4 for styling

**UI Component Libraries:**

- Shadcn UI components (configured with the "new-york" style as per components.json)
- All necessary Radix UI primitives that power Shadcn components
- Origin UI components in a separate directory
- Custom UI components

**Project Structure:**

- App Router structure with properly organized page routes
- Clean component organization in /components directory
- Standard Next.js setup with proper font optimization (using Geist Sans and Mono)

**Additional Features:**

- Form handling with React Hook Form and validation with Zod
- Theming support with next-themes
- Various UI utilities like date-fns, sonner for toasts, etc.
- Everything appears to be properly set up and ready to use

**Placeholder Pages:**

- Setup a placeholder template system.
- About page
- Dashboard page
- Legal page
- Media page
- Pricing page
- Profile page
- Support page

### Added

- Added Geist Sans and Mono fonts by Vercel
- Added CHANGELOG.md file (this document)
- Added Motion-Primitives to the tech stack
- Added ESList and Husky with pre-commit hooks

### Fixed

- Updated Typescript setup and reference
- Renamed tailwind.config from .js to .ts, and corrected references
