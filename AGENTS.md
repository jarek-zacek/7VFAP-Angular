# AGENTS.md

## Project snapshot
- This repo is a single Angular CLI app (`Angular2`) with a minimal starter scaffold, not a multi-feature codebase yet.
- Bootstrap flow is `src/main.ts` → `bootstrapApplication(App, appConfig)` → `src/app/app.config.ts` providers.
- Routing is enabled through `provideRouter(routes)`, but `src/app/app.routes.ts` currently exports an empty `Routes` array.
- The root component is `src/app/app.ts` (`App`), which currently exposes one local signal: `title = signal('Angular2')`.
- `src/app/app.html` is mostly the default Angular placeholder screen; do not treat it as domain-specific UI. The only persistent shell element is the final `<router-outlet />`.
- Static assets come from `public/` via `angular.json`; the only checked-in asset today is `public/favicon.ico`.

## Key files to inspect first
- `src/main.ts`: app entrypoint.
- `src/app/app.config.ts`: global providers (`provideBrowserGlobalErrorListeners`, router).
- `src/app/app.routes.ts`: add feature routes here; there are none yet.
- `src/app/app.ts`: root standalone component.
- `src/app/app.spec.ts`: current test expectations for the starter UI.
- `.github/copilot-instructions.md`: repo-specific Angular/TypeScript guidance agents should follow when generating code.

## Verified workflows
- Install deps: `npm install`
- Dev server: `npm start` (runs `ng serve` on the default Angular dev server)
- Production build: `npm run build` → verified output at `dist/Angular2`
- Rebuild on changes: `npm run watch`
- Unit tests: `npm test -- --watch=false` → verified; uses Angular's `@angular/build:unit-test` builder with Vitest globals from `tsconfig.spec.json`
- Do not assume e2e exists: `README.md` mentions `ng e2e`, but `angular.json` has no e2e target configured.

## Code conventions that matter here
- TypeScript is strict (`tsconfig.json`): `strict`, `noImplicitReturns`, `strictTemplates`, and strict DI are enabled.
- Formatting: 2-space indentation from `.editorconfig`; single quotes and `printWidth: 100` from `.prettierrc`.
- Follow `.github/copilot-instructions.md` for new Angular code: standalone components only, do not add `standalone: true`, prefer signals, `computed()`, `input()` / `output()`, `inject()`, native control flow (`@if`, `@for`, `@switch`), and `ChangeDetectionStrategy.OnPush`.
- Avoid patterns explicitly discouraged by repo guidance: `any`, `@HostBinding`, `@HostListener`, `ngClass`, and `ngStyle`.
- When using external templates/styles, keep paths relative to the component TypeScript file (the current root component uses `templateUrl: './app.html'`, `styleUrl: './app.css'`).

## Testing and editing notes
- Current tests create the root component with `TestBed.configureTestingModule({ imports: [App] })`; this reflects the standalone-component setup.
- `src/app/app.spec.ts` currently asserts the heading contains `Hello, Angular2`; update the spec if you intentionally change the starter title/header.
- `src/app/app.css` and `src/styles.css` are effectively empty, so most visible styling still lives inline inside the placeholder `app.html` template.
- If you add real routed features, move UI out of the starter template instead of layering more product code into the placeholder markup.

## Practical agent guidance
- Treat the current app as a clean Angular starting point: there are no services, no shared state layer, and no feature boundaries yet.
- For new features, prefer creating focused standalone components and wiring them through `src/app/app.routes.ts` rather than expanding the root `App` component further.
- Keep accessibility in mind when replacing the starter content; repo guidance explicitly requires AXE/WCAG AA-friendly output.

