import PageHero from "@/components/PageHero";
import { createClient } from "@/prismicio";
import { getTeamBySlug } from "@/utils/queries/team.query";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";

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
    const team = await getTeamBySlug(client, id);

    if (!team) {
        return {
            title: "Team Member Not Found",
            description: "The requested team member could not be found.",
        };
    }

    const name = team.data.name || "Team Member";
    const designation = team.data.designation || "";
    const description = `Meet ${name}, ${designation} at Briie. Learn about our leadership team and their expertise.`;
    const image = team.data.image?.url;

    return {
        title: `${name} | Briie Leadership`,
        description,
        keywords: [
            name,
            designation,
            "leadership",
            "team",
            "briie",
            "management",
        ].filter(Boolean),
        openGraph: {
            title: `${name} | Briie Leadership`,
            description,
            type: "profile",
            images: image
                ? [
                      {
                          url: image,
                          width: 400,
                          height: 400,
                          alt: name,
                      },
                  ]
                : undefined,
        },
        twitter: {
            card: "summary",
            title: `${name} | Briie Leadership`,
            description,
            images: image ? [image] : undefined,
        },
        alternates: {
            canonical: `/leadership/${id}`,
        },
    };
}
export default async function page({ params }: PageProps) {
    const { id } = await params;
    const client = createClient();
    const team = await getTeamBySlug(client, id);

    if (!team) {
        return notFound();
    }

    return (
        <>
            <PageHero
                imageURL={team.data.image.url || ""}
                title={team.data.name || ""}
                breadcrumb={[
                    { label: "Leadership", href: "/leadership" },
                    {
                        label: team.data.name || "",
                        href: `/leadership/${team.uid}`,
                    },
                ]}
            />
            <section className='team-details'>
                <div className='container-lg pt-130 pb-100'>
                    <div className='team-five__wrp'>
                        <div className='team-details__top pb-70'>
                            <div className='row align-items-lg-center'>
                                <div className='col-xl-6 col-lg-6'>
                                    <div className='team-details__top-left'>
                                        <div className='team-details__top-img'>
                                            {" "}
                                            <img
                                                src={team.data.image.url || ""}
                                                alt=''
                                            />
                                            <div className='team-details__big-text'></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6'>
                                    <div className='team-details__top-right'>
                                        <div className='team-details__top-content'>
                                            <h3 className='team-details__top-name'>
                                                {team.data.name}
                                            </h3>
                                            <p className='team-details__top-title'>
                                                {team.data.designation}
                                            </p>
                                            <p className='team-details__top-text-1 mt-5'>
                                                I help my clients stand out and
                                                they help me grow.
                                            </p>
                                            {team.data.email.text && <div className='team-details-contact mb-30'>
                                                <h5 className='mb-0'>
                                                    Email Address
                                                </h5>{" "}
                                                <div className=''>
                                                    <span>
                                                        <Link
                                                            href={`mailto:${team.data.email.text}`}
                                                            className='__cf_email__'
                                                            // data-cfemail='87e9e2e2e3efe2ebf7c7fee8f2f5e3e8eae6eee9a9e4e8ea'
                                                        >
                                                            {
                                                                team.data.email
                                                                    .text
                                                            }
                                                        </Link>
                                                    </span>
                                                </div>
                                            </div>}
                                            {team.data.phone_number && (
                                                <div className='team-details-contact mb-30'>
                                                    <h5 className='mb-0'>
                                                        Phone Number
                                                    </h5>
                                                    <div className=''>
                                                        <span>
                                                            {
                                                                team.data
                                                                    .phone_number
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            {team.data.web_address.text && (
                                                <div className='team-details-contact'>
                                                    <h5 className='mb-0'>
                                                        Web Address
                                                    </h5>
                                                    <div className=''>
                                                        <span>
                                                            {
                                                                team.data
                                                                    .web_address
                                                                    .text
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            <div className='team-details__social'>
                                                {team?.data?.social_medial_links?.map(
                                                    (social, index) => (
                                                        <React.Fragment
                                                            key={index}
                                                        >
                                                            {social.linkedin
                                                                ?.text && (
                                                                <a
                                                                    href={
                                                                        social
                                                                            .linkedin
                                                                            .text
                                                                    }
                                                                    target='_blank'
                                                                    rel='noopener noreferrer'
                                                                >
                                                                    <i className='fab fa-linkedin'></i>
                                                                </a>
                                                            )}
                                                            {social.twitter
                                                                ?.text && (
                                                                <a
                                                                    href={
                                                                        social
                                                                            .twitter
                                                                            .text
                                                                    }
                                                                    target='_blank'
                                                                    rel='noopener noreferrer'
                                                                >
                                                                    <i className='fab fa-twitter'></i>
                                                                </a>
                                                            )}
                                                            {social.facebook
                                                                ?.text && (
                                                                <a
                                                                    href={
                                                                        social
                                                                            .facebook
                                                                            .text
                                                                    }
                                                                    target='_blank'
                                                                    rel='noopener noreferrer'
                                                                >
                                                                    <i className='fab fa-facebook'></i>
                                                                </a>
                                                            )}
                                                            {social.instagram
                                                                ?.text && (
                                                                <a
                                                                    href={
                                                                        social
                                                                            .instagram
                                                                            .text
                                                                    }
                                                                    target='_blank'
                                                                    rel='noopener noreferrer'
                                                                >
                                                                    <i className='fab fa-instagram'></i>
                                                                </a>
                                                            )}
                                                        </React.Fragment>
                                                    )
                                                )}
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
    );
}
