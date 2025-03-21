# Project Rules

- The 'global' document (docs/rules-global.md) covers general AI methodologies across all projects.
- The 'project' document (docs/rules-project.md) covers precise AI methodologies specific to this project.
- All other documents (with the 'docs' folder) covers specific AI practices and standards across key areas.

## Project Details

- **Project Name**: Next.js Starter Template
- **Current Version**: [Current version number]
- **Description**: [Brief project description]
- **Git Repository**: [Repository URL]
- **Project Manager**: [Your name/contact]
- **Target Audience**: [Primary users]
- **Project Timeline**: [Key milestones/deadlines]
- **Tech Stack**: [Primary technologies used]

## Component Organization

- follow best standards and practices for Next.js projects
- Maintain consistent directory structure patterns

## UI/UX Standards

- Follow Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
- Ensure responsive design for mobile, tablet, and desktop views
- Follow styling guidelines from `styles.md`
- Always develop using Shadcn UI, Origin UI or related UI
- Always use OKLCH colors

## Accessibility Standards

All components must adhere to these core accessibility requirements:

- **Semantic HTML**: Use appropriate HTML elements for their intended purpose
- **Keyboard Navigation**: All interactive elements must be keyboard accessible
- **Screen Reader Support**: Provide appropriate ARIA labels where needed
- **Color Contrast**: Meet WCAG AA requirements (4.5:1 for normal text, 3:1 for large text)
- **Form Inputs**: All form elements must have associated labels
- **Focus Management**: Maintain visible focus indicators and logical tab order
- **Alternative Text**: Provide alt text for all informative images
- **Error Feedback**: Make errors perceivable and understandable to all users

**REMINDER**: Flag potential accessibility issues for review

## Performance Budgets

The application must adhere to these performance targets:

- **Initial Load**:

  - First Contentful Paint (FCP): < 1.8s
  - Largest Contentful Paint (LCP): < 2.5s
  - Time to Interactive (TTI): < 3.5s

- **Runtime Performance**:

  - First Input Delay (FID): < 100ms
  - Cumulative Layout Shift (CLS): < 0.1

- **Size Budgets**:
  - Initial JS bundle: < 200KB (minified and gzipped)
  - Total initial payload: < 500KB
  - Image optimization: All images must be properly sized and compressed

**REMINDER**: Flag performance issues and suggest optimizations when detected.

## Dependency Management Guidelines

When evaluating or updating third-party dependencies:

- **Evaluation Criteria**:

  - Package size and impact on bundle
  - Maintenance activity (recent commits, open issues)
  - Security vulnerabilities
  - Documentation quality
  - Community adoption and support
  - License compatibility

- **Update Protocol**:
  - Schedule regular dependency reviews every 2 months
  - Prioritize security updates immediately
  - Test thoroughly in development environment before updating production
  - Document breaking changes and required code adjustments
  - Run full test suite after updates

**REMINDER**: Flag deprecated dependencies for replacement consideration.
