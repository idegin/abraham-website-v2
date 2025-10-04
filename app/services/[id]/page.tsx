import PageHero from '@/components/PageHero'
import React from 'react'

export default function page() {
    return (
        <>
            <PageHero />
            <section className="choose-seven-area">
                <EachServicesDetailsSection />
                <EachServicesDetailsSection reversed />
                <EachServicesDetailsSection />
            </section>
        </>
    )
}

const EachServicesDetailsSection = ({reversed}:{reversed?: boolean}) => {
    return <div className="row g-0">
        <div className={`col-lg-6 ${reversed ? 'order-1 order-lg-2' : 'order-2 order-lg-1'}`}>
            <div className="choose-seven__wrp">
                <div className="wrp">
                    <div className="section-header mb-50">
                        <h6>Strategic</h6>
                        <h2 className="wow splt-txt" data-splitting>Strategic Investment Plan
                            Tailored to Your Goals</h2>
                    </div>
                    <div className="row g-4">
                        <p>We are continually growing, learning, and improving, and our steadily expanding.
                            Completing
                            200 projects is a
                            significant milestone.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`col-lg-6 ${reversed ? 'order-2 order-lg-1' : 'order-1 order-lg-2'}`}>
            <div className="choose-seven__image">
                <img src="/images/choose/choose-seven-image3.jpg" alt="image" />
            </div>
        </div>
    </div>
}
