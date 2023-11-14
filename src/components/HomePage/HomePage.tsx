import React from "react";
import LandingHeader from "../LandingHeader/LandingHeader";
import BannerSection from "../BannerSection/BannerSection";
import TheProblemSection from "../TheProblemSection/TheProblemSection";
import KeyFeaturesSection from "../KeyFeaturesSection/KeyFeaturesSection";
import PlatformSection from "../PlatformSection/PlatformSection";
import CustomersSection from "../CustomersSection/CustomersSection";
import RoseAISection from "../RoseAISection/RoseAISection";
import IntegrationsAndDataSection from "../IntegrationsAndDataSection/IntegrationsAndDataSection";
import CustomerQuotesSection from "../CustomerQuotesSection/CustomerQuotesSection";
import LandingFooter from "../LandingFooter/LandingFooter";

const HomePage = () => {
  return (
    <div>
      <LandingHeader />
      <BannerSection />
      <TheProblemSection />
      <PlatformSection />
      <KeyFeaturesSection />
      <CustomersSection />
      <RoseAISection />
      <IntegrationsAndDataSection />
      <CustomerQuotesSection />
      <LandingFooter />
    </div>
  );
};

export default HomePage;
