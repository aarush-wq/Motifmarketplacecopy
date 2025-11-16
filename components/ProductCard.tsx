
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-200 flex flex-col">
            <div className="relative w-full h-64 overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-4 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark mb-1 truncate">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                </div>
                <p className="text-xl font-bold text-brand-accent">
                    Rs. {product.price.toLocaleString('en-IN')}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
