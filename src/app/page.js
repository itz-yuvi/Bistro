import Image from "next/image";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Experience/>
      <Gallery/>
      
      <Testimonials/>
      <Footer/>
     
    </div>
  );
}
