import PageHero from "@/components/PageHero";
import Pagination from "@/components/Pagination";
import { createClient } from "@/prismicio";
import { getServices } from "@/utils/queries/services.query";
import Link from "next/link";
import React from "react";

interface PageProps {
    searchParams: Promise<{
        page?: string;
    }>;
}
export default async function page({ searchParams }: PageProps) {
    const { page } = await searchParams;
    const client = createClient();
    const currentPage = Number(page || 1);
    const { services, totalPages } = await getServices(client, 6, currentPage);
    return (
        <>
            <PageHero
                title='Services'
                breadcrumb={[{ label: "Services", href: "/services" }]}
            />
            <section className='project-three-area pt-130 pb-130'>
                <div className='project-three__wrp'>
                    <div className='row g-4'>
                        {services.map((service, index) => {
                            return (
                                <div
                                    key={service.uid}
                                    className='col-lg-6 col-xl-4'
                                >
                                    <div className='project-three__item'>
                                        <div className='project-three__content'>
                                            <div className='shape'>
                                                <img
                                                    src='images/shape/project-three-item-shape.png'
                                                    alt={
                                                        service.data
                                                            .featured_image
                                                            .alt ||
                                                        service.data.title ||
                                                        ""
                                                    }
                                                />
                                            </div>
                                            <div className='icon'>
                                                <svg
                                                    width='61'
                                                    height='50'
                                                    viewBox='0 0 61 50'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <g clip-path='url(#clip0_356_27101)'>
                                                        <path
                                                            d='M30.6228 50.0005C30.4122 50.0005 30.2071 49.9106 30.0574 49.7476L0.211536 16.9406C-0.0212888 16.6821 -0.0656364 16.2944 0.10621 15.991L7.82822 2.05688C7.96681 1.80966 8.2218 1.65234 8.49898 1.65234H12.5568C12.9836 1.65234 13.3329 2.01193 13.3329 2.4558C13.3329 2.89967 12.9836 3.25927 12.5568 3.25927H8.948L1.73598 16.272L30.6228 48.0227L59.2547 16.2944L51.2223 3.26488H30.5009C30.074 3.26488 29.7248 2.90529 29.7248 2.46142C29.7248 2.01755 30.074 1.65796 30.5009 1.65796H51.6436C51.9096 1.65796 52.1536 1.79843 52.2977 2.02879L60.8789 15.9629C61.0674 16.272 61.0341 16.6765 60.7902 16.9406L31.1883 49.7476C31.0386 49.9106 30.8335 50.0005 30.6228 50.0005Z'
                                                            fill='white'
                                                        />
                                                        <path
                                                            d='M43.6159 35.599C43.4164 35.599 43.2168 35.5203 43.0671 35.363L12.2512 3.02228C11.9518 2.70764 11.9518 2.19634 12.2567 1.88732C12.5616 1.5783 13.0494 1.5783 13.3543 1.89294L44.1647 34.2337C44.4641 34.5483 44.4641 35.0596 44.1592 35.3686C44.0095 35.5203 43.8155 35.599 43.6159 35.599Z'
                                                            fill='white'
                                                        />
                                                        <path
                                                            d='M24.841 6.42231C23.1336 6.42231 21.7422 4.98395 21.7422 3.21408C21.7422 1.44422 23.1336 0.00585938 24.841 0.00585938C26.5483 0.00585938 27.9398 1.44422 27.9398 3.21408C27.9453 4.98395 26.5539 6.42231 24.841 6.42231ZM24.841 1.60716C23.9873 1.60716 23.2888 2.32634 23.2888 3.21408C23.2888 4.10183 23.9817 4.82101 24.841 4.82101C25.6947 4.82101 26.3931 4.10183 26.3931 3.21408C26.3931 2.32634 25.7002 1.60716 24.841 1.60716Z'
                                                            fill='white'
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath>
                                                            <rect
                                                                width='61'
                                                                height='50'
                                                                fill='white'
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className='content'>
                                                <h4>
                                                    {(index + 1)
                                                        .toString()
                                                        .padStart(2, "0")}
                                                </h4>
                                                <h4>
                                                    <Link
                                                        className='hover-link-light'
                                                        href={`/services/${service.uid}`}
                                                    >
                                                        {service.data.title}
                                                    </Link>
                                                </h4>
                                                <p className='mt-15 mb-25'>
                                                    {
                                                        service.data
                                                            .featured_descriptioin
                                                    }
                                                </p>
                                                <Link
                                                    href={`/services/${service.uid}`}
                                                    className='arry-btn'
                                                >
                                                    <i className='fa-light fa-arrow-up-right'></i>
                                                </Link>
                                            </div>
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
                            );
                        })}
                    </div>

                    {totalPages > 1 && (
                        <div className='mt-5'>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                baseUrl='/services'
                            />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
