import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import NewsCard from './components/NewsCard';

function App() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [searchTerm, setSearchTerm] = useState('');

    const apiKey = '6c3ab87927634ec7bae1d6b519e78f70';

    useEffect(() => {
        fetchNews();
    }, [category, searchTerm]);

    const fetchNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        if (searchTerm) {
            url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
        }
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            const data = await response.json();
            if (data.articles) {
                setArticles(data.articles);
            } else {
                setArticles([]); // Set empty array if no articles are available
            }
        } catch (error) {
            console.error('Error fetching news:', error);
            setArticles([]); // Handle the error by setting articles to an empty array
        }
      };
      
    return (
        <div className="container">
            <SearchBar onSearch={setSearchTerm} />
            <Categories onSelectCategory={setCategory} />
            <div className="row">
                {articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
}

export default App;
