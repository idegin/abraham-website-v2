import React from 'react'

export default function HeroSection() {
    return (
        <>
            <section className="banner-seven-area" data-background="images/banner/banner-seven-bg.jpg">
                <div className="banner-seven__wrp">
                    <div className="banner-seven__content">
                        <h1 className="title wow splt-txt-bounce" data-splitting>
                            Redefining Possibilities
                            </h1>
                            <h6 className='title'>
                                At Briie our purpose is succintly captured in one powerful phrase<br/> <strong><i>"Providing simple solutions to complex problems"</i></strong>
                            </h6>
                        <a href="page-about.html" className="arry-btn"><i className="fa-thin fa-arrow-right wow fadeInLeft"
                            data-wow-delay="500ms" data-wow-duration="1500ms"></i></a>
                    </div>
                </div>
                <div className="banner-seven__image">
                    <img className="wow fadeInUpBig" src="images/banner/banner-seven-image.png" alt="image" />
                    <div className="text1">
                        Stratify
                    </div>
                    <div className="text2">
                        BUSINESS
                    </div>
                </div>
            </section>
        </>
    )
}
