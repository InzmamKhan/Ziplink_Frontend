<div align="center">

# ⚡ ZIPLINK.IO — Frontend

**Swiss Precision URL Shortener UI**

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lucide](https://img.shields.io/badge/Lucide_Icons-Latest-F59E0B?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

An ultra-clean, modern, minimalist single-page web interface for **ZIPLINK.IO**, built using React, Vite, and Tailwind CSS. Designed with high precision, sleek dark-mode aesthetics, responsive ergonomics, and seamless API error handling.

[Live Demo](https://ziplink-indol.vercel.app) • [Backend Repository](https://github.com/InzmamKhan/Ziplink_Backend)

</div>

---

## 🎨 Key Features

- **Minimalist Swiss Precision UI:** Clean monochrome aesthetic engineered with Tailwind CSS.
- **Instant URL Shortening:** Sub-second link generation powered by Axios and asynchronous React hooks.
- **One-Click Copy:** Seamless interaction allowing users to instantly copy generated short links to their clipboard.
- **Terms of Service Checkbox Safeguard:** Form validation enforcing user compliance before URL shortening.
- **Graceful Error Handling:** Dynamic toast and banner alerts for invalid URLs, rate limiting (HTTP 429), server cold-start delays, and timeouts.
- **Fully Responsive Ergonomics:** Optimized for mobile screens, tablets, ultra-wide desktop monitors, and dark mode environments.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Deployment Platform:** [Vercel](https://vercel.com/)

---

## 📁 Folder Structure

```text
ziplink-frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Static branding assets and images
│   ├── components/      # Modular UI components (ShortenerForm, Navbar, Footer, Modal)
│   ├── services/        # Axios API client configurations and interceptors
│   ├── App.jsx          # Main application layout and state management
│   ├── main.jsx         # Application entry point and DOM root renderer
│   └── index.css        # Global styles and Tailwind directives
├── .env.example         # Template for environment variables
├── index.html           # Main HTML document template
├── package.json         # Dependencies, scripts, and package metadata
├── tailwind.config.js   # Tailwind custom theme definitions
└── vite.config.js       # Vite configuration and server settings
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the frontend application locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/InzmamKhan/Ziplink_Frontend.git
   cd Ziplink_Frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory by duplicating `.env.example`:
   ```bash
   cp .env.example .env
   ```

   Add your backend URL target to `.env`:
   ```env
   VITE_API_BASE_URL=http://localhost:8080
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Environment Variables

| Variable Name | Required | Description | Example / Default |
| :--- | :---: | :--- | :--- |
| `VITE_API_BASE_URL` | **Yes** | Base endpoint URL of the Spring Boot Backend Service | `https://ziplink-a3k1.onrender.com` |

> **Note for Production Deployments:** When deploying to platforms like Vercel, assign the `VITE_API_BASE_URL` as a **Config** type environment variable so Vite can compile it into client bundle requests.

---

## 🌐 API Integration Flow

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant ReactUI as React UI (Vite)
    participant Axios as Axios API Service
    participant Backend as Spring Boot API (Render)

    User->>ReactUI: Paste Long URL & Click "SHORTEN"
    ReactUI->>Axios: Validate Checkbox & URL Format
    Axios->>Backend: POST /api/v1/urls/shorten
    alt Success (200 OK)
        Backend-->>Axios: { shortUrl, originalUrl, alias }
        Axios-->>ReactUI: Render Short URL + Copy Button
    else Rate Limited (429 Too Many Requests)
        Backend-->>Axios: 429 Rate Limit Exceeded
        Axios-->>ReactUI: Display "Rate limit reached. Try again later."
    else Cold Start / Timeout (10000ms+)
        Axios-->>ReactUI: Catch Timeout Error
        Axios-->>ReactUI: Display "Server warming up, please retry."
    end
```

---

## 📦 Scripts Overview

In the project directory, you can run:

- `npm run dev`: Starts the local Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Bundles and optimizes the app for production in the `dist` folder.
- `npm run preview`: Bootstraps a local static web server to preview the built `dist` production output.
- `npm run lint`: Runs ESLint checks across JavaScript and React component files.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.