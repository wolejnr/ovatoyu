import Link from 'next/link';

export default function Contact() {
    return(
        <div id="contact" className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            Want to get in touch with us? Email us at <strong>ovatoyuworld@gmail.com</strong> or Visit our various social media handles.
                        </p>
                    </div>
                </div>
                <div className="contact__socials">
                    {/*<div className="text-center">
                        <i className="fab fa-twitter"></i>
                    </div>*/}
                    <Link href="https://www.facebook.com/Ovatoyu-107055855167039">
                    <a className="text-center">
                        <i className="fab fa-facebook"></i>
                    </a>
                    </Link>
                    {/*<div className="text-center">
                        <i className="fab fa-instagram"></i>
                    </div>*/}
                </div>
            </div>
        </div>
    )
}