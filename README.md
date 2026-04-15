# 🚀 Baturay Duman - Premium Personal Portfolio

A sleek, highly interactive, and fully responsive personal portfolio built with modern front-end technologies. This project acts as a digital interactive resume that highlights my experiences, skills, and academic background while providing a deeply customizable cinematic experience for the visitor.

## ✨ Signature Features

- **🌐 Cross-Fade Multilingual System:** Native, seamless transition between **Turkish** and **English** using modern DOM manipulation (Zero layout jumps).
- **🎨 Dynamic Component Styling Engine:**
  - **Dark / Light Mode:** Fully cohesive theme toggling via standard `data-theme` architecture.
  - **Live Palette Selection:** Allows the user to instantly swap the entire digital lighting, button gradients, glowing borders, and hover geometries to 5 distinct base colors (Navy Blue, Rose Red, Emerald Green, Amber Yellow, Violet).
- **🔎 Dynamic Form-Scale (Zoom) Engine:** Offers a precise iOS-style segmented controller to zoom and manipulate the entire website's foundational metrics globally (from 0.8x up to 1.2x) seamlessly mapped to `rem` standards.
- **🛡️ Custom CSS Animations:** Features deep, sophisticated animations directly implemented via Vanilla CSS, including mesmerizing `conic-gradients`, glassy floating capsules, and neon pulsing geometry.
- **📧 Integrated Fast-Contact:** Custom form components ready to securely transfer inputs dynamically to the backend infrastructure.

## 🛠️ Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
- **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** Custom tightly coupled React Context API (`ThemeContext`, `LanguageContext`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Type Safety:** TypeScript

## 📂 Project Architecture

```text
src/
├── components/          # Reusable, logic-encapsulated UI sections
│   ├── SettingsDropdown # The central brain for UI modification (Themes, Colors, Languages, Scales)
│   ├── Hero             # The foundational landing viewpoint
│   ├── CareerSection    # Academic & Work timeline tracker
│   └── Contact          # Professional entry forms
├── contexts/            # Global operational hubs
│   ├── LanguageContext  # Handles bilingual state and dynamic text transformations
│   └── ThemeContext     # Handles generic structural stylings, zooming, and palettes
├── pages/               # Routing layer
└── styles/              # Global variables, custom fonts, pure CSS animations
```

## 🚀 Getting Started

To run this project locally, execute the following commands in your terminal:

```bash
# 1. Install Dependencies
npm install

# 2. Run the Development Server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the environment.

## 🧠 Design Philosophy

The core of this portfolio orbits the `glass-panel` methodology. Instead of relying on strict hardcoded box models, everything floats within highly calculated blurred translucent layers (`backdrop-blur-xl`, `border-white/10`). 

The interface explicitly avoids bloated 3rd-party animation and UI libraries (like Framer Motion or Material UI) to prove high-fidelity front-end engineering proficiency and to keep the bundle size surgically thin.
