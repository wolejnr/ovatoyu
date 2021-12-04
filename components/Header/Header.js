export default function Header() {
    // let menuBtn = document.getElementsByClassName('header__mobile-btn');
    let mobileMenu = document.getElementsByClassName('header__mobile-menu');

    var clickedBtn = function(){
        mobileMenu[0].classList.toggle('active')
    }
    
    // menuBtn[0].addEventListener('click', clickedBtn)
    
    // console.log(menuBtn[0])

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
                <a href="#feature">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
        </header>
    )
}