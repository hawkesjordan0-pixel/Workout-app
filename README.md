# Workout App# Getting Started with Create React App



A comprehensive fitness application that generates weekly workout programs with stretches and cardio exercises, featuring dynamic exercise selection, completion tracking, and shuffle/undo functionality.This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



🔗 **Live Demo:** [https://hawkesjordan0-pixel.github.io/Workout-app/](https://hawkesjordan0-pixel.github.io/Workout-app/)## Available Scripts



---In the project directory, you can run:



## 📋 Table of Contents### `npm start`



- [Overview](#overview)Runs the app in the development mode.\

- [Features](#features)Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- [Tech Stack](#tech-stack)

- [Project Structure](#project-structure)The page will reload when you make changes.\

- [Key Components](#key-components)You may also see any lint errors in the console.

- [State Management](#state-management)

- [Exercise Library](#exercise-library)### `npm test`

- [Installation](#installation)

- [Development](#development)Launches the test runner in the interactive watch mode.\

- [Deployment](#deployment)See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- [Future Enhancements](#future-enhancements)

### `npm run build`

---

Builds the app for production to the `build` folder.\

## 🎯 OverviewIt correctly bundles React in production mode and optimizes the build for the best performance.



The Workout App is a React-based fitness application designed to provide users with structured weekly workout programs. It combines stretching exercises with cardio workouts, organized by day with specific focus areas. The app includes features like exercise shuffling, completion tracking, and configurable exercise counts.The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

---

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## ✨ Features

### `npm run eject`

### Core Features

- **Weekly Workout Programs**: 6-day programs (Monday-Friday + Weekend) with rotating 6-week cycles**Note: this is a one-way operation. Once you `eject`, you can't go back!**

- **Day-Specific Focus**: Each day targets different body areas (Lower Body, Upper Body, Spine/Core, Dynamic, Recovery, Active Choice)

- **Dual Exercise Types**: Stretches and Cardio exercises for each dayIf you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

- **Smart Exercise Selection**: Seeded random generation ensures variety across weeks

- **Configurable Counts**: Users can select 2-5 stretches and 2-5 cardio exercises per dayInstead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.



### Interactive FeaturesYou don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

- **Exercise Shuffle**: Replace any exercise with a random alternative from the same category

- **Undo Functionality**: Revert shuffled exercises back to the original## Learn More

- **Completion Tracking**: Mark exercises as complete with visual feedback

- **Progress Visualization**: Progress bars and completion percentagesYou can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- **Celebration Animations**: Confetti animation when all exercises are completed

- **Information Modal**: Built-in help and instructionsTo learn React, check out the [React documentation](https://reactjs.org/).



### User Experience### Code Splitting

- **Responsive Design**: Mobile-first design with Tailwind CSS

- **Dark Mode Support**: Theme toggle between light and dark modesThis section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

- **Auto Day Selection**: Automatically selects the current day of the week

- **Visual Feedback**: Checkmarks, animations, and color-coded sections### Analyzing the Bundle Size

- **Clean Navigation**: Easy switching between days and exercise types

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

---

### Making a Progressive Web App

## 🛠 Tech Stack

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Frontend

- **React 19.2.0** - UI library### Advanced Configuration

- **Tailwind CSS 3.3.0** - Utility-first CSS framework

- **Lucide React** - Icon libraryThis section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)



### Build & Development### Deployment

- **Create React App 5.0.1** - Build tooling

- **PostCSS & Autoprefixer** - CSS processingThis section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

- **React Scripts** - Development server and build scripts

### `npm run build` fails to minify

### Deployment

- **GitHub Pages** - Hosting platformThis section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

- **gh-pages** - Deployment automation

### Testing
- **@testing-library/react** - Component testing
- **@testing-library/jest-dom** - DOM matchers
- **@testing-library/user-event** - User interaction simulation

### Planned
- **Firebase** - Authentication and database (in development)

---

## 📁 Project Structure

```
workout-app/
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine instructions
│
├── src/
│   ├── StretchApp.js       # Main application component (634 lines)
│   ├── App.js              # Root component wrapper
│   ├── App.css             # Global styles
│   ├── index.js            # React entry point
│   ├── index.css           # Base CSS with Tailwind imports
│   ├── setupTests.js       # Test configuration
│   └── reportWebVitals.js  # Performance monitoring
│
├── build/                   # Production build output (generated)
│
├── node_modules/           # Dependencies (generated)
│
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## 🔑 Key Components

### Main Component: `StretchApp.js`

The entire application is contained in a single, monolithic React component. This design choice simplifies state management for a relatively small application.

#### Component Sections:

1. **State Management** (Lines ~4-15)
   - Current day, active section, completion tracking
   - Week number, celebration state, modal visibility
   - Exercise count configuration
   - Previous activities for undo functionality

2. **Exercise Library** (Lines ~17-210)
   - Comprehensive exercise database organized by category
   - 8 stretch categories × ~12 exercises each
   - 8 cardio categories × ~12 exercises each
   - Each exercise includes: name, duration, description, benefit

3. **Helper Functions**
   - `getRandomSelection()` - Seeded random selection for consistency
   - `seededRandom()` - Deterministic random number generator

4. **Weekly Program Generator**
   - Generates 6-day workout programs
   - Uses seeded random for week-to-week variety
   - Applies user-configured exercise counts

5. **Lifecycle Effects**
   - Auto-selects current day on mount
   - Calculates week number from start date
   - Regenerates programs when counts change

6. **Action Functions**
   - `refreshProgram()` - Advances to next week
   - `resetCycle()` - Returns to week 1
   - `toggleComplete()` - Marks exercises complete/incomplete
   - `shuffleActivity()` - Replaces exercise with random alternative
   - `undoShuffle()` - Reverts to previous exercise

7. **UI Rendering**
   - Header with week info and controls
   - Day selector buttons
   - Exercise count dropdowns
   - Activity cards with shuffle/undo buttons
   - Info modal
   - Celebration animation

---

## 📊 State Management

### State Variables

```javascript
const [currentDay, setCurrentDay] = useState(0);          // Active day index (0-5)
const [activeSection, setActiveSection] = useState('stretches'); // 'stretches' or 'cardio'
const [completedStretches, setCompletedStretches] = useState([]); // Array of completed indices
const [completedCardio, setCompletedCardio] = useState([]);       // Array of completed indices
const [showCheckmark, setShowCheckmark] = useState({});   // Temporary animation states
const [currentWeek, setCurrentWeek] = useState(1);        // Week number (1-based)
const [showCelebration, setShowCelebration] = useState(false);    // Confetti trigger
const [showInfo, setShowInfo] = useState(false);          // Info modal visibility
const [stretchCount, setStretchCount] = useState(4);      // Stretches per day (2-5)
const [cardioCount, setCardioCount] = useState(4);        // Cardio exercises per day (2-5)
const [previousActivities, setPreviousActivities] = useState({}); // Undo history
```

### State Flow

1. **Initialization**
   - App loads → Sets current day based on weekday
   - Calculates week number from start date (Jan 1, 2025)
   - Generates initial weekly program

2. **User Interactions**
   - Day Selection → Updates `currentDay`
   - Section Toggle → Switches between stretches/cardio
   - Complete Exercise → Adds index to completion array
   - Shuffle → Saves previous exercise, generates new one
   - Undo → Restores previous exercise, removes from undo history
   - Count Change → Regenerates entire weekly program

3. **Completion Tracking**
   - Completion is stored per exercise index
   - Shuffling clears completion status
   - Undo restores previous completion status
   - Completing all exercises triggers celebration

---

## 📚 Exercise Library

### Organization

The exercise library is organized into categories mapped to specific days:

#### Stretch Categories
1. **Lower Body Stretches** (Monday) - 12 exercises
   - Hip flexors, hamstrings, glutes, adductors
   
2. **Upper Body Stretches** (Tuesday) - 12 exercises
   - Shoulders, chest, neck, arms, upper back
   
3. **Spine Stretches** (Wednesday) - 12 exercises
   - Thoracic rotation, extension, flexion
   
4. **Dynamic Stretches** (Thursday) - 12 exercises
   - Active mobility work, multi-planar movement
   
5. **Recovery Stretches** (Friday) - 12 exercises
   - Gentle, restorative movements

6. **Weekend Options** - 8 exercises
   - Personalized routines and practice

#### Cardio Categories
1. **Lower Body Cardio** (Monday) - 12 exercises
   - Kettlebell work, squats, lunges, plyometrics
   
2. **Upper Body Cardio** (Tuesday) - 12 exercises
   - Push/pull movements, presses, rows
   
3. **Core Cardio** (Wednesday) - 12 exercises
   - Rotational work, planks, anti-rotation
   
4. **Full Body Cardio** (Thursday) - 12 exercises
   - Compound movements, complexes
   
5. **Active Recovery** (Friday) - 12 exercises
   - Light movement, mobility work

6. **Weekend Options** - 16 exercises
   - Fun activities, recreational sports

### Exercise Object Structure

```javascript
{
  name: "Exercise Name",
  duration: "Time or reps",
  description: "How to perform the exercise",
  benefit: "Why this exercise is valuable"
}
```

### Weekly Program Structure

Each day follows a specific focus:

- **Monday**: Lower Body Focus
- **Tuesday**: Upper Body & Shoulders
- **Wednesday**: Spine & Core
- **Thursday**: Dynamic Mobility
- **Friday**: Recovery & Flexibility
- **Weekend**: Active Choice (personalized options)

---

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/hawkesjordan0-pixel/Workout-app.git
   cd Workout-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`

---

## 💻 Development

### Available Scripts

```bash
# Start development server with hot reload
npm start

# Build for production
npm run build

# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Deploy to GitHub Pages
npm run deploy

# Eject from Create React App (one-way operation)
npm run eject
```

### Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes and test**
   ```bash
   npm start  # Test locally
   npm test   # Run tests
   ```

3. **Commit and push**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin feature/your-feature-name
   ```

4. **Deploy updates**
   ```bash
   npm run deploy
   ```

### Code Style

- **Component Structure**: Single main component with logical sections
- **State Management**: React hooks (useState, useEffect)
- **Styling**: Tailwind CSS utility classes
- **Icons**: Lucide React icon library
- **Naming**: Descriptive camelCase for variables and functions

---

## 🌐 Deployment

### GitHub Pages

The app is configured for automatic deployment to GitHub Pages.

#### Setup
1. Repository must be public
2. `homepage` field in `package.json` points to GitHub Pages URL
3. `gh-pages` npm package handles deployment

#### Deploy Process
```bash
npm run deploy
```

This command:
1. Runs `npm run build` (creates optimized production build)
2. Pushes `build/` folder to `gh-pages` branch
3. GitHub Pages serves from `gh-pages` branch

#### Custom Domain
To use a custom domain:
1. Add `CNAME` file to `public/` folder
2. Configure DNS settings with your provider
3. Enable custom domain in GitHub repository settings

---

## 🔮 Future Enhancements

### In Development (feature/updates branch)
- **User Authentication** (Firebase)
  - Email/password and Google sign-in
  - User profiles
  
- **Completion History** (Firestore)
  - Track completed workouts over time
  - Weekly/monthly statistics
  - Progress visualization

### Planned Features
- **Progressive Overload**: Increase difficulty over time
- **Custom Workouts**: User-created exercise routines
- **Exercise Videos**: Embedded demonstration videos
- **Social Features**: Share progress, challenge friends
- **Mobile App**: React Native version
- **Offline Support**: Progressive Web App capabilities
- **Workout Timer**: Built-in interval timer
- **Exercise Notes**: Personal notes and modifications
- **Export Data**: Download workout history
- **Workout Reminders**: Push notifications
- **Exercise Substitutions**: Alternative exercises for injuries
- **Rest Day Recommendations**: Smart recovery scheduling

### Potential Improvements
- Component modularization (split into multiple files)
- TypeScript migration for type safety
- Redux or Context API for state management
- Unit test coverage increase
- Performance optimizations (memoization, lazy loading)
- Accessibility enhancements (ARIA labels, keyboard navigation)
- Internationalization (i18n) support
- Dark mode implementation
- Print-friendly workout sheets

---

## 🐛 Known Issues

- None currently reported

---

## 📄 License

This project is private and not licensed for public use.

---

## 👤 Author

**Jordan Hawkes**
- GitHub: [@hawkesjordan0-pixel](https://github.com/hawkesjordan0-pixel)

---

## 🙏 Acknowledgments

- Exercise library curated for desk workers and golfers
- Icons provided by [Lucide](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Create React App](https://create-react-app.dev/)

---

## 📝 Notes

### Week Calculation
- Weeks are calculated from January 1, 2025
- Each cycle is 6 weeks long (42 days)
- Automatic progression to next week on refresh

### Seeded Randomization
- Uses seeded random to ensure consistency
- Same week number always generates same exercises
- Prevents exercises from changing on page reload

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

---

**Last Updated:** October 14, 2025  
**Version:** 0.1.0  
**Branch:** feature/updates
