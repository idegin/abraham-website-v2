import Link from 'next/link'
import React from 'react'

export default function NoteFound() {
    return (
        <section className="">
            <div className="auto-container pt-120 pb-70">
                <div className="blog__wrp">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-page__inner">
                                <div className="error-page__title-box">
                                    <img src="images/resource/404.jpg" alt="" />
                                    <h3 className="error-page__sub-title">Page not found!</h3>
                                </div>
                                <p className="error-page__text">Sorry we can't find that page! The page you are looking
                                    <br /> for
                                    was never existed.</p>
                                <Link href="/" className="theme-btn btn-one shop-now">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
