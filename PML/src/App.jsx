import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import Services from "./sections/Services";
import ClientLogos from "./sections/ClientLogos";
import AboutSection from "./sections/AboutSection";
import TeamSection from "./sections/TeamSection";
import DetailedServices from "./sections/DetailedServices";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <ClientLogos />
      <AboutSection />
      <TeamSection />
      <DetailedServices />
      <Footer />
      <ContactForm />
      <Testimonials />
    </div>
  );
}

export default App;
