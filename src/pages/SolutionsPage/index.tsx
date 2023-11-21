import React from "react";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import LandingFooter from "../../components/LandingFooter/LandingFooter";
import HeroSection from "./HeroSection";
import Capabilties from "./Capabilties";
import InstitutionalSolutions from "./InstitutionalSolutions";

type Props = {};

const SolutionsPage = (props: Props) => {
  return (
    <>
      <LandingHeader />
      <main>
        <HeroSection />
        <Capabilties />
        <InstitutionalSolutions />
      </main>
      <LandingFooter />
    </>
  );
};

export default SolutionsPage;
