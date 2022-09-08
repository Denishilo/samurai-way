import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='main__wrapper'>
            <header className='header'>
                <div className="wrapper">
                    <div className="header__container">

                        Header Logo
                    </div>
                </div>
            </header>
            <section className='main__content'>
                <div className="wrapper">
                    <div className="navigation__section">
                        <div className="navigation__content">
                            <ul className='navigation__list'>
                                <li className="navigation__link">Profile</li>
                                <li className="navigation__link">Messages</li>
                                <li className="navigation__link">News</li>
                                <li className="navigation__link">Music</li>
                                <li className="navigation__link">Settings</li>
                            </ul>
                        </div>
                        <div className="main__container">
                            <div className="main__container-img">
                                <img className='main__img' src="https://blog.ingate.ru/upload/medialibrary/bb8/19_8.png" alt="society"/>
                            </div>
                            <div className="main__avatar">
                                MyPhoto
                                <img src="" alt="" className="main__photo"/>
                            </div>
                            <div className="main__description">
                                Description
                            </div>
                            <div className="main__my-post">
                                My post
                            </div>
                            <div className="main__new-post">
                                New post
                            </div>
                            <div className="main__post-one">
                                Post one
                            </div>
                            <div className="main__post_two">
                                Post two
                            </div>

                        </div>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default App;
