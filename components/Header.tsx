
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-4 mb-2">
                    <img src="https://picsum.photos/seed/logo/100/100" alt="Motif Marketplace Logo" className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover" />
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
                        Motif Marketplace
                    </h1>
                </div>
                <p className="text-lg text-gray-600">
                    Authentic Odia Pipili Applique and Dokra products!
                </p>
            </div>
        </header>
    );
};

export default Header;
