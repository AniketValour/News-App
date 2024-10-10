// search.js: Handles the search functionality for the News App

// Function to handle search input and fetch relevant news articles
const handleSearch = async (searchTerm) => {
    const apiKey = '6c3ab87927634ec7bae1d6b519e78f70'; // Replace with your actual News API key
    const url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
    
    try {
        // Fetch news articles related to the search term
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }
        const data = await response.json();
        // Display search results
        displaySearchResults(data.articles);
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
};

// Function to display search results on the page
const displaySearchResults = (articles) => {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';
    
    if (articles && articles.length > 0) {
        articles.forEach(article => {
            const newsCard = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="${article.urlToImage}" class="card-img-top" alt="Image not available">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            `;
            newsContainer.innerHTML += newsCard;
        });
    } else {
        newsContainer.innerHTML = '<p>No articles found. Please try a different search term.</p>';
    }
};

// Function to handle search input event
const handleSearchInput = (event) => {
    if (event.key === 'Enter') {
        const searchTerm = event.target.value.trim();
        if (searchTerm) {
            handleSearch(searchTerm);
        }
    }
};

// Attach the search handler to the search input field
document.getElementById('searchInput').addEventListener('keydown', handleSearchInput);