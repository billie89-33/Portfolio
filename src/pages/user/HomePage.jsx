import React from 'react'
import HeroBanner from '../../components/features/Home/HeroBanner'
import ProgrammingLanguage from '../../components/features/Home/ProgrammingLanguage'
import DevelopmentTools from '../../components/features/Home/DevelopmentTools'
import FeaturedProject from '../../components/features/Home/FeaturedProject'

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <ProgrammingLanguage />
      <DevelopmentTools />
      <FeaturedProject />
    </div>
  )
}
