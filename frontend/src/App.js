import Banner from "./components/Banner";
import DrivingProperty from "./components/DrivingProperty";
import DrivingPropertySection from "./components/DrivingPropertyInquiries";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NavigatingSection from "./components/NavigatingSection";
import OurExpertise from "./components/OurExpertise";
import ServiceSection from "./components/ServiceSection";
import WhatOurPharma from "./components/WhatOurPharma";
import YourPeaceOfMind from "./components/YourPeaceOfMind";
import Faq from "./components/Faq";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <ServiceSection />
      <NavigatingSection />
      <DrivingPropertySection />
      <DrivingProperty />
      <OurExpertise />
      <YourPeaceOfMind />
      <WhatOurPharma />
      <Faq />
      <ContactSection />
      <Footer />
    </>
  )
}