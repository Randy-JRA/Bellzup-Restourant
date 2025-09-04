const ongoingOrdersDiv = document.getElementById('ongoing-orders');
const historyOrdersDiv = document.getElementById('history-orders');

const ongoingOrders = [
    {
        restaurant: 'Order from Romz',
        meal: 'Pizza Slice',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 3:30pm',
        image: 'https://images.pexels.com/photos/103884/pexels-photo-103884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Spicy Burger',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 4:00pm',
        image: 'https://images.pexels.com/photos/2271194/pexels-photo-2271194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Sushi Roll',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 5:00pm',
        image: 'https://images.pexels.com/photos/17698066/pexels-photo-17698066/free-photo-of-sushi-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Soft Tacos',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 6:00pm',
        image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Pad Thai',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 6:30pm',
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Chicken Curry',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 7:00pm',
        image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Spaghetti',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 7:30pm',
        image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    },
    {
        restaurant: 'Order from Romz',
        meal: 'BBQ Ribs',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 8:00pm',
        image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Grilled Salmon',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 28 August at 8:30pm',
        image: 'https://images.pexels.com/photos/3579346/pexels-photo-3579346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: true
    }
];

const historyOrders = [
    {
        restaurant: 'Order from Romz',
        meal: 'T-bone Steak',
        price: '3000Frs',
        plates: '3',
        date: 'Friday 27 August at 3:30pm',
        image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Cappuccino',
        price: '3000Frs',
        plates: '3',
        date: 'Thursday 26 August at 10:00am',
        image: 'https://images.pexels.com/photos/10265719/pexels-photo-10265719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Fruit Smoothie',
        price: '3000Frs',
        plates: '3',
        date: 'Wednesday 25 August at 11:00am',
        image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Fried Dumplings',
        price: '3000Frs',
        plates: '3',
        date: 'Tuesday 24 August at 12:30pm',
        image: 'https://images.pexels.com/photos/18251648/pexels-photo-18251648/free-photo-of-dumplings-in-a-bowl-with-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Belgian Waffle',
        price: '3000Frs',
        plates: '3',
        date: 'Monday 23 August at 9:00am',
        image: 'https://images.pexels.com/photos/12386120/pexels-photo-12386120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Hot Dog',
        price: '3000Frs',
        plates: '3',
        date: 'Sunday 22 August at 1:00pm',
        image: 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Vegan Salad',
        price: '3000Frs',
        plates: '3',
        date: 'Saturday 21 August at 12:00pm',
        image: 'https://images.pexels.com/photos/1435868/pexels-photo-1435868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Nachos',
        price: '3000Frs',
        plates: '3',
        date: 'Friday 20 August at 6:00pm',
        image: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    },
    {
        restaurant: 'Order from Romz',
        meal: 'Croissant',
        price: '3000Frs',
        plates: '3',
        date: 'Thursday 19 August at 8:00am',
        image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        isOngoing: false
    }
];


function createOrderCard(order) {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');

    // Header row: Image + Details + Date
    const orderHeader = document.createElement('div');
    orderHeader.classList.add('order-header');

    const orderImage = document.createElement('img');
    orderImage.classList.add('order-image');
    orderImage.src = order.image;
    orderImage.alt = order.restaurant;

    const orderDetails = document.createElement('div');
    orderDetails.classList.add('order-details');

    const restaurantName = document.createElement('h3');
    restaurantName.textContent = order.restaurant;

    const orderInfo = document.createElement('p');
    const paddedPlates = order.plates.padStart(2, '0');  // e.g., '3' → '03'
    orderInfo.textContent = `Meal: ${order.meal} | Total: ${order.price} ${paddedPlates} Plates`;

    orderDetails.appendChild(restaurantName);
    orderDetails.appendChild(orderInfo);

    const orderDate = document.createElement('span');
    orderDate.classList.add('order-date');
    orderDate.textContent = `Date: ${order.date}`;

    orderHeader.appendChild(orderImage);
    orderHeader.appendChild(orderDetails);
    orderHeader.appendChild(orderDate);

    // Buttons row
    const orderActions = document.createElement('div');
    orderActions.classList.add('order-actions');

    const primaryButton = document.createElement('button');
    primaryButton.classList.add('btn', 'btn-primary');

    const secondaryButton = document.createElement('button');
    secondaryButton.classList.add('btn', 'btn-secondary');

    if (order.isOngoing) {
        primaryButton.textContent = 'Track Order';
        secondaryButton.textContent = 'Cancel';
    } else {
        primaryButton.textContent = 'Review';
        secondaryButton.textContent = 'Re-Order';
    }

    orderActions.appendChild(primaryButton);
    orderActions.appendChild(secondaryButton);

    orderCard.appendChild(orderHeader);
    orderCard.appendChild(orderActions);

    return orderCard;
}

function displayOrders(orders, container) {
    container.innerHTML = '';
    orders.forEach(order => {
        const orderCard = createOrderCard(order);
        container.appendChild(orderCard);
    });
}

displayOrders(ongoingOrders, ongoingOrdersDiv);
displayOrders(historyOrders, historyOrdersDiv);