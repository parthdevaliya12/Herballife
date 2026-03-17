// import React from "react";

// import Hero from "../Components/Hero";
// import Benefits from "../Components/Benefits";
// import Products from "../Components/Products";
// import Contact from "../Components/Contact";
// import Footer from "../Footer";

// const Navbar = React.lazy(() => import("../Components/Navbar"));

// const Home = () => {
//   return (
//     <div>
//       <React.Suspense fallback={<div>Loading...</div>}>
//         <Navbar />
//       </React.Suspense>

//       <Hero />
//       <Benefits />
//       <Products />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Benefits from "../Components/Benefits";
import Products from "../Components/Products";
import Contact from "../Components/Contact";
import Footer from "../Footer";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // loader time

    return () => clearTimeout(timer);
  }, []);

  // Loader screen
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-(--background)">
        <div className="w-12 h-12 border-4 border-(--primary-color) border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <Hero />

      <Benefits />

      <Products />

      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
