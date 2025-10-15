
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  interestedCount: number;
}

export const Layout: React.FC<LayoutProps> = ({ interestedCount }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar interestedCount={interestedCount} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
    