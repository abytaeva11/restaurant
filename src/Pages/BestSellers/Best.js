import React from 'react';
import hero from './../../images/hero-wave.svg'

const Best = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="best">
            <div className="container">
                <div className="best">
                    <div className="best--block">
                        <div className="best--block__group" style={{display:"flex",alignItems:"center"}}>
                            <div className="best--block__group--img">
                                <img src={hero} alt="img"/>
                            </div>
                            <h3 style={{marginLeft:"30px"}}>Best Sellers</h3>
                        </div>
                        <h1>You Only Reserve <br/>
                            Exception</h1>
                        <p>Each rrrrrrr location has a menu that`s curated just for them.
                            See what new at your Cafesio and You`ll find Cafesio
                            Covent Carden moments.</p>
                    </div>
                    <div className="best--slider">


                    </div>
                </div>
            </div>

        </div>
    );
};
export default Best;


