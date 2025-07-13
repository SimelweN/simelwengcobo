import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Projects";
import Projects from "@/components/ContentManager";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
