//import {useEffect} from 'react';

export default function Header() {
    
    let mobileMenu = document.getElementsByClassName('header__mobile-menu');
    
    
    var clickedBtn = function(){
        mobileMenu[0].classList.toggle('active')
    }

    return(
        <header>
            <div className="container header__container">
                <div className="header__logo">Ovatoyu</div>
                <div className="header__links">
                    <a href="#">Home</a>
                    <a href="#feature">Features</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="header__mobile-btn" onClick={clickedBtn}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div className="header__mobile-menu">
                <a href="#">Home</a>
                <a href="#feature">App Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
    )
}