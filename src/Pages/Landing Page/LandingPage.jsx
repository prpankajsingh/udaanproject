import React from "react";
import Media from "react-media";
import Goals from "../../Components/LandingPage/Goals/Goals";
import Footer from "../../Components/LandingPage/Footer/Footer";
import Events from "../../Components/LandingPage/Events/Events";
import Header from "../../Components/LandingPage/Header/Header";
import Video from "../../Components/LandingPage/Video Section/Video";
import Contactus from "../../Components/LandingPage/Contact us/Contactus";
import MobileHeader from "../../Components/LandingPage/Header/MobileHeader";
import Newsletter from "../../Components/LandingPage/Newsletter/Newsletter";
import Statistics from "../../Components/LandingPage/Statistics/Statistics";
import NewsSection from "../../Components/LandingPage/NewsSection/NewsSection";
import WhatTheySay from "../../Components/LandingPage/What they say/WhatTheySay";
import LandingBanner from "../../Components/LandingPage/LandingBanner/LandingBanner";

function LandingPage() {
  return (
    <div>
      <Media query={{ maxWidth: 800 }}>
        {(matches) =>
          matches ? (
            <>
              <MobileHeader />
            </>
          ) : (
            <>
              <Header />
            </>
          )
        }
      </Media>

      <LandingBanner />
      <Video />
      <Statistics />
      <Events />
      <Goals />
      <NewsSection />
      <WhatTheySay />
      <Contactus />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default LandingPage;
