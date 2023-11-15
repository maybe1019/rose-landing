import React from "react";
import LandingHeader from "../../components/LandingHeader/LandingHeader";
import BannerSection from "../../components/BannerSection/BannerSection";
import TheProblemSection from "../../components/TheProblemSection/TheProblemSection";
import KeyFeaturesSection from "../../components/KeyFeaturesSection/KeyFeaturesSection";
import PlatformSection from "../../components/PlatformSection/PlatformSection";
import CustomersSection from "../../components/CustomersSection/CustomersSection";
import RoseAISection from "../../components/RoseAISection/RoseAISection";
import IntegrationsAndDataSection from "../../components/IntegrationsAndDataSection/IntegrationsAndDataSection";
import CustomerQuotesSection from "../../components/CustomerQuotesSection/CustomerQuotesSection";
import LandingFooter from "../../components/LandingFooter/LandingFooter";

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
