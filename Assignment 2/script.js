document.getElementById('seeMoreBtn').addEventListener('click', function () {
    const additionalCards = document.querySelectorAll('.additional-card');
    const btnText = document.getElementById('seeMoreBtn');

    additionalCards.forEach(card => {
        if (card.style.display === 'none' || card.style.display === '') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    if (btnText.innerText === 'See More Products') {
        btnText.innerText = 'See Less';
    } else {
        btnText.innerText = 'See More Products';
    }
});




document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    const emailInput = document.getElementById('email');
    const subscriptionMessage = document.getElementById('subscriptionMessage');

    // Check if the email is not empty
    if (emailInput.value) {
        subscriptionMessage.textContent = 'Subscription complete';
        subscriptionMessage.classList.remove('hidden');
        emailInput.value = ''; // Clear the input field
    }
});