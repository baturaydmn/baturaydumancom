# 🚀 Baturay Duman - Premium Portfolio (OSS Edition)

A high-end, cinematic personal portfolio template built with **Next.js**, **Tailwind CSS v4**, and **Lucide Icons**. Designed for entrepreneurs, founders, and developers who want a premium, fast, and fully customizable digital presence.

## ✨ Features
- **🌍 Dynamic Multilingual Support**: Seamless TR/EN toggle with zero layout jump.
- **🎨 Live Design System**: Real-time accent color swapping and Theme (Dark/Light) switching.
- **🔎 UI Scaling**: Advanced zoom engine (0.8x - 1.2x) using root-relative scaling.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile with high-fidelity glassmorphism.
- **📧 Contact System**: Integrated form with automated email feedback support.

---

## 🛠️ Quick Start

### 1. Prerequisites
- Node.js 18.x or higher
- NPM or PNPM

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/baturayduman/baturaydumancom.git
cd baturaydumancom

# Install dependencies
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and add your SMTP credentials for the contact form:
```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
CONTACT_RECEIVER=your-receiving-email@example.com
```
*(Note: A template is provided in `.env.local.example`)*

### 4. Customization
You don't need to dig through code to change personal info! Simply edit **`src/config/site.ts`**:
```typescript
export const siteConfig = {
  author: "Your Name",
  poweredBy: "Your Studio",
  socialLinks: {
    instagram: "...",
    twitter: "...",
    github: "...",
    linkedin: "..."
  }
};
```

### 5. Deployment
```bash
npm run build
npm run start
```
Recommended deployment: **Vercel** or **Netlify**.

---

## 📂 Architecture
- `src/components`: UI Components (Hero, Career, Contact, Settings, Footer).
- `src/contexts`: State logic (Theme, Language, Scaling).
- `src/config`: Centralized site settings for OSS users.
- `src/styles`: Theme variables and custom CSS animations.

## 📄 License
Open Source - Free to use for personal portfolios. Credit is appreciated!

---
*Generated with ❤️ by Baturay Duman & powered by Voi Digital.*
