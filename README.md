Recipe Finder React App

A modern, React + Vite application to search, view, and favorite recipes with smooth animations, interactive buttons, and responsive design. Users can like recipes, add them to a favorites cart, and enjoy a seamless user experience.

Features

Search for recipes using keywords.

Display recipe cards with image, title, rating, and like button.

Add/remove recipes from a Favorites Cart.

Interactive like button with animation and color change.

Fly-to-cart animation when adding a recipe to favorites.

Dynamic rating system with hover effects.

Loader animation when fetching recipes.

Modern toggle notification for actions like “Added to Favorites”.

Fully responsive design for mobile, tablet, and desktop.

Functionality

Recipe Search

Enter a keyword in the search bar to fetch recipes from the API.

Real-time loader animation while fetching results.

Recipe Cards

Each card includes image, title, rating, and like button.

Cards appear with fade-in and translateY animation.

On hover: cards slightly lift and cast a shadow, border color changes.

Like Button

Click to toggle favorite status.

Button changes background color and scales slightly when liked.

Smooth transition effect using CSS transform and background.

Rating System

Each recipe card displays a 5-star rating.

Hovering stars highlights them dynamically.

Visual feedback: filled stars are red, unfilled are gray.

Fly-to-Cart Animation

When a recipe is added to the cart, it animates with a fly-to-cart effect.

Scales and moves toward cart while fading out, giving a visual cue.

Favorites Cart

Shows all liked recipes.

Each cart item displays thumbnail, name, and heart icon.

Users can remove items individually.

Cart has a bright blue border and clean design.

Toggle Notifications

Actions like “Added to Favorites” trigger a slide + scale + fade toggle message.

Appears at the top center and disappears automatically after 3 seconds.

Uses CSS keyframe animations for smooth appearance and disappearance.

Responsive Design

Fully responsive using media queries.

Search bar, recipe cards, and cart adapt to mobile, tablet, and desktop screens.

On mobile: cards shrink, search bar and buttons adjust size, images scale properly.

Loader Animation

Spinner animation appears while recipes are being fetched.

Smooth spinning effect using CSS keyframes.

Demo

Check the live demo here
.

Technologies Used

React – Component-based UI

Vite – Fast build and development environment

CSS3 – Styling, transitions, and animations

Flexbox / Grid – Layouts

JavaScript ES6+ – Interactivity and state management

Project Structure
recipe-finder/
│
├─ public/                 # Static assets
├─ src/
│  ├─ assets/              # Images, responsive styles
│  ├─ components/          # SearchBar, RecipeList, Cart, RecipeCard
│  ├─ App.jsx              # Main app component
│  ├─ main.jsx             # React entry point
│  ├─ style/
│  │   ├─ responsive.css   # Media queries
│  │   ├─ recipe.css       # Recipe card styles and animations
│  │   └─ Cart.css         # Cart styling
├─ package.json             # Project dependencies
├─ vite.config.js           # Vite configuration
└─ README.md                # Project documentation

Installation

Clone the repository:

git clone https://github.com/Hassam-SoftwareEng/Recipe_Finder_React_API_Buzzware_Tech.git


Navigate into the project folder:

cd Recipe_Finder_React_API_Buzzware_Tech


Install dependencies:

npm install


Start the development server:

npm run dev


Open the URL shown in your terminal (usually http://localhost:5173).

Usage

Type a recipe keyword in the search bar and click Search.

Browse through the recipe cards.

Click the ❤️ Like button to add recipes to your Favorites Cart.

Access the Favorites Cart to view liked recipes and remove items if needed.

Observe animations and toggle notifications for better feedback.

Screenshot

1.<img width="1366" height="615" alt="1" src="https://github.com/user-attachments/assets/7f4a3d71-d148-4d2f-aefc-07d21f599b4a" />


2.<img width="1361" height="622" alt="2" src="https://github.com/user-attachments/assets/a3d3354b-d388-4dcf-8879-32fe52955bf0" />


3.<img width="1366" height="615" alt="3" src="https://github.com/user-attachments/assets/a71ea305-2945-4813-b80f-de4b1a4fd4f3" />


4. <img width="1366" height="103" alt="4" src="https://github.com/user-attachments/assets/8d574c1b-cfb5-4aef-ad6a-2f9cf12d7851" />



5.<img width="1353" height="618" alt="5" src="https://github.com/user-attachments/assets/9e517b30-dad8-4d1f-9d28-ed926781dcc3" />



6.<img width="1366" height="481" alt="6" src="https://github.com/user-attachments/assets/22cf6974-a638-484e-8eb4-4ae554db608e" />




7.<img width="1365" height="612" alt="7" src="https://github.com/user-attachments/assets/ec6c4bea-ae7e-457a-bea9-a56c9e17a759" />





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
