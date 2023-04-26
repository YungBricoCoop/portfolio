import React from 'react';

interface PageProps {
    children: React.ReactNode;
    className?: string;
}

const Page: React.FC<PageProps> = ({ className = '', children }) => {
    return <div className={`page ${className}`}>{children}</div>;
};

export default Page;
