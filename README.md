# 🛠️ Spawn React App

A delightful, interactive CLI tool to scaffold a modern React project with your favorite setup – TypeScript, TailwindCSS, ShadCN UI, Redux Toolkit, and React Router – in seconds.

Built as an alternative to create-react-app, it uses [VITE](https://vitejs.dev/) under the hood for lighening-fast development.

## ✨ Features

🔤 Prompt for project name with validation

🧠 Choose between TypeScript or JavaScript

🎨 Optionally add TailwindCSS and ShadCN UI

🌐 Integrate React Router with optional redirect rules for Netlify & Vercel

🧱 Add Redux Toolkit boilerplate setup

🧰 Clean, modular, and extensible prompt-driven setup

## 🚀 Usage

```bash
npx spawn-react-app@latest
```

You’ll be asked a series of questions:

    Project Name – Must be at least 3 characters

    Language – TypeScript or JavaScript

    TailwindCSS – Whether to use Tailwind

    ShadCN – (If Tailwind is enabled) Add ShadCN components

    React Router – Add routing support

    Redirect Rules – Add redirect rules for Netlify/Vercel (if Router is enabled)

    Redux Toolkit – Setup Redux boilerplate

### Checkout latest changes from `main` branch

-   You can easily checkout latest push on `main` branch which has not been released yet.
-   For that, run this command inside your terminal,

```bash
bash -c "$(curl -fsSL https://spawn-react-app.netlify.app/run.sh)" -- https://spawn-react-app.netlify.app/spawn-react-app.tgz
```

## 🧪 Example Output

```
? What is the name of your project? my-awesome-app

? Which language will you be using for your project? TypeScript

? Do you want to use TailwindCSS? Yes

? Do you want to use ShadCN? Yes

? Do you want to use React Router? Yes

? Select platforms for which you want to add Redirect Rules: Netlify, Vercel

? Do you want to use Redux Toolkit? Yes
```

## 📦 Installation (Optional Global)

```bash
npm install -g spawn-react-app@latest
```

Then run:

```bash
spawn-react-app
```
