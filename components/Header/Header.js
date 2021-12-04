import {useState} from 'react';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const activeClass = isActive ? `active` : ``;
    
    var clickedBtn = function(){
        setIsActive(!isActive)
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
                <div className={`header__mobile-btn`} onClick={clickedBtn}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
            <div className={`header__mobile-menu ${activeClass}`}>
                <a href="#">Home</a>
                <a href="#feature">App Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
    )
}