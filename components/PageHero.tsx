import React from 'react'

type Props = {}

export default function PageHero({}: Props) {
  return (
      <section className="breadcrumb-area" data-background="/images/banner/banner-inner.jpg">
            <div className="container">
                <div className="breadcrumb__wrp">
                    <div className="breadcrumb__item">
                        <h1 className="title">The Team</h1>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><i className="fa-light fa-angle-right"></i></li>
                            <li>Team</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
  )
}