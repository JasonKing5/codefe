# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **CodeFE Portal** - a modern React single-page application built with Vite. It serves as:
- A personal/professional portfolio website
- A tool platform featuring a "Wealth Migration" smart finance tool
- A multi-language (i18n) application with English and Chinese support
- A theme-enabled application (dark/light mode)

## Technology Stack

- **Framework**: React 19.2.0 with JSX
- **Build Tool**: Vite 7.2.4 with React plugin
- **Routing**: React Router DOM 7.11.0
- **Styling**: Tailwind CSS 4.1.18 with `@tailwindcss/vite` plugin
- **UI Components**: Shadcn/ui component library (configured via `components.json`)
- **Icons**: Lucide React and React Icons
- **Animations**: Framer Motion
- **Internationalization**: i18next and react-i18next
- **Package Manager**: PNPM (evident from `pnpm-lock.yaml`)

## Development Commands

From `package.json`:
- `pnpm dev` / `npm run dev` - Start Vite development server with HMR
- `pnpm build` / `npm run build` - Production build (outputs to `dist/`)
- `pnpm lint` / `npm run lint` - Run ESLint on all files
- `pnpm preview` / `npm run preview` - Preview production build locally

**Note**: This project uses PNPM as the package manager. Use `pnpm` commands for dependency management.

## Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ui/              # Shadcn/ui styled components (Button, Card, Badge, etc.)
│   ├── layout/          # Layout components (Navbar, Footer, Theme/Language toggles)
│   └── sections/        # Page section components (Hero, Features, Projects)
├── pages/               # Page-level components and routes
│   ├── wealth/          # Wealth migration feature (smart finance tool)
│   ├── PrivacyPolicy.jsx
│   └── TermsOfService.jsx
├── data/                # Static data files (projects.js)
├── lib/                 # Utility functions (utils.js)
├── locales/             # Internationalization files (en/, zh/ directories)
└── assets/              # Static assets
```

## Key Architectural Patterns

### 1. Component Organization
- **UI Components**: Located in `src/components/ui/` - Shadcn/ui styled components
- **Layout Components**: `src/components/layout/` - Navigation and structural components
- **Section Components**: `src/components/sections/` - Main page content sections
- **Page Components**: `src/pages/` - Route-level components

### 2. Routing Structure
- Main routes defined in `src/App.jsx`
- Home page (`/`) displays Hero, Features, and Projects sections
- Tool routes (`/tool/*`) handled by `ToolContainer` component
- Static pages: `/privacy-policy`, `/terms-of-service`

### 3. Wealth Migration Feature
Located in `src/pages/wealth/`:
- Transaction management (income/expense tracking)
- Category management with local storage persistence
- Filtering by time range and category
- Fullscreen mode and settings
- Uses hash-based routing within the tool container

### 4. Theme System
- Theme context managed by `ThemeProvider` in `src/components/theme-provider.jsx`
- Uses `useTheme` custom hook for theme switching
- Supports dark/light mode with system preference detection
- Theme preference stored in localStorage with key `vite-ui-theme`

### 5. Internationalization
- i18n configured in `src/i18n.js`
- Locale files in `src/locales/en/` and `src/locales/zh/`
- VS Code i18n-ally extension configured in `.vscode/settings.json`

## Configuration Files

- `vite.config.js` - Vite configuration with React plugin, Tailwind CSS, and path alias `@` for `./src`
- `jsconfig.json` - JavaScript configuration with path alias `@/*` → `./src/*`
- `components.json` - Shadcn/ui component configuration
- `eslint.config.js` - ESLint configuration for React projects
- `.vscode/settings.json` - VS Code settings for i18n-ally extension

## Path Aliases

- `@` → `./src` (configured in both `vite.config.js` and `jsconfig.json`)
- Use `@/components/...` for importing components
- Use `@/lib/...` for utility imports
- Use `@/pages/...` for page imports

## Development Notes

1. **Analytics**: Umami analytics script included in `index.html`
2. **Recent Features**: Wealth migration tool added in recent commits
3. **Component Styling**: Uses Tailwind CSS utility classes with Shadcn/ui component variants
4. **State Management**: Uses React hooks and context API (no external state library)
5. **Data Persistence**: Local storage used for theme preference and wealth tool data
6. **Build Output**: Production builds go to `dist/` directory

## Common Development Tasks

- **Adding new components**: Place in appropriate `src/components/` subdirectory
- **Adding new pages**: Create in `src/pages/` and add route in `src/App.jsx`
- **Adding translations**: Update locale files in `src/locales/`
- **Styling components**: Use Tailwind CSS classes; for Shadcn/ui components, follow patterns in `src/components/ui/`
- **Adding new tools**: Follow pattern in `src/pages/wealth/` and integrate via `ToolContainer`