import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
     <footer className="footer-two-area pt-130">
        <div className="container">
            <div className="footer-two__wrp">
                <div className="footer-two__top">
                    <h2 className="title"><a href="/contact">Get in Touch<i className="fa-thin fa-arrow-up-right"></i></a>
                    </h2>
                </div>
                <div className="footer-two__item-wrp">
                    <div className="row g-5">
                        <div className="col-sm-6 col-xl-3">
                            <div className="footer-two__item">
                                <Link href="/" className="logo">
                                    <img src="/brand-light.png" width={200} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-5">
                            <div className="footer-two__item-adress">
                                <h4 className="title">Address</h4>
                                <ul>
                                    <li>
                                        <h4 className="adress-text"><a href="#0">No 7, 6th Avenue Gwarinpa, Abuja</a>
                                        </h4>
                                    </li>
                                    <li>
                                        <h4 className="adress-text"><a href="tel:+2349063504256">+234 9063504256</a></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-2">
                            <div className="footer-two__item">
                                <h4 className="title">Useful Links</h4>
                                <ul>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-xl-2">
                            <div className="footer-two__item">
                                <h4 className="title">Browse</h4>
                                <ul>
                                    <li><a href="#0">FAQS</a></li>
                                    <li><a href="#0">Term & Conditions</a></li>
                                    <li><a href="#0">Privacy policy</a></li>
                                    <li><a href="#0">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-two__bottom">
                    <div className="socials">
                        {/* <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa fa-x"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a> */}
                    </div>
                    <p className="text">&copy; 2025 <a href="/">Briie</a></p>
                </div>
            </div>
        </div>
        <div className="footer-two__rectangle-left">
            <div className="item-one wow"></div>
            <div className="item-two wow"></div>
            <div className="item-three wow"></div>
        </div>
        <div className="footer-two__rectangle-right">
            <div className="item-one wow"></div>
            <div className="item-two wow"></div>
            <div className="item-three wow"></div>
        </div>
    </footer>
  )
}