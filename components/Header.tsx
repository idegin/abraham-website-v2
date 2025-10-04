import Link from 'next/link'
import React from 'react'

const navLinks: {
    label: string;
    href: string;
}[] = [
        { label: 'Home', href: '/' },
        { label: 'Leadership Team', href: '/leadership' },
        { label: 'Services', href: '/services' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ];

export default function Header() {
    return (
        <header className="header-area header-two-area">
            <div className="container">
                <div className="header__main">
                    <Link href="/" className="logo">
                        <img src="/brand-light.png" alt="logo" />
                    </Link>
                    <div className="main-menu main-menu-light">
                        <nav>
                            <ul>
                                {
                                    navLinks.map((link) => (
                                        <li key={link.href} className="megamenu-li">
                                            <Link href={link.href}>{link.label}</Link>
                                        </li>
                                    ))
                                }
                                {/* <li className="megamenu-li">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>


                                <li><Link href="contact.html">Contact</Link></li> */}
                            </ul>
                        </nav>
                        <div className="menu-btns light">
                            {/* <button className="search-trigger d-none d-lg-block">
                                <i className="fa-light fa-magnifying-glass"></i>
                            </button> */}
                            <button className="menubars menubars-light" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#menubar">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
