# TechCare

TechCare is a React-based project powered by Vite for fast development and build. Follow the steps below to get started with the project and manage its dependencies effectively.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 16 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

---

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd techcare
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   > Alternatively, use `yarn` if you prefer:
   ```bash
   yarn install
   ```

---

### Running the Development Server

Start the development server to view the app locally:

```bash
npm run dev
```

The app will be accessible at `http://localhost:5173`.

---

### Building the Project

To create a production-ready build:

```bash
npm run build
```

The build output will be in the `dist` directory.

---

### Previewing the Build

Preview the production build locally:

```bash
npm run preview
```

---

### Linting

Check and fix code issues using ESLint:

```bash
npm run lint
```

---

### Dependencies

#### Production Dependencies:

- `react` & `react-dom`: Core React libraries.
- `chart.js` & `react-chartjs-2`: For data visualization.

#### Development Dependencies:

- Vite and its React plugin: Fast build tool and development server.
- ESLint and plugins: For linting and code quality.
- SASS: For styling using SCSS.

---

### Folder Structure (Recommended)

```
techcare/
├── src/
│   ├── components/   # Reusable React components
│   ├── assets/       # Images, fonts, etc.
│   ├── styles/       # SCSS/CSS files
│   ├── App.jsx       # Main React component
│   └── main.jsx      # ReactDOM render entry
├── public/           # Static files
├── .eslintrc.js      # ESLint configuration
├── package.json      # Project dependencies and scripts
└── vite.config.js    # Vite configuration
```

---

### Additional Notes

- Customize the `vite.config.js` file if you need specific build or dev server configurations.
- Use the provided ESLint setup for consistent code quality.

Happy coding! 🚀
