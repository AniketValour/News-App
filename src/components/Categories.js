import React from 'react';

function Categories({ onSelectCategory }) {
    const categories = ['general', 'sports', 'entertainment', 'technology'];

    return (
        <div className="categories text-center mb-4">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`btn btn-outline-${cat === 'general' ? 'primary' : 'info'}`}
                    onClick={() => onSelectCategory(cat)}
                >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
            ))}
        </div>
    );
}

export default Categories;
