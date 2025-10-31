# Modern Developer Portfolio

A stunning, interactive, and fully responsive developer portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Design & UI
- **Modern Glassmorphism Design** - Beautiful glassmorphism effects throughout
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Smooth Animations** - Framer Motion powered animations and transitions
- **Responsive Design** - Fully responsive across all devices and screen sizes
- **Custom Cursor** - Interactive custom cursor (desktop only)
- **Scroll Progress Bar** - Visual scroll progress indicator

### 📱 Sections
1. **Hero Section** - Eye-catching introduction with typing animation
2. **About Section** - Personal introduction with animated stats
3. **Skills Section** - Interactive skill cards with filtering
4. **Projects Section** - Filterable project showcase with detailed cards
5. **Experience Section** - Timeline view with toggle between Experience/Education
6. **Contact Section** - Functional contact form with validation
7. **Footer** - Comprehensive footer with social links and back-to-top button

### 🚀 Interactive Features
- Animated navigation with active section detection
- Smooth scroll to sections
- Type animation in hero section
- Counter animations for stats
- Hover effects and micro-interactions
- Form validation with real-time feedback
- Toast notifications
- Confetti celebration on form submission
- Copy-to-clipboard functionality

### 🛠️ Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Theme:** next-themes
- **Effects:** react-confetti, react-type-animation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd workplis
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **src/app/layout.tsx** - Update metadata (title, description, URLs)
2. **components/Hero.tsx** - Update name, titles, tagline, social links
3. **components/About.tsx** - Update about text and stats
4. **components/Skills.tsx** - Add/modify your skills
5. **components/Projects.tsx** - Add your projects
6. **components/Experience.tsx** - Add your experience and education
7. **components/Contact.tsx** - Update email and location
8. **components/Footer.tsx** - Update name and links

### Theme Colors
Edit `src/app/globals.css` to customize the color scheme:
- Dark mode colors: `--color-dark-*`
- Light mode colors: `--color-light-*`

### Images
Add your images to the `public` folder:
- Profile image: `/profile.jpg`
- Project images: `/projects/*.jpg`
- OG image: `/og-image.jpg`

## 📁 Project Structure

```
workplis/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout with theme provider
│       ├── page.tsx        # Main page combining all sections
│       └── globals.css     # Global styles and theme
├── components/
│   ├── Navbar.tsx          # Navigation with scroll effects
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Experience.tsx      # Experience/Education timeline
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   ├── ThemeToggle.tsx     # Theme switcher
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── ScrollProgress.tsx  # Scroll progress bar
│   ├── CustomCursor.tsx    # Custom cursor
│   ├── PageLoader.tsx      # Loading screen
│   └── Toast.tsx           # Toast notifications
├── public/                 # Static assets
└── package.json
```

## 🎯 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🎨 Color Palette

### Dark Mode
- Background Base: `#0a0e27`
- Background Card: `#151932`
- Primary Accent: `#00d9ff` (Cyan)
- Secondary Accent: `#b794f6` (Purple)
- Tertiary Accent: `#ffd93d` (Yellow)

### Light Mode
- Background Base: `#ffffff`
- Background Card: `#f7f9fc`
- Primary Accent: `#0891b2` (Teal)
- Secondary Accent: `#7c3aed` (Purple)
- Tertiary Accent: `#ea580c` (Orange)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide](https://lucide.dev/) and [Simple Icons](https://simpleicons.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

For any questions or feedback, feel free to reach out:
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)

---

**Note:** Remember to replace all placeholder content (name, email, links, images, etc.) with your actual information before deploying!

Made with ❤️ and lots of ☕
