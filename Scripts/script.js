document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    const fourthButton = document.querySelectorAll('.menuToggle');

    fourthButton.addEventListener('click', () => {
        nav.classList.toggle('expanded');
    });
});