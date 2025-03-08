// lint-staged.config.mjs
export default {
  // Re-enable ESLint check with the new flat config format
  "**/*.{js,jsx,ts,tsx}": ["eslint --fix"],
  
  // Format all supported files with Prettier
  "**/*.{js,jsx,ts,tsx,json,md,mdx,css}": ["prettier --write"]
};
