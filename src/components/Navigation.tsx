import React from "react";

const Navigation = () => {
    return (
        <div className="navigation__content">
            <ul className='navigation__list'>
                <li className="navigation__link"><a href="#">Profile</a></li>
                <li className="navigation__link"><a href="#">Messages</a></li>
                <li className="navigation__link"><a href="#">News</a></li>
                <li className="navigation__link"><a href="#">Music</a></li>
                <li className="navigation__link"><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}
export default Navigation