'use client'

import React from 'react'
import { useTemplateScripts } from '../hooks/useTemplateScripts'
import HeroSection from '@/components/HeroSection';
import AboutUsSection from '@/components/AboutUsSection';

export default function Page() {
  useTemplateScripts();

  return (
    <>
      <HeroSection />
      <AboutUsSection />
    </>
  )
}
