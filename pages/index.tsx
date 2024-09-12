import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Home/Navbar";
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Home/Footer";
import About from "./about";
import Portfolio from "./portfolio";
import Clients from "./clients";
import Contact from "./contact";


// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
