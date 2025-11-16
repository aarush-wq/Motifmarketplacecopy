
import React from 'react';
import type { Category } from '../types';

interface CategoryFiltersProps {
    categories: (Category | 'All')[];
    selectedCategory: Category | 'All';
    onSelectCategory: (category: Category | 'All') => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-4 py-2 font-semibold rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50
                        ${selectedCategory === category
                            ? 'bg-brand-primary text-white ring-brand-primary'
                            : 'bg-white text-brand-dark hover:bg-gray-100 ring-gray-300'
                        }`}
                >
                    {category}
                </button>
            ))}
        </>
    );
};

export default CategoryFilters;
