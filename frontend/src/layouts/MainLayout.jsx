import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
