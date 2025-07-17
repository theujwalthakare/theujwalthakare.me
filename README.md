# Ujwal Thakare - Portfolio Website

A modern, cyberpunk-themed portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Cyberpunk-inspired UI with neon colors and futuristic elements
- Smooth scrolling and animations
- Sections for showcasing skills, experience, projects, and contact information
- Dark mode by default with cyberpunk aesthetics

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Vite
- React Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/theujwalthakare.me.git
cd theujwalthakare.me
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/sections/About.tsx` - Your bio, education, and location
- `src/components/sections/Experience.tsx` - Your work experience, education, and certifications
- `src/components/sections/Skills.tsx` - Your technical skills
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Contact.tsx` - Your contact information
- `src/components/layout/Footer.tsx` - Your social media links

### Styling

The cyberpunk theme colors and styling can be customized in:

- `tailwind.config.js` - Theme colors and animations
- `src/index.css` - Global styles and Tailwind components
- `src/App.css` - Custom animations

### Images

Replace the placeholder images with your own in the `public` directory and update the references in the components.

## Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory.

### Deploy to GitHub Pages

This project is configured for GitHub Pages deployment:

```bash
npm run deploy
# or
yarn deploy
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Fonts: [Orbitron](https://fonts.google.com/specimen/Orbitron) and [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)