# 🎵 FlowSounds MVP

A beautiful, minimalist productivity app that combines ambient sounds with the Pomodoro technique to help you focus and stay productive.

![FlowSounds MVP](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.0-purple?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 🎯 **Pomodoro Timer**
- **Focus Timer** - Customizable focus sessions (default: 25 minutes)
- **Break Timer** - Automatic break sessions (default: 5 minutes)
- **Auto-switching** - Seamlessly transitions between focus and break
- **Pause/Resume** - Flexible timer control
- **Reset** - Start fresh anytime

### 🎵 **Ambient Sounds**
- **Fireplace** - Warm, crackling fireplace sounds
- **Rain** - Gentle rain and thunder
- **Ocean** - Calming ocean waves
- **Looping** - Continuous background audio
- **Sound switching** - Change sounds mid-session

### 🔔 **Smart Notifications**
- **Focus Complete** - Gentle notification when focus time ends
- **Break Complete** - Different sound when break time ends
- **Automatic switching** - Timer continues to next session

### 🌙 **Theme System**
- **Dark/Light Mode** - Automatic system preference detection
- **Manual Toggle** - Easy theme switching
- **Persistent** - Remembers your preference

### 📱 **Responsive Design**
- **Mobile-first** - Works perfectly on all devices
- **Touch-friendly** - Optimized for mobile interaction
- **Modern UI** - Clean, minimalist design

## 🚀 Quick Start

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/yourusername/flowsounds-mvp.git
cd flowsounds-mvp

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### **Production Build**
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Usage

1. **Choose Your Sound** - Select from fireplace, rain, or ocean
2. **Set Timer** - Adjust focus and break durations
3. **Start Timer** - Begin your productivity session
4. **Stay Focused** - Let ambient sounds help you concentrate
5. **Take Breaks** - Automatic break reminders
6. **Repeat** - Continuous Pomodoro cycles

## 🛠️ Tech Stack

- **Frontend:** React 18.3.1
- **Build Tool:** Vite 5.4.0
- **Styling:** CSS3 with CSS Variables
- **Audio:** HTML5 Audio API
- **Deployment:** Docker, Nginx

### **Key Technologies**
- **React Hooks** - useState, useEffect, useRef
- **CSS Variables** - Dynamic theming
- **Web Audio API** - Sound management
- **localStorage** - Theme persistence
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
flowsounds-mvp/
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Component styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── public/
│   ├── sounds/          # Audio assets
│   │   ├── fireplace.mp3
│   │   ├── rain.mp3
│   │   ├── ocean.mp3
│   │   ├── focus-complete.mp3
│   │   └── break-complete.mp3
│   └── icons/           # SVG icons
│       ├── fireplace.svg
│       ├── rain.svg
│       └── ocean.svg
├── Dockerfile           # Container configuration
├── nginx.conf          # Web server config
└── package.json        # Dependencies & scripts
```

## 🌐 Deployment

### **Free Hosting Options**

#### **1. Netlify (Easiest)**
```bash
# Build the app
npm run build

# Drag the 'dist' folder to netlify.com
```

#### **2. Vercel (React Optimized)**
```bash
npm install -g vercel
vercel
```

#### **3. GitHub Pages**
```bash
npm install --save-dev gh-pages
npm run deploy
```

#### **4. Google Cloud Run**
```bash
# Follow detailed steps in DEPLOYMENT.md
gcloud builds submit --tag gcr.io/your-project/flowsounds-app
gcloud run deploy flowsounds-app --image gcr.io/your-project/flowsounds-app
```

## 🎨 Customization

### **Adding New Sounds**
1. Add audio file to `public/sounds/`
2. Add icon to `public/icons/`
3. Update `sounds` object in `App.jsx`
4. Update `soundIcons` object in `App.jsx`

### **Modifying Timer Behavior**
- Edit timer logic in `App.jsx`
- Adjust default times in state variables
- Modify notification sounds

### **Styling Changes**
- Edit `src/App.css` for component styles
- Modify CSS variables for theming
- Update responsive breakpoints

## 🔧 Development

### **Available Scripts**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run deploy       # Deploy to GitHub Pages
```

### **Code Quality**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Modern React** - Functional components, hooks

## 📊 Performance

- **Bundle Size:** 192KB (60KB gzipped)
- **Load Time:** < 2 seconds
- **Audio Loading:** Optimized with preloading
- **Caching:** Static assets cached for 1 year
- **Compression:** Gzip enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Pomodoro Technique** - Francesco Cirillo
- **Ambient Sounds** - Various free sound resources
- **React Community** - Amazing ecosystem
- **Vite Team** - Fast build tool

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/flowsounds-mvp/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/flowsounds-mvp/discussions)
- **Email:** your-email@example.com

---

**Made with ❤️ for productive people everywhere**

⭐ **Star this repository if you find it helpful!**
