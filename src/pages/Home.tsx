import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to My Profile</h1>
                <p>This is the home page.</p>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
