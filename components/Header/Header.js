export default function Header() {
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
                <div className="header__mobile-menu">
                    <i className="fas fa-bars"></i>
                    <ul className="header__mobile-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#feature">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}