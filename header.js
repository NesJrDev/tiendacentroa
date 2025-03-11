document.addEventListener("DOMContentLoaded", function() {
    const foodContainer = document.getElementById('food-container');

    // Function to create food items
    function createFoodItems(category) {
        foods[category].forEach(item => {
            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';

            const img = document.createElement('img');
            img.src = item[0]; // Image URL
            img.alt = item[1]; // Alt text (food name)

            const title = document.createElement('h3');
            title.textContent = item[1]; // Food name

            const description = document.createElement('p');
            description.textContent = item[2]; // Food description

            foodItem.appendChild(img);
            foodItem.appendChild(title);
            foodItem.appendChild(description);

            foodContainer.appendChild(foodItem);
        });
    }

    // Call the function for each category
    createFoodItems('appetizers');
    createFoodItems('breakfast');
});