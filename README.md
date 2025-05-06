# spawn-react-app

**spawn-react-app** is an opinionated CLI tool to instantly scaffold modern React projects with best practices and performance-first defaults. Built as an alternative to `create-react-app`, it uses [VITE](https://vitejs.dev) under the hood for lighening-fast development.

## Features

-   Zero-config project scaffolding
-   Powered by **Vite**
-   Pre-configured with:
    -   **Import alias**
    -   **ESLint** + **Prettier**
    -   **TailwindCSS** (WIP)
    -   **ShadCN** (WIP)
    -   **React Router** / **Tanstack Router** (WIP)
    -   **State management libraries** (WIP)
    -   **Testing** (WIP)

## Getting Started

### Using latest Production release

-   You can use this package from latest release on [npm](https://www.npmjs.com/package/spawn-react-app)
-   Just run this command inside your terminal,

```bash
npx spawn-react-app@latest
```

### Checkout latest changes from `dev` branch

-   You can easily checkout latest push on `dev` branch which has not been released yet.
-   For that, run this command inside your terminal,

```bash
bash -c "$(curl -fsSL https://dev--spawn-react-app.netlify.app/run.sh)" -- https://dev--spawn-react-app.netlify.app/spawn-react-app.tgz
```
