import Image from 'next/image';
import feature1Pic from '../../public/nappy.jpg';
import feature2Pic from '../../public/thirdman.jpg';
import feature3Pic from '../../public/olanma.jpg';
import feature4Pic from '../../public/tracy.jpg';
import feature5Pic from '../../public/theo.jpg';
import feature6Pic from '../../public/anastasia.jpg';
import feature7Pic from '../../public/ivan.jpg';
import feature8Pic from '../../public/andrea.jpeg';

export default function Features() {
    return(
        <div id="feature" className="container features">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>App Features</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <Image src={feature1Pic} alt="news feed image" className="features__img" />
                </div>
                <div className="col-md-6 features__description">
                    <h3>News Feed</h3>
                    <p>
                        The news feed is going to be the primary system through which users are exposed to content posted on the network, it also allows users to share photos and videos from their lives, add captions, edit filters, video editing tools, background music, like and react, comments and share, engage with others, explore and creep, and many more.
                    </p>
                </div>
            </div>

            <div className="row row-even">
                <div className="col-md-6 features__description">
                    <h3>Live TV</h3>
                    <p>
                        This feature can allow users to watch football matches and other live sports activities, live Tv shows, you can also start a live video that can be share with your friends and followers through the use of live broadcast. The feature can allow you to like, comments and share any live activities with others.
                    </p>
                </div>
                <div className="col-md-6">
                    <Image src={feature2Pic} alt="Live TV image" className="features__img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <Image src={feature3Pic} alt="talent show image" className="features__img" />
                </div>
                <div className="col-md-6 features__description">
                    <h3>Talent Show</h3>
                    <p>
                        This feature gives users opportunities to showcase their talents like singing, dancing, comedy, cooking, art and design, and lip-syncing, and allows users to create videos, share them and promote it across the platform.
                    </p>
                </div>
            </div>

            <div className="row row-even">
                <div className="col-md-6 features__description">
                    <h3>Chat</h3>
                    <p>
                        Ovatoyu Chat is a free, multi-platform messaging platform that lets users make video and voice calls, send text messages, share their locations, and more with just a Wi-Fi connection.
                    </p>
                </div>
                <div className="col-md-6">
                    <Image src={feature4Pic} alt="chat image" className="features__img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <Image src={feature5Pic} alt="phone calling image" className="features__img" />
                </div>
                <div className="col-md-6 features__description">
                    <h3>Phone Calling</h3>
                    <p>
                        This feature uses your phone’s cellular or Wi-Fi connection to facilitate voice calling to nearly anyone on the planet including people that are not even using the app, alone or in a group and is especially nice for families and small collaborative workgroups. 
                    </p>
                </div>
            </div>

            <div className="row row-even">
                <div className="col-md-6 features__description">
                    <h3>B2B/Advert</h3>
                    <p>
                        B2B/ Advertising is a digital marketplace where users can arrange to buy, sell and trade items with other people in their area. This feature primary focus on helping Small and Medium Enterprises to run their businesses efficiently.
                    </p>
                </div>
                <div className="col-md-6">
                    <Image src={feature6Pic} alt="B2B advert image" className="features__img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <Image src={feature7Pic} alt="E-payment image" className="features__img" />
                </div>
                <div className="col-md-6 features__description">
                    <h3>E-Wallet/E-Payment</h3>
                    <p>
                        Ovatoyu Pay is a Payment Feature that lets users store debit or credit card details to make online and in-store purchases using their phones. It works as a mobile wallet-based payment method, similar to the likes of Apple Pay or Alipay. 
                    </p>
                </div>
            </div>

            <div className="row row-even">
                <div className="col-md-6 features__description">
                    <h3>E-Hailing</h3>
                    <p>
                        This feature allows users to hail a taxi, motor bike, bus, mini-truck and big truck.  Ovatoyu E-hailing feature is not just going to focus only on Urban people, but to make it easy and accessible to people living in the Rural areas too.
                    </p>
                </div>
                <div className="col-md-6">
                    <Image src={feature8Pic} alt="B2B advert image" className="features__img" />
                </div>
            </div>
        </div>
    )
}