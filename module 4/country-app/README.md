# Country Data Manager

This project is a TypeScript-based application for managing and displaying country data. It showcases information about various countries, such as their annual rain levels, snow levels, or total land size, and categorizes snowy countries to calculate the total annual snow level.

## Features

- **Country Classes**: Includes three country types: `RainyCountry`, `SnowyCountry`, and `IslandCountry`, each implementing the `ICountry` interface.
- **Dynamic Filtering**: Filters snowy countries and calculates their total snow level.
- **DOM Rendering**: Dynamically generates and renders HTML content for country information.
- **TypeScript**: Strongly-typed code with interfaces, type predicates, and assertions.

## Project Structure

```plaintext
.
├── public       
├──── index.html       # Main HTML file for the app
├──── app.js           
├── src       
├──── app.ts           # TypeScript file containing the application logic
├── README.md        # Project documentation (this file)
├── tsconfig.json    # TypeScript configuration file
└── package.json     # Project dependencies and scripts
