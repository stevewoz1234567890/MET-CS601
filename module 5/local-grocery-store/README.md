# Inventory Management Application

## Overview

This is a React-based application built using **Create React App**. It displays a list of inventory items for a local grocery store, including details like SKU, Name, Quantity, and Price. The application features reusable components and a responsive design.

## Features

- **Dynamic Inventory List**: Inventory data is stored in a JSON file and dynamically rendered.
- **Reusable Components**: Includes `InventoryItem` and `InventoryList` components.
- **Responsive Design**: Styled with CSS for a modern look.
- **Interactive Elements**: Hover effects on inventory items for better user experience.

## Project Structure

The project follows a structured and modular approach with React components:

CS601_HW5_akansha/ 
├── public
    ├── data
        ├── inventory.json 
    ├── favicon.ico 
    ├── index.html 
├── src/ │ 
    ├── InventoryItem.js
    ├── InventoryList.js
    ├── App.css
    ├── App.js
    ├── index.js
├── package.json 
├── README.md


## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

npx create-react-app inventory-management
cd inventory-management
npm start

## Usage

- The homepage displays the grocery store name and logo.
- Below the header, you can view a list of inventory items.
- Each inventory item displays its **SKU**, **Name**, **Quantity**, and **Price**.
- Hovering over an inventory item highlights it with a color change.

## Components

### InventoryItem

- Represents a single inventory item.
- **Props**:
  - `sku`: Unique identifier for the item.
  - `name`: Name of the item.
  - `qty`: Quantity available.
  - `price`: Price of the item.

### InventoryList

- Displays a list of all inventory items.
- Uses `InventoryItem` to render each item dynamically.
