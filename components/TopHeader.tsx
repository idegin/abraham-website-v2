import React from 'react'

export default function TopHeader() {
    return (
        <div className="header-top-area d-none d-lg-block">
            <div className="container">
                <div className="header-top__wrp">
                    <ul className="header-top__links">
                        <li><i className="fa-light fa-location-dot"></i> <a href="#0">121 King Street, Melbourne</a></li>
                        <li><i className="fa-light fa-envelope-open-text"></i> <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#731a1d151c5d101c1e03121d0a33141e121a1f5d101c1e"><span className="__cf_email__" data-cfemail="375e5951581954585a4756594e77505a565e5b1954585a">[email&#160;protected]</span></a></li>
                    </ul>

                    <div className="header-top__socials">
                        <a href="#">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.4023 1.40625H13.4707L8.95313 6.56836L14.2676 13.5938H10.1074L6.84668 9.33398L3.12012 13.5938H1.04883L5.87988 8.07129L0.785156 1.40625H5.05078L7.99512 5.2998L11.4023 1.40625ZM10.6758 12.3574H11.8213L4.42676 2.57812H3.19629L10.6758 12.3574Z"
                                    fill="white" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1349_8256)">
                                    <path
                                        d="M5.66164 15V8.1583H7.9572L8.3016 5.49117H5.66164V3.7886C5.66164 3.01665 5.87513 2.49057 6.98336 2.49057L8.39452 2.48999V0.104422C8.15048 0.072709 7.31278 0 6.33778 0C4.30183 0 2.90798 1.24272 2.90798 3.52445V5.49117H0.605469V8.1583H2.90798V15H5.66164Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1349_8256">
                                        <rect width="9" height="15" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#"><svg width="13" height="15" viewBox="0 0 13 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.4991 13.4999V9.10492C12.4991 6.94492 12.0341 5.29492 9.51414 5.29492C8.29914 5.29492 7.48914 5.95492 7.15914 6.58492H7.12914V5.48992H4.74414V13.4999H7.23414V9.52492C7.23414 8.47492 7.42914 7.46992 8.71914 7.46992C9.99414 7.46992 10.0091 8.65492 10.0091 9.58492V13.4849H12.4991V13.4999Z"
                                fill="white" />
                            <path d="M0.695312 5.49023H3.18531V13.5002H0.695312V5.49023Z" fill="white" />
                            <path
                                d="M1.94 1.5C1.145 1.5 0.5 2.145 0.5 2.94C0.5 3.735 1.145 4.395 1.94 4.395C2.735 4.395 3.38 3.735 3.38 2.94C3.38 2.145 2.735 1.5 1.94 1.5Z"
                                fill="white" />
                        </svg>
                        </a>
                        <a className="pe-0" href="#"><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1349_8259)">
                                <path
                                    d="M11.2497 0H3.74991C1.68764 0 0 1.68764 0 3.74991V11.2501C0 13.3118 1.68764 15 3.74991 15H11.2497C13.312 15 14.9996 13.3118 14.9996 11.2501V3.74991C14.9996 1.68764 13.312 0 11.2497 0ZM13.7496 11.2501C13.7496 12.6282 12.6286 13.75 11.2497 13.75H3.74991C2.37163 13.75 1.25003 12.6282 1.25003 11.2501V3.74991C1.25003 2.37145 2.37163 1.25003 3.74991 1.25003H11.2497C12.6286 1.25003 13.7496 2.37145 13.7496 3.74991V11.2501Z"
                                    fill="white" />
                                <path
                                    d="M11.5625 4.37495C12.0802 4.37495 12.5 3.95523 12.5 3.43748C12.5 2.91972 12.0802 2.5 11.5625 2.5C11.0447 2.5 10.625 2.91972 10.625 3.43748C10.625 3.95523 11.0447 4.37495 11.5625 4.37495Z"
                                    fill="white" />
                                <path
                                    d="M7.49991 3.75C5.42845 3.75 3.75 5.42863 3.75 7.49991C3.75 9.57041 5.42845 11.2502 7.49991 11.2502C9.57078 11.2502 11.2498 9.57041 11.2498 7.49991C11.2498 5.42863 9.57078 3.75 7.49991 3.75ZM7.49991 10.0002C6.11936 10.0002 5.00003 8.88082 5.00003 7.49991C5.00003 6.119 6.11936 5.00003 7.49991 5.00003C8.88045 5.00003 9.99979 6.119 9.99979 7.49991C9.99979 8.88082 8.88045 10.0002 7.49991 10.0002Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1349_8259">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
