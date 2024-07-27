document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    
    // Function to load content from another HTML file
    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                // Extract content from the fetched HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                content.innerHTML = doc.querySelector('main').innerHTML;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                content.innerHTML = '<p>Sorry, the content could not be loaded.</p>';
            });
    }

    // Load the content for the current page
    const path = window.location.pathname;
    const page = path.endsWith('index.html') ? 'home.html' : path.split('/').pop();
    loadContent(page);
});
