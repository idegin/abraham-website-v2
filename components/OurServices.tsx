"use client";
import React, { useState } from "react";
import { ServicesDocument } from "@/prismicio-types";
import Link from "next/link";
interface OurServicesProps {
    services: ServicesDocument[];
}

export default function OurServices({ services }: OurServicesProps) {
    const [activeService, setActiveService] = useState<ServicesDocument | null>(
        services?.length > 0 ? services[0] : null
    );
    const handleServiceClick = (service: ServicesDocument) => {
        setActiveService(service);
    };
    return (
        <section
            style={{ overflow: "auto" }}
            className='hzAccordion-area pt-130 pb-130'
        >
            <div className='container'>
                <div className='section-header mb-60'>
                    <h2 className='wow splt-txt text-white' data-splitting>
                        Our Services
                    </h2>
                </div>
                <div className='hzAccordion__wrp'>
                    {services.map((service, index) => (
                        <div
                            className={`hzAccordion__item  wow fadeInLeft ${activeService?.uid === service.uid ? "active" : ""}`}
                            data-wow-delay='00ms'
                            data-wow-duration='1500ms'
                        >
                            <div className='head'>
                                <h3 className='head-title'>
                                    <span className='title'>
                                        {service.data.title}
                                    </span>{" "}
                                    <span className='number'>
                                        {(index + 1)
                                            .toString()
                                            .padStart(2, "0")}
                                    </span>
                                </h3>
                            </div>
                            <div className='content'>
                                <div className='wrp'>
                                    <div className='content-wrp'>
                                        <p className='text'>
                                            {service.data.featured_descriptioin}
                                        </p>
                                        <Link
                                            className='arry-btn'
                                            href={`/services/${service.uid}`}
                                        >
                                            <i className='fa-thin fa-arrow-up-right'></i>
                                        </Link>
                                    </div>
                                    <div className='shape'>
                                        <img
                                            src='images/shape/hz-accordion-shape.png'
                                            alt='shape'
                                            height={100}
                                            style={{
                                                height: "150px",
                                            }}
                                        />
                                    </div>
                                    <div className='image'>
                                        <img
                                            src={
                                                service.data.featured_image
                                                    .url || ""
                                            }
                                            alt={
                                                service.data.featured_image
                                                    .alt ||
                                                service.data.title ||
                                                ""
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
