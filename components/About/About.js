import Image from 'next/image';
import socialImg from '../../public/social_networking.jpeg';

export default function About() {
    return(
        <div id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>About Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Image src={socialImg} alt="about us image" className="about__img" />
                    </div>

                    <div className="col-md-6 about__desc">
                        <p>
                            Ovatoyu is an online social networking app where people can create profiles, share information such as photos, videos, add captions, edit filters, video live streaming, like and reactions, text and voice comments, share, chat with other users anywhere in the world, make a direct phone call to any contact number anywhere in the world including numbers that are not register with the platform, watch live sports and tv shows, B2B where users can buy, sell and advertise, and link to the information posted by others.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}