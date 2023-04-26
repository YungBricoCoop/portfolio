import React from 'react';

interface PageProps {
    children: React.ReactNode;
    className?: string;
}

const Page: React.FC<PageProps> = ({ className = '', children }) => {
    return (
        <div className={`page min-h-screen bg-background  ${className}`}>
            {children}
        </div>
    );
};

export default Page;
