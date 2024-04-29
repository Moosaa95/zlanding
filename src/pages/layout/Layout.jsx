import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col w-full overflow-x-hidden'>
            <Header />
            <main className='flex-grow bg-gray-50'>{children}</main>
            <section className="bg-[#202229]">
        <div className="container mx-auto px-4 py-12">
        <Footer />
        </div>
      </section>
            
        </div>
    );
}

export default MainLayout;
