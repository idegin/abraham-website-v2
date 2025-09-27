import React from 'react'

export default function HeroSection() {
    return (
        <>
            <section className="banner-area">
                <div className="banner__wrp">
                    <div className="banner__image">
                        <div className="swiper banner__slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="parallax-bg"> <img src="images/banner/banner-image1.jpg" alt="image"
                                        data-swiper-parallax="300" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="parallax-bg"> <img src="images/banner/banner-image2.jpg" alt="image"
                                        data-swiper-parallax="300" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="parallax-bg"> <img src="images/banner/banner-image3.jpg" alt="image"
                                        data-swiper-parallax="300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner__content">
                        <h1 className="title" data-animation="slideInLeft" data-duration="1s" data-delay="1s">Accelerate your
                            business Sustainable Growth</h1>
                        <p className="text" data-animation="slideInLeft" data-duration="1.5s" data-delay="1.1s">We bring a
                            fresh, dynamic perspective to every client relationship, driven by a relentless energy that
                            sparks action.</p>
                        <div data-animation="fadeInDown" data-duration="2s" data-delay="2s">
                            <a href="#feature" className="arry-btn animation__arryUpDown"><i
                                className="fa-light fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div className="banner__dot">
                        <span className="dot-content">
                            <span>01</span>
                            <span>Tax strategy</span>
                        </span>
                        <span className="dot-content">
                            <span>02</span>
                            <span>Consulting
                                Service</span>
                        </span>
                        <span className="dot-content">
                            <span>03</span>
                            <span>Business
                                Analyse</span>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
