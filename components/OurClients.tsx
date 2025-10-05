'use client';
import React from 'react'
import Image from "next/image";

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
                        <Image src="/clients/afdb.png" alt="image" width={200} height={100} />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <Image src="/clients/environment.png" alt="image" width={150} height={100} />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <Image src="/clients/naseni.png" alt="image" width={150} height={100} />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <Image src="/clients/nnpc.png" alt="image" width={150} height={90} />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <Image src="/clients/sokoto.png" alt="image" width={150} height={120} />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <Image src="/clients/water.png" alt="image" width={150} height={120} />
                    </a>
                </div>

                <div className="brand-six__wrp wrp-bottom">
                    <a href="#0" className="brand-six__item">
                        <Image src="/clients/worldbank.png" alt="image" width={200} height={120} />
                    </a>
                    {/*<a href="#0" className="brand-six__item">*/}
                    {/*    <img src="images/brand/brand-six-image7.png" alt="image" />*/}
                    {/*</a>*/}
                    {/*<a href="#0" className="brand-six__item">*/}
                    {/*    <img src="images/brand/brand-six-image8.png" alt="image" />*/}
                    {/*</a>*/}
                    {/*<a href="#0" className="brand-six__item">*/}
                    {/*    <img src="images/brand/brand-six-image9.png" alt="image" />*/}
                    {/*</a>*/}
                    {/*<a href="#0" className="brand-six__item">*/}
                    {/*    <img src="images/brand/brand-six-image10.png" alt="image" />*/}
                    {/*</a>*/}
                </div>
                {/*<div className="brand-six__text mt-50">*/}
                {/*    <h5 className="text">2.6k Companies and Individuals Have Trusted Us. <a href="#0"*/}
                {/*        className="hover-link">View All Clients <i className="fa-solid fa-chevron-right"></i></a></h5>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}