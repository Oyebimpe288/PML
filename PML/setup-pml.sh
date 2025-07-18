#!/bin/bash

echo "📁 Creating folder structure..."

mkdir -p src/components
mkdir -p src/sections
mkdir -p src/assets
mkdir -p src/styles

touch src/components/Navbar.jsx
touch src/components/Hero.jsx
touch src/components/Footer.jsx
touch src/sections/AboutSection.jsx
touch src/sections/ContactSection.jsx
touch src/styles/globals.css
touch src/styles/animations.css

echo "📄 Creating App.jsx and main.jsx..."
cat <<EOL > src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Hero />
      {/* More sections go here */}
    </div>
  );
}

export default App;
EOL

cat <<EOL > src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOL

echo "📄 Creating Tailwind config files..."

cat <<EOL > tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#006B54',
        secondary: '#E8F5F0',
        accent: '#004C3F',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'slide-in': 'slideIn 1s ease-out forwards',
        'fade-in': 'fadeIn 1.5s ease-in forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
EOL

cat <<EOL > postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOL

cat <<EOL > src/styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
EOL

cat <<EOL > src/styles/animations.css
.hero-gradient {
  background: linear-gradient(135deg, rgba(0,107,84,0.9) 0%, rgba(0,76,63,0.9) 100%);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.team-member:hover .team-overlay {
  opacity: 1;
}

html {
  scroll-behavior: smooth;
}
EOL

echo "✅ Structure and configuration created."

echo "🚨 Reminder: You still need to run:"
echo "  npm install -D tailwindcss postcss autoprefixer"
echo "  npx tailwindcss init -p"
echo ""
echo "ℹ️  Also install any icons (e.g., Font Awesome) if needed:"
echo "  npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons"
