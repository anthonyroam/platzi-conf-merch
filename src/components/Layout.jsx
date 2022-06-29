import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen max-h-full bg-light-gray">
      <Header />
      <main className="w-5/6 mx-auto min-h-fixed max-h-full pb-10 py-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
