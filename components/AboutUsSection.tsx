import React from 'react'

export default function AboutUsSection() {
    return (
        <>
            <section className="about-six-area">
                <div className="about-six__bg">
                    <img src="images/bg/about-six-bg.png" alt="image"/>
                </div>
                <div className="container">
                    <div className="about-six__wrp">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6">
                                <div className="about-six__image">
                                    <img className="bounceInLeft wow animation__arryLeftRight"
                                        src="/external/about.png" alt="image"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-six__item">
                                    <div className="section-header">
                                        <h6>About Briie</h6>
                                        <h2 className="wow splt-txt" data-splitting>About Us</h2>
                                        <p>
                                            BRIIE Consulting Limited is a full service, multi-disciplinary and fully integrated strategy advisory-based firm committed to redefining possibilities for our clients. With a dynamic team of strategy advisors, analysts, and innovators, we provide cutting-edge solutions tailored to meet the unique challenges of today's rapidly evolving business landscape.
                                        </p>
                                        <p>
                                            Our reputation rests not only on the varied and sizeable expertise of our professionals, but it also reflects our unwavering commitment to provide our clients maximum value from the services we offer. At Briie Consulting, we measure our success by the success of our clients.
                                        </p>
                                    </div>
                                    <p className="text">Our culture fosters and strives for innovation, creativity, and business
                                        expertise,
                                        with a strong client-cantered focus. Every day, we cultivate an entrepreneurial
                                        environment that is both flexible and supportive.</p>
                                    {/* <p className="text">{`Call us 24/7. Let’s start fighting together.`}</p>
                                    <h4 className="number">
                                        <a href="tel:3333-000-000" className="hover-link">3333-000-000</a>
                                        <span>Or</span>
                                        <a href="tel:3333-000-000" className="hover-link">3333-000-000</a>
                                    </h4>
                                    <div className="info">
                                        <img src="images/about/about-six-sing.png" alt="sing-image" />
                                        <div>
                                            <h6>Harry Oliver,</h6>
                                            <p>CEO of Stratify Business Consulting</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
