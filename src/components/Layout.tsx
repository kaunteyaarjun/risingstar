import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LenisWrapper from './LenisWrapper';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Router>
            <LenisWrapper>
                <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white/20 selection:text-white">
                    {children}
                </main>
            </LenisWrapper>
        </Router>
    );
};

export default Layout;
