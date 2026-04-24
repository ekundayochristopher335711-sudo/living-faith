import FluidBackground from "@/components/FluidBackground";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceTimesSection from "@/components/ServiceTimesSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import LeadershipSection from "@/components/LeadershipSection";
import SermonsSection from "@/components/SermonsSection";
import TestimoniesSection from "@/components/TestimoniesSection";
import EventsSection from "@/components/EventsSection";
import GivingSection from "@/components/GivingSection";
import ImNewSection from "@/components/ImNewSection";
import PrayerRequestSection from "@/components/PrayerRequestSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <div className="relative">
      <FluidBackground />
      <ScrollProgress />
      <Navbar />
      <WhatsAppFAB />
      <HeroSection />
      <AboutSection />
      <ServiceTimesSection />
      <LiveStreamSection />
      <DepartmentsSection />
      <LeadershipSection />
      <SermonsSection />
      <TestimoniesSection />
      <EventsSection />
      <GivingSection />
      <ImNewSection />
      <GallerySection />
      <PrayerRequestSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
