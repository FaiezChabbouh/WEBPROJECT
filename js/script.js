// Function to show content based on the clicked section
function showContent(section, button) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(section);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Remove active class from all buttons and add it to the clicked button
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}
