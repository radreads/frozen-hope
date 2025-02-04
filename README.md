# Frozen Hope

A patient advocacy campaign to raise the standard of care for frozen eggs and embryos in the US.

## About

Founded by Lindsay Beck, Frozen Hope is dedicated to improving the standards and practices around cryopreservation of eggs and embryos in fertility care.

## Technology Stack

- Next.js 14
- React
- Tailwind CSS
- TypeScript

## Design System

- Primary Color (Coral): #FF7F6F
- Secondary Color (Lime): #C7F069
- Background (Cream): #FAF7F4
- Typography: 
  - Headings: Freight Display Pro
  - Body: System font stack

## Features

- Responsive design with mobile-first approach
- Interactive navigation with mobile menu
- Newsletter integration with Substack
- Patient story submission system
- Educational resources
- FAQ system

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Home page
│   ├── learn/
│   │   └── page.tsx       # Learning resources
│   ├── ask/
│   │   └── page.tsx       # FAQ section
│   ├── share/
│   │   └── page.tsx       # Story submission
│   └── layout.tsx         # Root layout
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
└── styles/
    └── globals.css
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/frozen-hope.git
```

2. Install dependencies:
```bash
cd frozen-hope
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Git Commands for Updating

To update your repository:

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Update design system and implement new color scheme"

# Push to main branch
git push origin main
```

## External Links

- Blog: [https://frozenhope.substack.com/](https://frozenhope.substack.com/)
