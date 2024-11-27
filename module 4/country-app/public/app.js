"use strict";
/**
 * MET CS601 - Assignment 4
 * Country Management System
 */
class RainyCountry {
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a rain level of ${this.rainLevel} inches.`;
        return element;
    }
}
class SnowyCountry {
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    getInfo(element) {
        element.textContent = `${this.name} has a snow level of ${this.snowLevel} inches.`;
        return element;
    }
}
class IslandCountry {
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    getInfo(element) {
        // Format the land size with commas
        const formattedLandSize = new Intl.NumberFormat().format(this.landSize);
        element.textContent = `${this.name} has a land size of ${formattedLandSize} square miles.`;
        return element;
    }
}
// Sample data
const countries = [
    new RainyCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainyCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464),
];
// List for snowy countries
const snowyCountriesList = [];
// Function to check if a country is snowy
function filterSnowyCountry(country) {
    if (country.snowLevel !== undefined) {
        return country;
    }
    return null;
}
// Populate snowyCountriesList
for (const country of countries) {
    const snowyCountry = filterSnowyCountry(country);
    if (snowyCountry) {
        snowyCountriesList.push(snowyCountry);
    }
}
// Calculate total snow level
const totalSnowLevel = snowyCountriesList.reduce((sum, country) => sum + country.snowLevel, 0);
// Render to the DOM
const outputDiv = document.getElementById("output");
if (outputDiv) {
    const allCountriesDiv = document.createElement("div");
    const snowyCountriesDiv = document.createElement("div");
    allCountriesDiv.innerHTML = `<h2>All Countries</h2>`;
    snowyCountriesDiv.innerHTML = `<h2>Snowy Countries</h2>`;
    countries.forEach((country) => {
        const p = document.createElement("p");
        allCountriesDiv.appendChild(country.getInfo(p));
    });
    snowyCountriesList.forEach((country) => {
        const p = document.createElement("p");
        snowyCountriesDiv.appendChild(country.getInfo(p));
    });
    const totalSnowParagraph = document.createElement("p");
    totalSnowParagraph.textContent = `Total snow level: ${totalSnowLevel} inches.`;
    snowyCountriesDiv.appendChild(totalSnowParagraph);
    outputDiv.appendChild(allCountriesDiv);
    outputDiv.appendChild(snowyCountriesDiv);
}
