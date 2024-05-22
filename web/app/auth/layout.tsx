import React from 'react';
import NavBar from '../NavBar';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow flex items-center justify-center">
                {children}
            </main>
        </div>
    );
}