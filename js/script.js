// Global JS

// Function to load reusable HTML components
function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error('Error loading component:', error));
}