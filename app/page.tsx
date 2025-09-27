'use client'

import React from 'react'
import { useTemplateScripts } from '../hooks/useTemplateScripts'
import HeroSection from '@/components/HeroSection';
import OurServices from '@/components/OurServices';
import FAQ from '@/components/FAQ';
import AboutUsSection from '@/components/AboutUsSection';
import OurClients from '@/components/OurClients';
import WhyChooseUs from '@/components/WhyChooseUs';
import HomeBlogSection from '@/components/HomeBlogSection';

export default function Page() {
  useTemplateScripts();

  return (
    <>
      <HeroSection />
      <AboutUsSection/>
      <OurClients/>
      <OurServices />
      <FAQ />
      <WhyChooseUs />
      <HomeBlogSection />
    </>
  )
}
