import React from 'react';
import HeroSection from '../Components/hero';
import ProblemSolutionSection from '../Components/problemsolution';
import ImpactHighlightsSection from '../Components/impact';
import ProgramsOverviewSection from '../Components/programoverviewsection';
import PartnershipCalloutSection from '../Components/partnership';

function Homepage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <ImpactHighlightsSection />
      <ProgramsOverviewSection />
      <PartnershipCalloutSection />
    </>
  );
}

export default Homepage;
