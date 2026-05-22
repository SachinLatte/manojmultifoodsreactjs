import React from "react";
import AboutBanner from "./Sections/AboutBanner/AboutBanner";
import WhoWeAreContent from "./Sections/WhoWeAreContent/WhoWeAreContent";
import ChannelExpertise from "./Sections/ChannelExpertise/ChannelExpertise";
import LeadershipTeam from "./Sections/LeadershipTeam/LeadershipTeam";
import ContactUsSection from "../Home/Sections/ContactUsSection/ContactUsSection";

export default function Whoweare() {
  return (
    <>
      <AboutBanner />
      <WhoWeAreContent />
      <ChannelExpertise />
      <LeadershipTeam />
      <ContactUsSection />
    </>
  );
}
