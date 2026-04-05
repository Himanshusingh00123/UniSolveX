import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Feature from "./Feature";
import CTA from "./CTA";
import Faq from "./Faq";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <CTA />
      <Faq />
      <Footer />
    </div>
  );
};
export default Home;
