import PageHero from '@/components/PageHero'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <PageHero />
            <section className="team-five-area pt-120 pb-120">
                <div className="container-lg">
                    <div className="row g-4 g-lg-5">


                        {new Array(5).fill(null).map((_, index) => {
                            return <div key={`team-member-${index}`} className="col-sm-6 col-xl-4 wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="team__item">
                                    <div className="team__image">
                                        <img src="images/team/team-four-image1.jpg" alt="image" />
                                    </div>
                                    <h4><Link className="hover-link" href={`/leadership/${index}`}>Brooklyn Simmons</Link></h4>
                                    <span>Marketing Leader</span>
                                </div>
                            </div>
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
