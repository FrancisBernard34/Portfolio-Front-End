# Portfolio Website 🚀

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="nextjs">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind">
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="framer">
  <img src="https://img.shields.io/badge/Zod-3068CE?style=for-the-badge&logo=zod&logoColor=white" alt="zod">
</div>

A modern and responsive portfolio website to showcase my projects, history, and experience. Features a beautiful UI with smooth animations, an admin dashboard for project management, and a responsive design that works across all devices.

## ✨ Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 🔐 Secure admin dashboard
- ✏️ Easy content management
- 🌙 Dark mode design
- 🚀 Optimized performance
- 🔍 SEO friendly
- 🎭 Smooth animations
- 📊 Project showcase
- 📝 Skills section
- 📬 Contact form

## 📸 Screenshots

### Home Page
![Hero Section](https://i.ibb.co/sF6RjZk/hero-section.png)

### Projects Section
![Projects Section](https://i.ibb.co/VwnPdQJ/projects-section.png)

### About Section
![About Section](https://i.ibb.co/s52ST0M/about-section.png)

### Skills Section
![Skills Section](https://i.ibb.co/fNkgY3v/skills-section.png)
![Skills Page](https://i.ibb.co/5n2jwfq/skills-page.png)

### Contact Section
![Contact Section](https://i.ibb.co/Jyytt3J/contact-section.png)

### Admin Dashboard
![Dashboard Projects](https://i.ibb.co/H78ZtZ0/dashboard-projects.png)
![Create Project](https://i.ibb.co/KbmZjwc/dashboard-create-project.png)
![Edit Project](https://i.ibb.co/fCbpXNZ/dashboard-edit-project.png)

### Authentication
![Login Page](https://i.ibb.co/sKKWnzp/login-page.png)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Environment Variables

Rename the `.env.example` file to `.env` in the root directory and update it with the API url:

```bash
# API URL
API_URL="http://localhost:3001/api"  # Replace with your backend API URL
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/FrancisBernard34/Portfolio-Front-End
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 🔐 Admin Dashboard

The admin dashboard provides the following features:

- Project management (Create, Read, Update, Delete)
- Featured projects selection
- Project categorization
- Technology stack management
- Project importance ordering
- Secure authentication with JWT and refresh token system
  - Access tokens for API requests
  - Refresh tokens for session management
  - Automatic token refresh
  - Secure token storage

To access the admin dashboard:
1. Navigate to `/login`
2. Enter your admin credentials
3. Access the dashboard at `/dashboard`

### Backend Setup

For setting up the backend API, please visit the backend repository:
[Portfolio-API](https://github.com/FrancisBernard34/Portfolio-API)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
