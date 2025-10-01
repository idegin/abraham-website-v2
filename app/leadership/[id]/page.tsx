import PageHero from '@/components/PageHero'
import React from 'react'

export default function page() {
    return (
        <>
            <PageHero />
            <section className="team-details">
                <div className="container-lg pt-130 pb-100">
                    <div className="team-five__wrp">
                        <div className="team-details__top pb-70">
                            <div className="row align-items-lg-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__top-left">
                                        <div className="team-details__top-img"> <img src="/images/resource/team-details.jpg"
                                            alt="" />
                                            <div className="team-details__big-text"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__top-right">
                                        <div className="team-details__top-content">
                                            <h3 className="team-details__top-name">Alen Hispro</h3>
                                            <p className="team-details__top-title">Chief Attorney</p>
                                            <p className="team-details__top-text-1 mt-5">I help my clients stand out and they
                                                help me grow.</p>
                                            <div className="team-details-contact mb-30">
                                                <h5 className="mb-0">Email Address</h5>
                                                <div className=""><span><a href="https://html.kodesolution.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="87e9e2e2e3efe2ebf7c7fee8f2f5e3e8eae6eee9a9e4e8ea">[email&#160;protected]</a></span></div>
                                            </div>
                                            <div className="team-details-contact mb-30">
                                                <h5 className="mb-0">Phone Number</h5>
                                                <div className=""><span>+012-3456-789</span></div>
                                            </div>
                                            <div className="team-details-contact">
                                                <h5 className="mb-0">Web Address</h5>
                                                <div className=""><span>www.yourdomain.com</span></div>
                                            </div>
                                            <div className="team-details__social">
                                                <a className="text-white" href="#"><i className="fab fa-twitter"></i></a>
                                                <a className="text-white" href="#"><i className="fab fa-facebook"></i></a>
                                                <a className="text-white" href="#"><i className="fab fa-pinterest-p"></i></a>
                                                <a className="text-white" href="#"><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}
