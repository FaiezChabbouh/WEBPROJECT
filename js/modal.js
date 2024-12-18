// Get the modal and button elements
const hireMeBtn = document.getElementById('hire-me-btn');
const modal = document.getElementById('hire-me-modal');
const closeBtn = document.getElementById('close-btn');

// Function to open the modal when the "Hire me" button is clicked
hireMeBtn.addEventListener('click', () => {
    modal.classList.add('show'); // Add 'show' class to display the modal
});

// Function to close the modal when the close button (X) is clicked
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show'); // Remove 'show' class to hide the modal
});

// Close the modal if the user clicks outside of the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show'); // Hide the modal if the background is clicked
    }
});

// Handle form submission
document.getElementById('hire-me-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    alert('Your request has been submitted!');
    modal.classList.remove('show'); // Close the modal after submission
});
