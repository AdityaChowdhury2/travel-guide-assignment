import Navbar from "../components/Navbar";
// import Faq from "../components/Faq";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Breadcrumbs from "../ui/Breadcrumbs";
import AtAGlanceSection from "../components/AtAGlanceSection";
import OtherCitiesSection from "../components/OtherCitiesSection";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <div className="container mx-auto mt-32 mb-10">
        <Breadcrumbs
          className="mx-5"
          items={[
            { label: "Home", link: "/" },
            { label: "Cities", link: "#" },
            { label: "Rome", link: "#" },
          ]}
        />
        <AtAGlanceSection />
        <OtherCitiesSection />
      </div>
      <Footer />
      {/* <Faq /> */}
    </>
  );
};

export default Home;
