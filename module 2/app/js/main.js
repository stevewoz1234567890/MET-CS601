document.addEventListener('DOMContentLoaded', () => {
    const fruitList = document.getElementById('fruitList');
    const vegetableList = document.getElementById('vegetableList');

    // Fetch categorized data from the correct path
    fetch('/data.json') // Ensure this matches the route defined in Express
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Parse JSON data
        })
        .then(data => {
            displayItems(data); // Call function to display items by category
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayItems(data) {
        // Clear existing items
        fruitList.innerHTML = '';
        vegetableList.innerHTML = '';

        // Check for fruits
        if (data.fruits && data.fruits.length > 0) {
            data.fruits.forEach(item => {
                const listItem = createListItem(item);
                fruitList.appendChild(listItem);
            });
        } else {
            fruitList.innerHTML = '<li>No fruits available.</li>';
        }

        // Check for vegetables
        if (data.vegetables && data.vegetables.length > 0) {
            data.vegetables.forEach(item => {
                const listItem = createListItem(item);
                vegetableList.appendChild(listItem);
            });
        } else {
            vegetableList.innerHTML = '<li>No vegetables available.</li>';
        }

        setupDropZones(); // Set up the drop zones
    }

    function createListItem(item) {
        const listItem = document.createElement('li');
        listItem.textContent = item.name; // Set the name as the text content
        listItem.classList.add('draggable');
        listItem.setAttribute('draggable', true); // Set item as draggable
        listItem.dataset.category = item.category; // Tag item with its category

        // Register dragstart event
        listItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.name); // Set the dragged item data
            e.dataTransfer.setData('category', item.category); // Store the category of the item
        });

        return listItem; // Return the created list item
    }

    function setupDropZones() {
        const dropZones = document.querySelectorAll('.drop-zone');

        dropZones.forEach(dropZone => {
            // Allow dropping by preventing the default handling of the event
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault(); // Allow dropping by preventing default behavior
                dropZone.classList.add('over'); // Highlight the drop zone
            });

            // Remove highlight when dragging leaves the drop zone
            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('over'); // Remove highlight
            });

            // Handle the drop event
            dropZone.addEventListener('drop', (e) => {
                e.preventDefault(); // Prevent default behavior
                const draggedItemName = e.dataTransfer.getData('text/plain'); // Get the name of the dragged item
                const draggedItemCategory = e.dataTransfer.getData('category'); // Get the category of the dragged item

                // Check if the item matches the category of the drop zone
                if ((dropZone.id === 'fruits' && draggedItemCategory === 'fruit') || 
                    (dropZone.id === 'vegetables' && draggedItemCategory === 'vegetable')) {
                    
                    const draggedItem = [...document.querySelectorAll('.draggable')]
                        .find(item => item.textContent === draggedItemName); // Find the dragged item

                    if (draggedItem) {
                        dropZone.appendChild(draggedItem); // Append dragged item to the drop zone
                    }
                }
                dropZone.classList.remove('over'); // Remove highlight after drop
            });
        });
    }
});
