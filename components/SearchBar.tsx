
import React from 'react';

interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <div className="relative w-full">
             <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-4 text-lg bg-white border-2 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all duration-300"
            />
        </div>
    );
};

export default SearchBar;
