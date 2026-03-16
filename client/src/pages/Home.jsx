import React from "react";

import Hero from "../Components/Hero";
import Benefits from "../Components/Benefits";
import Products from "../Components/Products";
import Contact from "../Components/Contact";
import Footer from "../Footer";

const Navbar = React.lazy(() => import("../Components/Navbar"));

const Home = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </React.Suspense>

      <Hero />
      <Benefits />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;