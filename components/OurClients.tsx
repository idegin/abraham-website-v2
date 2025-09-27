import React from 'react'

type Props = {}

export default function OurClients({ }: Props) {
    return (
        <section className="brand-six-area pt-130">
            <div className="container">
                <div className="section-header text-center mb-50">
                    <h6>OUR CLIENTS</h6>
                    <h2 className="wow splt-txt" data-splitting>Those who trusted us</h2>
                </div>
                <div className="brand-six__wrp">
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image1.png" alt="image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image2.png" alt="image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image3.png" alt="image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image4.png" alt="image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image5.png" alt="image" />
                    </a>
                </div>

                <div className="brand-six__wrp wrp-bottom">
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image6.png" alt="image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image7.png" alt="image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image8.png" alt="image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image9.png" alt="image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="images/brand/brand-six-image10.png" alt="image" />
                    </a>
                </div>
                <div className="brand-six__text mt-50">
                    <h5 className="text">2.6k Companies and Individuals Have Trusted Us. <a href="#0"
                        className="hover-link">View All Clients <i className="fa-solid fa-chevron-right"></i></a></h5>
                </div>
            </div>
        </section>
    )
}