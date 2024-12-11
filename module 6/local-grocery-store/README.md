# Inventory Management Application

## Overview

This project is an enhancement of the Inventory Management Application developed in Assignment 5. The application now includes detailed pages for each product, allowing users to view comprehensive product information, including a description and an image. The app also features clickable items on the home page that link to their respective product detail pages.

## Features Implemented:

### Dynamic Routing:

Configured using React Router (version 6).
Each product has a unique URL based on its SKU.
Users can navigate between the home page and individual product detail pages.

### Updated Inventory Data:

Added description and image fields to the inventory data.
Images are stored in the /public directory for easy access.

### Home Page:

Displays all products in a dynamic, clickable list.
Each product links to its detailed page.
Preserved header, footer, and inventory list from Assignment 5.

### Product Detail Page:

Created a reusable ProductDetail component.
Displays all product information, including SKU, name, quantity, price, description, and image.
Includes a link back to the home page.

### Styling Enhancements:

Improved UI/UX for both the home page and product detail pages.
Added hover effects and consistent styling across components.

## Project Structure

The project follows a structured and modular approach with React components:

CS601_HW6_akansha/ 
├── public
    ├── data
        ├── inventory.json 
    ├── favicon.ico 
├── src/ │ 
    ├── components
        ├── NotFound.js
        ├── Reviews.js
    ├── styles
        ├── App.css
        ├── Reviews.css
        ├── InventoryItem.css
        ├── InventoryList.css
    ├── InventoryItem.js
    ├── InventoryList.js
    ├── ProductDetail.js
    ├── App.js
    ├── index.js
├── package.json 
├── README.md


## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

npm install
npm start

