// food.js
// This file will contain the data for the food items
// and the logic to dynamically generate the food grid.

// Sample data (replace with your 100+ food items)
const foodItems = [
    {
        name: "Roasted Fish",
        image: "https://via.placeholder.com/200",
        description: "From Plush House",
        location: "Up-Station",
        price: 100000,
        rating: 4.5
    },
    {
        name: "Fufu Corn and Njamanjama",
        image: "https://via.placeholder.com/200",
        description: "From Mama's Kitchen",
        location: "Down-Town",
        price: 5000,
        rating: 4.2
    },
    {
        name: "Fried Rice and Roasted Chicken",
        image: "https://via.placeholder.com/200",
        description: "From Chopsy's",
        location: "City Center",
        price: 8000,
        rating: 4.8
    },
    {
        name: "Achu",
        image: "https://via.placeholder.com/200",
        description: "From Grandma's Recipe",
        location: "Village",
        price: 7000,
        rating: 4.9
    },
    {
        name: "Another Dish",
        image: "https://via.placeholder.com/200",
        description: "From Fancy Restaurant",
        location: "Uptown",
        price: 12000,
        rating: 4.0
    },
    {
        name: "Stew",
        image: "https://via.placeholder.com/200",
        description: "From Home",
        location: "My House",
        price: 6000,
        rating: 4.7
    },
    {
        name: "Eru and Water Fufu",
        image: "https://via.placeholder.com/200",
        description: "From My village",
        location: "Mile 16",
        price: 9000,
        rating: 4.6
    },
    {
        name: "Khati Khati",
        image: "https://via.placeholder.com/200",
        description: "From the street",
        location: "Bamenda",
        price: 4000,
        rating: 4.3
    },
    {
        name: "Okra Soup",
        image: "https://via.placeholder.com/200",
        description: "From the local restaurant",
        location: "Buea",
        price: 5500,
        rating: 4.4
    },
    {
        name: "Egusi Soup",
        image: "https://via.placeholder.com/200",
        description: "From the local restaurant",
        location: "Douala",
        price: 6500,
        rating: 4.1
    },
    // Add more food items here
];

function generateFoodGrid() {
    const foodGrid = document.querySelector('.food-grid');

    foodItems.forEach(item => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.classList.add('food-item');

        foodItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <div class="restaurant-location">
                <span class="description">${item.description}</span>
                <span class="location">${item.location}</span>
            </div>
            <div class="price-rating">
                <span class="price">${item.price}frs</span>
                <span class="rating"><i class="fas fa-star"></i> ${item.rating}</span>
            </div>
            <button class="view-more">View More</button>
        `;

        foodGrid.appendChild(foodItemDiv);
    });
}

// Call the function to generate the food grid when the page loads
window.onload = generateFoodGrid;