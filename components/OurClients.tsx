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
                        <img src="/clients/afdb.png" alt="image" className="client-image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="/clients/environment.png" alt="image" className="client-image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="/clients/naseni.png" alt="image" className="client-image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="/clients/nnpc.png" alt="image" className="client-image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="/clients/sokoto.png" alt="image" className="client-image" />
                    </a>
                    <a href="#0" className="brand-six__item">
                        <img src="/clients/water.png" alt="image" className="client-image" />
                    </a>
                </div>

                <div className="brand-six__wrp wrp-bottom">
                    <a href="#0" className="brand-six__item">
                        <img src="/clients/worldbank.png" alt="image" className="client-image" />
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
            <br />
            <br />
        </section>
    )
}