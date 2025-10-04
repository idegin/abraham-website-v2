import Link from "next/link";
import React from "react";

type Props = {
    title: string;
    breadcrumb: {
        label: string;
        href: string;
    }[];
};

export default function PageHero({ title, breadcrumb }: Props) {
    return (
        <section
            className='breadcrumb-area'
            data-background='/images/banner/banner-inner.jpg'
        >
            <div className='container'>
                <div className='breadcrumb__wrp'>
                    <div className='breadcrumb__item'>
                        <h1 className='title'>{title}</h1>
                        <ul>
                            <li>
                                <Link href='index.html'>Home</Link>
                            </li>
                            {breadcrumb?.slice(0, -1).map((item) => (
                                <>
                                    <li>
                                        <i className='fa-light fa-angle-right'></i>
                                    </li>
                                    <li key={item.href}>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                </>
                            ))}
                            <li>
                                <i className='fa-light fa-angle-right'></i>
                            </li>
                            <li>{breadcrumb[breadcrumb?.length - 1].label}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
