import About from "../About/About";
import Brands from "../Brands/Brands";
import Hero from "../Hero/Hero";
import Package from "../Package/Package";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="max-w-7xl border border-teal-200 mx-auto">
      {/* Stayed Home Component Here!! */}

      <Hero />
      <About />
      <Brands />
      <Services />
      <Package />
    </div>
  );
};

export default Home;
