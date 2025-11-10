import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import AboutMain from "./components/AboutMain";
import OurSolutions from "./components/OurSolutions";
// import CommunityImpact from "./components/CommunityImpact";
import WhyUs from "./components/WhyUs";
import OurCommunity from "./components/OurCommunity";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-6rem)]">
      <HeroSection />
      <VisionMission />
      <AboutMain />
      <OurSolutions />
      {/* <CommunityImpact /> */}
      <WhyUs />
      <OurCommunity />
      <Testimonials />
      <ContactUs />
      {/* <Footer /> */}
    </div>
  );
}
