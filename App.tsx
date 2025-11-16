
import React, { useState, useMemo, useEffect } from 'react';
import type { Product, Category } from './types';
import { PRODUCTS, CATEGORIES } from './constants';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilters from './components/CategoryFilters';
import ProductGrid from './components/ProductGrid';
import { CartIcon, MenuIcon } from './components/icons';

/**
 * A custom hook to debounce a value. This improves performance by delaying
 * the update of the search query until the user has stopped typing.
 * @param value The value to debounce.
 * @param delay The debounce delay in milliseconds.
 * @returns The debounced value.
 */
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
    useEffect(() => {
      // Set debouncedValue to value (the latest value) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      // Cleanup function that clears the timeout if the value changes before the delay has passed
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]); // Only re-call effect if value or delay changes
  
    return debouncedValue;
}


const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

    // Debounce the search query to avoid re-rendering on every keystroke and improve performance
    const debouncedSearchQuery = useDebounce(searchQuery, 300); // 300ms delay

    const filteredProducts = useMemo(() => {
        const trimmedQuery = debouncedSearchQuery.trim().toLowerCase();

        return PRODUCTS.filter(product => {
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            // If search query is empty, all products match the search criteria
            const matchesSearch = trimmedQuery === '' || product.name.toLowerCase().includes(trimmedQuery);
            return matchesCategory && matchesSearch;
        });
    }, [debouncedSearchQuery, selectedCategory]);

    return (
        <div className="min-h-screen bg-brand-light text-brand-dark font-sans">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-3xl mx-auto mb-10 text-center">
                    <SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
                    <CategoryFilters 
                        categories={CATEGORIES}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />
                     <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <CartIcon />
                        <span className="hidden sm:inline">My Cart</span>
                    </button>
                    <button className="px-4 py-2 bg-brand-secondary text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-opacity-50">
                        Motif Special
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-opacity-50">
                        <span className="hidden sm:inline">More...</span>
                         <MenuIcon />
                    </button>
                </div>

                <ProductGrid products={filteredProducts} />
            </main>

            <footer className="text-center py-6 mt-12 bg-white/50">
                <p className="text-gray-500">&copy; {new Date().getFullYear()} Motif Marketplace. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
