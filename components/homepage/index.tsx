"use client";
import React from "react";
import { useTemplateScripts } from "@/hooks/useTemplateScripts";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";
import FAQ from "@/components/FAQ";
import AboutUsSection from "@/components/AboutUsSection";
import OurClients from "@/components/OurClients";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeBlogSection from "@/components/HomeBlogSection";
import { BlogPostsDocument, ServicesDocument } from "@/prismicio-types";

interface HomePageMainProps {
    services: ServicesDocument[];
    blogPosts: BlogPostsDocument[];
}
export default function HomePageMain({
    services,
    blogPosts,
}: HomePageMainProps) {
    useTemplateScripts();

    console.log(services, blogPosts);

    return (
        <>
            <HeroSection />
            <AboutUsSection />
            <WhyChooseUs />
            <OurServices />
            <HomeBlogSection />
            <OurClients />
            {/* <FAQ /> */}
        </>
    );
}
