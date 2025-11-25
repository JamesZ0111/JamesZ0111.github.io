# 🚀 Development Quick Reference

## Common Commands

```bash
# Development
npm run dev              # Start dev server (port 3000)

# Production
npm run build           # Build optimized version
npm run start           # Run production build

# Deployment
npm run deploy          # Deploy to Vercel

# Code Quality
npm run lint            # Run ESLint

# Package Management
npm install             # Install dependencies
npm update              # Update all packages
npm audit fix --force   # Fix security vulnerabilities
```

## Project Structure

```
/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── provider.tsx         # Theme provider
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Hero.tsx            # Hero section
│   ├── Footer.tsx          # Footer
│   ├── RecentProjects.tsx  # Projects section
│   ├── Experience.tsx      # Work experience
│   ├── Clients.tsx         # Testimonials
│   ├── Approach.tsx        # Methodology
│   ├── Grid.tsx            # About/Skills
│   ├── MagicButton.tsx     # Custom button
│   └── ui/                 # UI components
│       ├── AuroraBackground.tsx  # Aurora effect
│       ├── Button.tsx           # Shadcn button
│       ├── Card.tsx             # Shadcn card
│       └── ...
├── data/                    # Static data
│   ├── index.ts            # Data exports
│   ├── confetti.json       # Lottie animation
│   └── globe.json          # Globe data
├── lib/                     # Utilities
│   └── utils.ts            # Tailwind merge, cn()
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind config
├── tsconfig.json           # TypeScript config
├── next.config.mjs         # Next.js config
└── package.json            # Dependencies
```

## Adding New Components

### 1. Create Component File
```bash
touch components/MyComponent.tsx
```

### 2. Basic Template
```tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MyComponentProps {
  className?: string;
}

export const MyComponent = ({ className }: MyComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("your-classes", className)}
    >
      {/* Component content */}
    </motion.div>
  );
};

export default MyComponent;
```

### 3. Import and Use
```tsx
import MyComponent from "@/components/MyComponent";

// In another component
<MyComponent className="custom-class" />
```

## Using Aurora Background

```tsx
import { AuroraBackground } from "@/components/ui/AuroraBackground";

export const MySection = () => {
  return (
    <AuroraBackground showRadialGradient={true}>
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </AuroraBackground>
  );
};
```

## Tailwind Classes Reference

### Aurora Effects
```
animate-blob          # Blob animation (7s)
animate-first         # Vertical movement (30s)
animate-second        # Circle rotation (20s reverse)
animate-third         # Circle rotation (40s)
animate-fourth        # Horizontal movement (40s)
animate-fifth         # Circle rotation (20s)
```

### Color Gradients
```
bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200
bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200
```

### Common Utilities
```
cn()                  # Combine Tailwind classes safely
```

## Animations

### Framer Motion Example
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  Content
</motion.div>
```

### Keyframe Animation
```tsx
<motion.div
  animate={{
    x: [0, 100, 0],
    y: [0, -100, 0],
  }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  Content
</motion.div>
```

## Data Updates

### Adding Projects
Edit `data/index.ts`:
```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    des: "Project description",
    img: "/project-image.png",
    iconLists: ["/icon1.svg", "/icon2.svg"],
    link: "https://project-link.com",
  },
  // ... more projects
];
```

### Adding Experience
```typescript
export const workExperience = [
  {
    id: 1,
    title: "Role @ Company",
    desc: "Description of what you did",
    className: "md:col-span-2",
    thumbnail: "/thumbnail.jpeg",
  },
];
```

## Styling Guidelines

### Colors
```
Dark Base: #09090B, #18181B, #0C0E19
Blues: #E4ECFF, #0064FF
Purples: #CBACF9, #8B5CF6
Pinks: #EC4899, #F472B6
Cyans: #06B6D4, #22D3EE
```

### Typography
```
headings        - font-bold, gradient text
body            - text-gray-300
accents         - gradient or purple/pink
```

### Spacing
```
sm: 0.5rem (2px)
md: 1rem (4px)
lg: 1.5rem (6px)
xl: 2rem (8px)
```

## Performance Tips

1. **Use `"use client"`** for interactive components
2. **Lazy load images** with Next.js Image component
3. **Optimize animations** - use `transform` and `opacity` only
4. **Code split** - Next.js does this automatically
5. **Minimize re-renders** - memoize components if needed
6. **Cache static content** - use Next.js caching

## Debugging

### Check Compilation
```bash
npm run build
```

### Lint Check
```bash
npm run lint
```

### Development Mode Issues
Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Access in code:
```tsx
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Deployment Checklist

- [ ] All components compile without errors
- [ ] Build succeeds: `npm run build`
- [ ] Test locally: `npm run dev`
- [ ] Check console for warnings
- [ ] Verify responsive design (mobile, tablet, desktop)
- [ ] Test all links and buttons
- [ ] Check performance with Lighthouse
- [ ] Deploy: `npm run deploy`

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [shadcn/ui](https://ui.shadcn.com)
- [Aceternity UI](https://ui.aceternity.com)

---

Last Updated: 2025-11-25
