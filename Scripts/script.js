document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const expandedMenu = document.getElementById('expandedMenu');

    menuToggle.addEventListener('click', function() {
        expandedMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && expandedMenu.classList.contains('active')) {
            expandedMenu.classList.remove('active');
        }
    });
});