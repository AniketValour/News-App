import React from 'react';

function NewsCard({ article }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={article.urlToImage} className="card-img-top" alt="Image not available" />
                <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noreferrer" className="btn btn-primary">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;
