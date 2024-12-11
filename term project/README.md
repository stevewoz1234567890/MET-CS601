# Interactive Portfolio Website

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Setup](#project-setup)
- [Pages Overview](#pages-overview)
  - [Home](#home)
  - [About](#about)
  - [Portfolio](#portfolio)
  - [Resume](#resume)
  - [Gallery](#gallery)
  - [Contact](#contact)
  - [MySimpleProjects](#mysimpleprojects)

---

## Introduction

This is a fully interactive, responsive portfolio website built to showcase my skills, projects, and interests as a web developer. It features a combination of static pages and dynamic interactive demos, designed to engage users and demonstrate technical expertise.

---

## Technologies Used

- **Frontend Framework:** React with TypeScript
- **Styling:** CSS3 (modular styling), React Icons
- **Routing:** React Router
- **Web APIs:** Geolocation API, Canvas API
- **Background Processing:** Web Workers
- **Tooling:** Node.js, React Scripts, Web Vitals

---

## Features

- Fully responsive design for desktop and mobile devices.
- Interactive drawing tools (Canvas and SVG).
- Prime number calculations using Web Workers for non-blocking performance.
- Accessibility enhancements, including keyboard navigability and screen reader support.

---

## Project Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm**

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/asharma3135/TermProject.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Build for Production
```bash
npm run build
```

## Pages Overview

### Home
The Home page serves as the introduction to the portfolio. It highlights the developer's expertise, services offered, and a call-to-action to explore the portfolio or get in touch.

React: To dynamically render sections and manage navigation.
TypeScript: For type safety and predictable state management.
CSS: Modular styling for responsive design and hover animations.
React Router: Enables navigation to other sections like Contact and Portfolio.

### About
The About page provides a detailed introduction to the developer, including their professional background, skills, and personal interests. It features a bio section with a profile photo and a description of their expertise and hobbies.

React: To structure the bio content and manage the component rendering.
TypeScript: For defining prop types and ensuring code robustness.
CSS: For creating a visually appealing layout with gradients, responsive typography, and accessibility-focused styling.

### Portfolio
The Portfolio page showcases a collection of the developer's recent projects. Each project is displayed as a card with a title, description, image, and a link to view the project. The layout is designed to be visually appealing and fully responsive.

React: To dynamically render a grid of project cards using component-based architecture.
TypeScript: For type safety in project data and ensuring reliable behavior.
CSS: For responsive grid layout, hover effects, and styling project cards.
React Router: For seamless navigation within the application.

### Resume
The Resume page provides a detailed overview of the developer's education, work experience, and skills. It is structured into sections, each highlighting key achievements and qualifications.

React: To structure and display resume sections dynamically.
TypeScript: For type-safe handling of resume data and properties.
CSS: For styling sections, resume cards, and responsive design.
HTML5: Semantic tags to ensure proper structure and accessibility

### Gallery
The Gallery page features a drag-and-drop photo gallery where users can rearrange images dynamically. It includes a responsive grid layout with hover effects and fallback mechanisms for missing images.

React: For dynamic rendering of images and managing drag-and-drop functionality.
TypeScript: To ensure type safety in managing the gallery's state and images.
CSS: For responsive grid layout, hover effects, and transitions.
HTML5: Semantic structure for the gallery items.
React Hooks: For state management and event handling of drag-and-drop actions.

### Contact
The Contact page features a user-friendly form for visitors to send messages or inquiries. The form includes fields for name, email, and message, with built-in validation to ensure all fields are completed and the email format is correct. Feedback is provided to the user upon successful submission or validation errors.

React: Dynamically manages form state and handles form submissions.
TypeScript: Ensures type-safe handling of form data and validation logic.
CSS: Provides styling for the form layout, input fields, buttons, and feedback messages.
HTML5: Semantic structure for form elements, enhancing accessibility.
React Hooks: Manages form state and error handling.
Key Features:

### MySimpleProjects
The My Simple Projects page serves as a hub to showcase smaller interactive demos. Each project is represented by a button with an icon, allowing users to navigate to individual demos such as Canvas Drawing, SVG Drawing, Geolocation Demo, and Web Worker Demo.

React: For rendering the list of projects and navigation buttons dynamically.
TypeScript: Ensures type safety for the project data and button handling.
CSS: For responsive layout and styling of buttons with hover and focus effects.
React Router: For seamless navigation to individual project pages.
React Icons: To visually represent each project with engaging icons.

#### Canvas Drawing
An interactive drawing tool where users can draw on a canvas, pick colors, clear the canvas, and download their artwork as an image. The tool dynamically adjusts to the screen size.

React: Manages canvas actions and updates dynamically.
TypeScript: Ensures type safety for state and event handling.
Canvas API: Powers the drawing functionality.
CSS: Provides a visually appealing layout and tool styling.

#### SVG Drawing
An SVG-based drawing tool allowing users to add shapes (circles and rectangles), pick colors, clear the canvas, and save the drawing as an SVG file.

React: Handles dynamic rendering of shapes and canvas updates.
TypeScript: Ensures reliable handling of shape data and interactions.
CSS: Provides layout and tool styling.
SVG: Enables vector-based drawing capabilities.

#### Geolocation Demo
Demonstrates the Geolocation API by retrieving and displaying the user's current location (latitude, longitude, and accuracy). Includes error handling for unsupported browsers or denied permissions.

React: Manages API calls and displays location details dynamically.
TypeScript: Ensures proper handling of geolocation data.
Geolocation API: Provides the user's location.
CSS: For styling the geolocation output and error messages.

#### Prime Number Calculator
A Prime Number Calculator that calculates prime numbers up to a user-specified limit using Web Workers. Ensures smooth performance by offloading heavy computations to a worker thread.

React: Manages inputs and displays results dynamically.
TypeScript: Provides type safety for worker communication and state management.
Web Workers: Handles heavy computations without blocking the main thread.
CSS: Styles the input fields, buttons, and results display.