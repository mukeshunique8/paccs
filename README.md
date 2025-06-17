# Paccs

<!-- ------------------------------- -->

# 🌐 ID Creation Portal – Angular 19

A scalable, responsive web application for handling user ID creation and onboarding, built using Angular 19 and modern frontend tooling. This app includes public-facing landing pages, a tenant dashboard after login, and an admin interface to manage ID approvals after payment.

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [🚀 Tech Stack](#-tech-stack)
- [📁 Folder Structure](#-folder-structure)
- [🔧 Installation & Setup](#-installation--setup)
- [👨‍💼 User Roles](#-user-roles)
- [📦 Environment Config](#-environment-config)
- [🔐 Authentication Flow](#-authentication-flow)
- [📊 Dashboard Overview](#-dashboard-overview)
- [📄 Documentation](#-documentation)
- [📤 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [📌 Future Enhancements](#-future-enhancements)
- [🪪 License](#-license)

---

## ✨ Features

- 🔓 Public landing pages (Home, Partner, Services, About, Contact, Login)
- 🔐 Tenant login & dashboard after ID approval
- 🎫 ID creation approval handled by admin after payment
- 📈 Dashboard stats (Pending, Approved, Rejected counts)
- 💬 Alerts with SweetAlert2
- 📦 LocalStorage fallback for dev
- 🖼️ FastMarquee for smooth animations
- 🌙 Fully responsive design with TailwindCSS

---

## 🚀 Tech Stack

| Layer     | Tool/Lib                     |
| --------- | ---------------------------- |
| Frontend  | Angular 19                   |
| Styling   | TailwindCSS, PrimeNG         |
| Icons     | Lucide Icons, PrimeIcons     |
| UI Lib    | PrimeNG Components           |
| Alerts    | SweetAlert2                  |
| Animation | FastMarquee                  |
| Storage   | localStorage (temp fallback) |

---

## 📁 Folder Structure

src/
├── app/
│ ├── components/ # Reusable components
│ ├── pages/ # Landing pages (home, about, etc.)
│ ├── dashboard/ # Tenant dashboard
│ ├── admin/ # Admin panel
│ ├── services/ # Shared services (auth, data)
│ ├── models/ # Interfaces and types
│ ├── guards/ # Route guards
│ └── app-routing.module.ts
├── assets/
│ └── images/, icons/
├── environments/
│ └── environment.ts, environment.prod.ts

/docs/
├── architecture.md
├── components.md
├── deployment.md
└── usage-guide.md

## 🔧 Installation & Setup

````bash
# Clone the project
git clone https://github.com/your-repo/id-creation-app.git
cd id-creation-app

# Install dependencies
npm install

# Run the project
ng serve




This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
````

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
