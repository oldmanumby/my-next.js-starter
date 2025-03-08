# References

This document consolidates links to external authoritative sources for documentation, standards, and best practices used in this project.

## Adding New References

When adding new references to this document:

1. Place the reference in the most appropriate category
2. Create new categories as needed
3. Include a brief description of what the resource provides
4. Follow the format: linked title on first line, description on second line

## Development Standards

### Code Style & Quality

[Airbnb JavaScript Style Guide](https://airbnb.io/javascript/)
Comprehensive JavaScript coding standards with ESLint configuration

[Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
Detailed JavaScript style guide from Google

[Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
Principles for writing readable, maintainable JavaScript code

[ESLint](https://eslint.org/docs/latest/use/getting-started)
Pluggable JavaScript linter to enforce code quality and style

[Prettier](https://prettier.io/docs/en/)
Code formatter that enforces consistent style

### Component Organization & Architecture

[React Patterns](https://reactpatterns.com/)
Common patterns for building React components

[React Component Composition](https://react.dev/learn/passing-props-to-a-component)
Official React guide on component composition and props

[React Component Naming Best Practices](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505)
Guidelines for naming React components using standard conventions

[Container/Presentational Pattern](https://www.patterns.dev/posts/presentational-container-pattern)
Separation of concerns for React components

[Custom React Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
Building reusable logic with custom hooks

[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
Comprehensive guide for using TypeScript with React

[React Component Templates](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)
Industry-standard templates for React components and project structure

### Commenting & Documentation

[JSDoc](https://jsdoc.app/)
The standard for JavaScript code documentation, with comprehensive tag reference

[TypeScript JSDoc Support](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
Official guide for JSDoc annotations in TypeScript

[Google JavaScript Style Guide - Comments](https://google.github.io/styleguide/jsguide.html#jsdoc)
Industry-standard JSDoc comment formatting guidelines from Google

### CSS & Styling

[CSS Methodology: BEM](http://getbem.com/introduction/)
Block Element Modifier methodology for maintainable CSS

[Tailwind CSS Documentation](https://tailwindcss.com/docs)
Official comprehensive documentation covering all aspects of Tailwind CSS

[Tailwind CSS Configuration](https://tailwindcss.com/docs/theme)
How to customize Tailwind's default theme including colors, spacing, and typography

[Tailwind CSS Best Practices](https://tailwindcss.com/docs/editor-setup)
Official guide for optimal Tailwind CSS usage

[Tailwind CSS Focus Ring Utilities](https://tailwindcss.com/docs/ring-width)
Documentation for accessibility-compliant focus states

[Tailwind with BEM](https://medium.com/@michelandre.degroot/how-to-use-tailwind-with-bem-in-css-fd3445fbe9c6)
Integrating BEM methodology with Tailwind's utility classes

[Web Accessibility (WCAG) Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
Accessibility standards for web content

### Version Control & Workflow

[Semantic Versioning](https://semver.org/)
The specification for version number formatting and incrementing

[Conventional Commits](https://www.conventionalcommits.org/)
Specification for adding human and machine-readable meaning to commit messages

[Keep a Changelog](https://keepachangelog.com/)
Format and principles for maintaining an accessible changelog

[GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
Comprehensive guide to the GitFlow branching model by Atlassian

[GitFlow Cheat Sheet](https://danielkummer.github.io/git-flow-cheatsheet/)
Quick reference for GitFlow commands and branch usage

[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
Simplified Git workflow focused on continuous delivery

[A Successful Git Branching Model](https://nvie.com/posts/a-successful-git-branching-model/)
Original GitFlow article by Vincent Driessen

**When you encounter npm issues in the future, try running:**

```
./scripts/fix-pnpm.sh
```

This script will clean up problematic files and reinstall everything correctly using pnpm.

### Testing

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
Testing utilities for React focused on user behavior

[Jest Documentation](https://jestjs.io/docs/getting-started)
JavaScript testing framework

[Playwright](https://playwright.dev/docs/intro)
End-to-end testing for modern web apps

### Environment & Configuration

[The Twelve-Factor App](https://12factor.net/)
Methodology for building software-as-a-service apps with focus on configuration

[dotenv](https://github.com/motdotla/dotenv)
Loading environment variables from .env files

### Feature Flags

[Feature Toggles (aka Feature Flags)](https://martinfowler.com/articles/feature-toggles.html)
Martin Fowler's comprehensive guide to feature flag patterns and practices

[LaunchDarkly Best Practices](https://docs.launchdarkly.com/guides/best-practices)
Industry standards for implementing feature flags

[Database-Driven Feature Flags](https://www.split.io/blog/database-feature-flags/)
Implementing feature flags with database storage

### Package Management

[PNPM Documentation](https://pnpm.io/)
Official documentation for the PNPM package manager

[PNPM Package Configuration](https://pnpm.io/package_json#packagemanager)
Configuring package.json for PNPM

### UI/UX Design

[Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
Design principles for creating intuitive, consistent interfaces

[Material Design Guidelines](https://m3.material.io/)
Google's design system for creating unified experiences

## Framework Documentation

### Core Technologies

[Next.js Documentation](https://nextjs.org/docs)
Official documentation for the Next.js framework

[React Documentation](https://react.dev/)
Official documentation for the React library

[TypeScript Documentation](https://www.typescriptlang.org/docs/)
Official documentation for TypeScript

[Tailwind CSS Documentation](https://tailwindcss.com/docs)
Official documentation for Tailwind CSS

### Backend & Infrastructure

[Supabase Documentation](https://supabase.com/docs)
Comprehensive guide to Supabase features and API

[Supabase Self-Hosting Documentation](https://supabase.com/docs/guides/hosting/overview)
Guide for self-hosting all Supabase services

[Coolify Documentation](https://coolify.io/docs)
Self-hosting platform documentation

[Docker Compose Documentation](https://docs.docker.com/compose/)
Tool for defining multi-container Docker applications

[PostgreSQL Documentation](https://www.postgresql.org/docs/)
Comprehensive PostgreSQL database documentation

### UI Components & Tools

[shadcn/ui Documentation](https://ui.shadcn.com/)
Documentation for the shadcn/ui component library

[Lucide Icons](https://lucide.dev/)
Documentation for Lucide icon library

[Framer Motion](https://www.framer.com/motion/)
Documentation for animation library

### Feature Flags

[Feature Toggles (Feature Flags)](https://martinfowler.com/articles/feature-toggles.html)
Martin Fowler's comprehensive guide to feature flags

[Feature Flags Best Practices](https://launchdarkly.com/blog/best-practices-feature-flagging/)
Strategies for effective feature flag implementation

## Database & Backend

[Supabase Documentation](https://supabase.com/docs)
Official documentation for Supabase

[PostgreSQL Documentation](https://www.postgresql.org/docs/)
Official documentation for PostgreSQL
