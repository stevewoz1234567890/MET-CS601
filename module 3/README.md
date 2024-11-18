# Portfolio Project

This project is a simple portfolio webpage built with HTML5 and CSS3. It demonstrates the use of advanced CSS features such as Flexbox, Grid, pseudo-classes, pseudo-elements, combinators, and selectors to create a visually appealing and responsive layout. The portfolio includes a header, a main content area with a grid of projects, a sidebar for personal information, and a footer.

## Project Structure

The project consists of two main files:
- `index.html`: The HTML structure of the page.
- `style.css`: The CSS styles that control the layout and design of the page.

## Features and Requirements

### 1. Web Page Structure
   - **Header and Footer**: The `header` and `footer` include relevant content, such as the title, logo, navigation links, and copyright details.
   - **Main Section**: A main section contains a grid of projects. This section is displayed in a multi-column grid layout that adjusts based on the screen size.
   - **Sidebar**: A sidebar is included on the left side of the main content area, containing personal information and a "Get in touch" link.
   - **Responsiveness**: The layout adapts well to both desktop and mobile viewports, with media queries applied to adjust the layout on smaller screens.

### 2. Using CSS Flexbox and Grid
   - **Flexbox**:
     - The `header` and `footer` use Flexbox to align content horizontally, ensuring proper spacing and alignment.
     - Flexbox is used to align items in the navigation bar and footer, and ensures that these sections expand appropriately when the screen size changes.
   - **Grid**:
     - The main section displaying projects uses CSS Grid. The `grid-template-columns` property is set to `repeat(auto-fit, minmax(250px, 1fr))` to create a responsive grid layout that adjusts the number of columns based on the screen width.

### 3. Pseudo-classes and Pseudo-elements
   - **Pseudo-classes**:
     - `:hover` is used on navigation links and project items to add interactivity when hovered.
     - `:focus` is used on navigation links to add interactivity when focused.
     - `:nth-child(odd)` is applied to alternate the background color of project items for better visual separation.
   - **Pseudo-elements**:
     - `::before` is used on each project item to add a decorative star symbol (`⭐`) to the top-left corner, without altering the HTML structure.
     - `::after` is used on each project item to add a decorative star symbol (`★`) to the bottom-right corner, without altering the HTML structure.

### 4. Combinators and Advanced Selectors
   - **Combinators**:
     - The child combinator (`>`) and adjacent sibling combinator (`+`) are used to style elements based on their relationships within the HTML structure.
   - **Attribute Selector**:
     - The `a[target="_blank"]` attribute selector is used to style external links in the sidebar, distinguishing them with a bold font and specific color to indicate they open in a new tab.

## Usage

To view the project:
1. Open `index.html` in a web browser.
2. The page should display a portfolio layout with a header, main content area with 20 projects, a sidebar, and a footer.

## Responsive Design

- On larger screens, the layout displays the sidebar and projects in a multi-column grid.
- On smaller screens, the header and footer content stack vertically, and the sidebar and main content also adjust to fit the viewport.

## Additional Customization

To change the number of projects or their descriptions, edit the `<div class="project">` items in the `index.html` file. Styles, such as padding and font size, can be modified in the `style.css` file to adjust the overall appearance.

## Requirements Met

This project fulfills all requirements by:
- Structuring the page with a header, footer, sidebar, and main content area.
- Using Flexbox for layout in the header and footer, and Grid for the project display.
- Applying pseudo-classes and pseudo-elements for enhanced styling.
- Utilizing combinators and advanced selectors to target specific elements and apply contextual styles.

## Author

This project was created as a demonstration of HTML5 and CSS3 capabilities in creating responsive, interactive web layouts.

---

This project serves as a practical example of using CSS techniques to achieve responsive, functional, and visually appealing designs with only HTML5 and CSS3.
