# Isabella I. Douzoglou - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, education, skills, publications, and awards.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Animated timeline for professional experience
  - 3D hover effects on cards
  - Mobile-friendly hamburger menu
  - Scroll progress indicator
  - Intersection Observer animations
- **Accessibility**: Keyboard navigation support and ARIA labels
- **Performance Optimized**: Debounced scroll events and lazy loading
- **SEO Ready**: Semantic HTML with meta tags

## 🚀 Quick Start

### Option 1: Open Directly in Browser

1. Simply open the `index.html` file in your web browser
2. That's it! No build process required

### Option 2: Using a Local Server (Recommended)

Using a local server is recommended for the best development experience:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Using Node.js (if installed):
```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

#### Using VS Code Live Server Extension:
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
DOUZOGwebsite/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Update Personal Information

1. **Contact Information**: Update email and GitHub links in `index.html`
   - Hero section social links (lines ~60-80)
   - Contact section links (lines ~450-470)

2. **Colors**: Modify CSS variables in `styles.css` (lines 1-20)
   ```css
   :root {
       --primary-color: #2563eb;
       --secondary-color: #7c3aed;
       /* ... other colors */
   }
   ```

3. **Content**: All content can be edited directly in `index.html`
   - Hero section
   - About section
   - Experience timeline
   - Education cards
   - Skills
   - Publications & Awards
   - Contact information

### Add New Sections

1. Add a new `<section>` in `index.html`
2. Add corresponding styles in `styles.css`
3. Add the section to navigation menu
4. Animations will work automatically with `data-animate` attribute

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Vanilla JavaScript for interactions
- **Google Fonts**: Inter and Playfair Display

## ✨ Key Features Explained

### Smooth Scrolling
All anchor links have smooth scrolling with proper offset for the fixed navigation.

### Intersection Observer
Elements with `data-animate` attribute fade in as they enter the viewport.

### Responsive Navigation
Mobile menu with hamburger icon that transforms into an X when active.

### Timeline Animation
Experience items animate in with a stagger effect for visual interest.

### 3D Card Effects
Education and publication cards have subtle 3D tilt effects on hover.

### Scroll Progress Bar
A thin progress bar at the top shows reading progress.

## 📝 Updating Content

### Adding a New Job Experience

Add a new timeline item in the experience section:

```html
<div class="timeline-item" data-animate>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Job Title</h3>
            <span class="timeline-date">Start - End</span>
        </div>
        <p class="timeline-location">Company, Location</p>
        <p class="timeline-description">Job description</p>
    </div>
</div>
```

### Adding a New Skill Category

```html
<div class="skill-category" data-animate>
    <h3>
        <svg><!-- Icon SVG --></svg>
        Category Name
    </h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

## 🚀 Deployment

### GitHub Pages (Recommended)

**Quick Setup:**
1. Push your code to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Source", select **main** branch
   - Click **Save**

3. Your site will be live at:
   - `https://yourusername.github.io/DOUZOGwebsite/`
   - Or use a custom domain (see below)

**Custom Domain (Optional):**
1. Add a `CNAME` file with your domain name
2. Configure DNS records with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

**Notes:**
- The `.nojekyll` file prevents Jekyll processing
- All assets are relative paths and will work automatically
- Changes pushed to main branch will auto-deploy

### Netlify

1. Drag and drop the project folder to [Netlify](https://app.netlify.com/)
2. Your site will be live instantly with a custom URL

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Isabella I. Douzoglou**
- LinkedIn: [isabella-douzoglou-b7953b6b](https://www.linkedin.com/in/isabella-douzoglou-b7953b6b/)
- GitHub: [Your GitHub Profile]

## 🙏 Acknowledgments

- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons using SVG (Feather Icons style)
- Design inspired by modern portfolio best practices

---

**Note**: Remember to update placeholder links (email, GitHub) with your actual contact information before deployment!

