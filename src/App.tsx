import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MainContainer from "./components/MainContainer";

const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <section className='main__content'>
                    <div className="navigation__section">
                        <Navigation/>
                        <MainContainer/>
                    </div>
            </section>
        </div>
    );
}

export default App;
