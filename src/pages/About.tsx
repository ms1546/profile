import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>About Me</h1>
                <p>This page will contain information about me.</p>
            </main>
            <Footer />
        </div>
    );
}

export default About;
