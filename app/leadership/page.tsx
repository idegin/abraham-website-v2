import PageHero from "@/components/PageHero";
import { createClient } from "@/prismicio";
import { getTeams } from "@/utils/queries/team.query";
import Link from "next/link";
import React from "react";

export default async function page() {
    const client = createClient();
    const teams = await getTeams(client, 6, 1);
    return (
        <>
            <PageHero
                imageURL={'/ai/leadership.jpg'}
                title='Leadership'
                breadcrumb={[{ label: "Leadership", href: "/leadership" }]}
            />
            <section className='team-five-area pt-120 pb-120'>
                <div className='container-lg'>
                    <div className='row g-4 g-lg-5'>
                        {teams.map((team, index) => {
                            return (
                                <div
                                    key={`team-member-${index}`}
                                    className='col-sm-6 col-xl-4 wow fadeInLeft'
                                    data-wow-delay='00ms'
                                    data-wow-duration='1500ms'
                                >
                                    <div className='team__item'>
                                        <div className='team__image'>
                                            <img
                                                src={team.data.image.url || ""}
                                                alt={
                                                    team.data.image.alt ||
                                                    team.data.name ||
                                                    ""
                                                }
                                            />
                                        </div>
                                        <h4>
                                            <Link
                                                className='hover-link'
                                                href={`/leadership/${team.uid}`}
                                            >
                                                {team.data.name}
                                            </Link>
                                        </h4>
                                        <span>{team.data.designation}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
