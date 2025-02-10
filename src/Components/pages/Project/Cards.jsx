import { useState } from "react";

const Cards = () => {
    const [playingVideo, setPlayingVideo] = useState(null);

    const data = [
        {
            cardimg: '/Assets/images/nature.jpg',
            cardh4: 'Specialist in Animated Websites | Creator of Rejouice Design',
            link: 'https://myrejoucie.netlify.app/' 
        },
        {
            cardimg: '/Assets/images/Web 1920 – 1.png',
            cardh4: 'Creator of Two Good Company Website',
            link: 'https://twogoodcompany.netlify.app/'
        },
        {
            cardimg: '/Assets/images/we.png', // Corrected the path here
            cardh4: 'Creator of We Think Elastic Website',
            link: 'https://wethinkelastic.netlify.app/'
        },
        {
            cardh4: 'Ochi Award-Winning Web Designer | Specialized in Animated Websites with ReactJS, GSAP, and Framer Motion',
            cardimg: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0daa4d145487469.62d94b40df0af.png',
            link: 'https://ochi-design-production.netlify.app/'
        },
        {
            cardimg: '/Assets/images/coing.png',  // Corrected the path here
            cardh4: 'CROING | Creative agency',
            isVideo: true,
            videoSrc: '/Assets/images/croing.mp4', // Path to the video
        },
        {
            cardimg: '/Assets/images/thritysix.png',  // Corrected the path here
            cardh4: 'THIRTY-SIX-STUDIO Digital Agency | (Coming soon)',
        },
    ];

    const openLink = (url) => {
        window.open(url, '_blank');
    };

    const playVideo = (videoSrc) => {
        setPlayingVideo(videoSrc);
    };

    return (
        <div className="Card">
            <div className="cards">
                {data.map((elem, index) => (
                    <div 
                        key={index} 
                        className="card-item" 
                        onClick={() => elem.link ? openLink(elem.link) : playVideo(elem.videoSrc)}
                    >
                        <div className="image">
                            {elem.isVideo ? (
                                <div className="video-thumbnail">
                                    {playingVideo === elem.videoSrc ? (
                                        <video width="100%" height="100%" controls autoPlay>
                                            <source src={elem.videoSrc} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    ) : (
                                        <img src={elem.cardimg} alt="Card Thumbnail" width="100%" height="100%" />
                                    )}
                                </div>
                            ) : (
                                <img src={elem.cardimg} alt="Card Image" width="100%" height="100%" />
                            )}
                        </div>
                        <h4>{elem.cardh4}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
