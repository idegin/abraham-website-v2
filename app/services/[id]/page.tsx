import PageHero from "@/components/PageHero";
import { createClient } from "@/prismicio";
import { ServicesDocumentDataSubServicesItem } from "@/prismicio-types";
import { getServiceBySlug } from "@/utils/queries/services.query";
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { id } = await params;
    const client = createClient();
    const service = await getServiceBySlug(client, id);

    if (!service) {
        return {
            title: "Service Not Found",
            description: "The requested service could not be found.",
        };
    }

    const title = service.data.title || "Service";
    const description =
        service.data.featured_descriptioin ||
        service.data.title ||
        "Professional consulting services";

    return {
        title: `${title} | Briie Services`,
        description,
        keywords: [
            title,
            "consulting",
            "services",
            "business",
            "professional",
        ].filter(Boolean),
        openGraph: {
            title: `${title} | Briie Services`,
            description,
            type: "website",
            images: service.data.featured_image?.url
                ? [
                      {
                          url: service.data.featured_image.url,
                          width: 1200,
                          height: 630,
                          alt: service.data.featured_image.alt || title,
                      },
                  ]
                : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | Briie Services`,
            description,
            images: service.data.featured_image?.url
                ? [service.data.featured_image.url]
                : undefined,
        },
        alternates: {
            canonical: `/services/${id}`,
        },
    };
}

export default async function page({ params }: PageProps) {
    const { id } = await params;
    const client = createClient();
    const service = await getServiceBySlug(client, id);

    if (!service) {
        return notFound();
    }

    return (
        <>
            <PageHero
                title='Services'
                breadcrumb={[
                    { label: "Services", href: "/services" },
                    {
                        label: service?.data.title || "",
                        href: `/services/${service?.uid}`,
                    },
                ]}
            />
            <section className='choose-seven-area'>
                {service?.data.sub_services.map((subService, index) => (
                    <EachServicesDetailsSection
                        key={index}
                        reversed={index % 2 === 0}
                        subService={subService}
                    />
                ))}
                {/* <EachServicesDetailsSection />
                <EachServicesDetailsSection reversed />
                <EachServicesDetailsSection /> */}
            </section>
        </>
    );
}

const EachServicesDetailsSection = ({
    reversed,
    subService,
}: {
    reversed?: boolean;
    subService: ServicesDocumentDataSubServicesItem;
}) => {
    return (
        <div className='row g-0'>
            <div
                className={`col-lg-6 ${reversed ? "order-1 order-lg-2" : "order-2 order-lg-1"}`}
            >
                <div className='choose-seven__wrp'>
                    <div className='wrp'>
                        <div className='section-header mb-50'>
                            <h6>{subService?.subtitle}</h6>
                            <h2 className='wow splt-txt' data-splitting>
                                {subService?.title}
                            </h2>
                        </div>
                        <div className='row g-4'>
                            <p>{subService?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`col-lg-6 ${reversed ? "order-2 order-lg-1" : "order-1 order-lg-2"}`}
            >
                <div className='choose-seven__image'>
                    <img
                        src={subService?.image.url || ""}
                        alt={subService?.image.alt || ""}
                    />
                </div>
            </div>
        </div>
    );
};
