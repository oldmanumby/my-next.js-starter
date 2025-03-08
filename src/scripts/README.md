# Src Scripts

This `/src/scripts` folder contains runtime scripts that are part of the Next.js application.

## Purpose

Scripts in this folder are typically:

- Imported directly into components or pages
- Providing client-side functionality
- Handling browser-specific operations
- Bundled with the application

## Usage

Import scripts in your components or pages:

```javascript
// Import a specific function
import { trackPageView } from '@/scripts/analytics';

// Or import the entire module
import * as tracking from '@/scripts/tracking';
```

These scripts are bundled with your application and available at runtime in the browser.
