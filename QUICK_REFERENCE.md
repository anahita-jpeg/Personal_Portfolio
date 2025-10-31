# 🚀 Quick Reference - Portfolio Customization

## 5-Minute Customization Guide

### 1. Your Name & Brand (Priority: HIGH)
```typescript
// src/app/layout.tsx - Line 19
title: 'Your Name | Full-Stack Developer & CSE Student'

// components/Navbar.tsx - Line 58
<span className="text-gradient">Your Name</span>

// components/Hero.tsx - Line 60
Your Name

// components/Footer.tsx - Line 54
Your Name
```

### 2. Contact Information (Priority: HIGH)
```typescript
// All social links in one place:
components/Hero.tsx - Lines 5-8
components/Contact.tsx - Lines 6-9
components/Footer.tsx - Lines 16-19

// Email addresses:
components/Contact.tsx - Line 153
components/Hero.tsx - Line 8
```

**Replace:**
- `https://github.com/yourusername`
- `https://linkedin.com/in/yourusername`
- `https://twitter.com/yourusername`
- `your.email@example.com`

### 3. About Text (Priority: HIGH)
```typescript
// components/About.tsx - Lines 109-132
// Rewrite 3 paragraphs about yourself
```

### 4. Skills (Priority: MEDIUM)
```typescript
// components/Skills.tsx - Lines 19-41
// Add/remove skills, update categories
```

### 5. Projects (Priority: HIGH)
```typescript
// components/Projects.tsx - Lines 18-70
// Replace with your actual projects
```

### 6. Experience (Priority: MEDIUM)
```typescript
// components/Experience.tsx
// Lines 23-68: Work experience
// Lines 70-92: Education
```

---

## 📁 File Locations Quick Map

| What to Change | File Path | Lines |
|----------------|-----------|-------|
| Site Title & SEO | `src/app/layout.tsx` | 19-60 |
| Your Name | Multiple files | See above |
| Hero Section | `components/Hero.tsx` | All |
| About Text | `components/About.tsx` | 109-132 |
| Skills List | `components/Skills.tsx` | 19-41 |
| Projects | `components/Projects.tsx` | 18-70 |
| Experience | `components/Experience.tsx` | 23-68 |
| Education | `components/Experience.tsx` | 70-92 |
| Contact Info | `components/Contact.tsx` | 153, 167 |
| Footer Links | `components/Footer.tsx` | 11-22 |
| Theme Colors | `src/app/globals.css` | 6-29 |

---

## 🎨 Common Customizations

### Change Accent Color
```css
/* src/app/globals.css */
--color-dark-accent-primary: #00d9ff;  /* Change this */
--color-light-accent-primary: #0891b2; /* And this */
```

### Change Font
```typescript
/* src/app/layout.tsx */
// Lines 7-15 - Import different Google Fonts
import { YourFont } from 'next/font/google';
```

### Add More Skills
```typescript
/* components/Skills.tsx */
// After line 41, add:
{ name: 'New Skill', icon: SiIcon, category: 'Category', color: '#hexcode' },
```

### Add More Projects
```typescript
/* components/Projects.tsx */
// After line 70, add:
{
  title: 'Project Name',
  description: 'Description',
  image: '/projects/image.jpg',
  category: 'Category',
  tags: ['Tag1', 'Tag2'],
  liveUrl: 'https://',
  githubUrl: 'https://',
}
```

---

## 🖼️ Image Checklist

Add these files to `public/`:

- [ ] `/profile.jpg` - Your photo (300x300px)
- [ ] `/og-image.jpg` - Social preview (1200x630px)
- [ ] `/resume.pdf` - Your resume
- [ ] `/projects/project1.jpg` (1200x675px)
- [ ] `/projects/project2.jpg`
- [ ] `/projects/project3.jpg`

---

## ⚡ Common Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Format code
npm run format

# Clear cache & restart
rm -rf .next node_modules
npm install
npm run dev
```

---

## 🐛 Quick Fixes

### Theme Toggle Not Working
```typescript
// Clear browser storage
localStorage.clear()
// Then refresh page
```

### Animations Not Smooth
```typescript
// Check if you have reduced motion enabled in OS
// Disable it in System Preferences > Accessibility
```

### Build Errors
```bash
# Clear everything
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Showing
```typescript
// Check:
1. File is in /public folder
2. Path starts with / not ./
3. File name matches exactly (case-sensitive)
4. File extension is correct
```

---

## 📱 Testing Checklist

Quick test on each:
- [ ] Chrome (Desktop)
- [ ] Safari (Desktop)
- [ ] Chrome (Mobile)
- [ ] Safari (iPhone)

Check:
- [ ] All sections visible
- [ ] Theme toggle works
- [ ] Mobile menu opens
- [ ] Contact form validates
- [ ] All links work
- [ ] Smooth scrolling works

---

## 🚀 Deploy in 5 Minutes

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to vercel.com
   - Click "New Project"
   - Import GitHub repo
   - Click "Deploy"
   - Done! ✅

---

## 🎯 Priority Order

### Day 1 (Must Do)
1. Replace "Your Name" everywhere
2. Update all email addresses
3. Update all social media links
4. Write about section
5. Add profile image

### Day 2 (Should Do)
6. Add your projects (at least 3)
7. Update experience section
8. Update skills list
9. Add project images
10. Test on mobile

### Day 3 (Nice to Have)
11. Fine-tune colors
12. Add more projects
13. Write better descriptions
14. Add resume PDF
15. Deploy to production

---

## 💡 Pro Tips

1. **Start with Content:** Text first, then images
2. **Quality Images:** Use high-res images (compress with tinypng.com)
3. **Real Projects:** Only include projects you're proud of
4. **Keep it Simple:** Don't over-customize at first
5. **Mobile First:** Test on real phone, not just dev tools
6. **Get Feedback:** Show to 3 people before going live
7. **Performance:** Run Lighthouse test before deploy
8. **SEO:** Update all meta tags before deploy
9. **Analytics:** Add Google Analytics after deploy
10. **Maintain:** Update every 2-3 months

---

## 🆘 Getting Help

If stuck:
1. Check README.md
2. Check SETUP_GUIDE.md
3. Check PROJECT_SUMMARY.md
4. Search error on Google
5. Check Next.js docs
6. Ask on Stack Overflow

---

## ✅ Final Pre-Launch Checklist

- [ ] Name updated everywhere
- [ ] Email/links updated
- [ ] About text written
- [ ] At least 3 projects added
- [ ] Profile image added
- [ ] Contact form tested
- [ ] Mobile responsive checked
- [ ] No console errors
- [ ] SEO metadata updated
- [ ] Tested in Chrome & Safari
- [ ] Resume PDF added
- [ ] All placeholder text removed
- [ ] Deployed to Vercel
- [ ] Custom domain connected (optional)
- [ ] Shared on LinkedIn/Twitter

---

**Need to make a quick change?**
1. Find the file in the map above
2. Edit the specific lines
3. Save
4. Refresh browser
5. Done! ✨

**That's it! You're ready to launch! 🚀**


