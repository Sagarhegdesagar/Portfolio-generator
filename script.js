document.addEventListener('DOMContentLoaded', function() {
    const personalInfoForm = document.getElementById('personal-info-form');
    const portfolioItemsContainer = document.getElementById('portfolio-items');
    const addPortfolioItemButton = document.getElementById('add-portfolio-item');

    personalInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get personal information values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const about = document.getElementById('about').value;

        // Display personal information
        const personalInfoDisplay = document.createElement('div');
        personalInfoDisplay.innerHTML = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>About Me: ${about}</p>
        `;
        document.getElementById('personal-info').appendChild(personalInfoDisplay);

        // Clear form fields
        personalInfoForm.reset();
    });

    addPortfolioItemButton.addEventListener('click', function() {
        // Create a form for adding a new portfolio item
        const portfolioItemForm = document.createElement('form');
        portfolioItemForm.innerHTML = `
            <label for="item-image">Image URL:</label>
            <input type="text" id="item-image" name="item-image" required>
            <label for="item-description">Description:</label>
            <textarea id="item-description" name="item-description" required></textarea>
            <button type="submit">Add Item</button>
        `;

        portfolioItemForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get values from the form
            const imageUrl = document.getElementById('item-image').value;
            const description = document.getElementById('item-description').value;

            // Create a portfolio item element
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.innerHTML = `
                <img src="${imageUrl}" alt="Portfolio Item">
                <p>${description}</p>
            `;

            // Append portfolio item to the container
            portfolioItemsContainer.appendChild(portfolioItem);

            // Clear form fields
            portfolioItemForm.reset();
        });

        // Append the form to the container
        portfolioItemsContainer.appendChild(portfolioItemForm);
    });
});
