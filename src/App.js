
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header/index"
// import NavBar from "./components/navBar/index"
// import Home from "./pages/home"
// import Blog from "./pages/blog"
// import EBook from "./pages/e-book"
// import AllProducts from "./pages/all-products"
// import EKite from "./pages/e-kite"
// import EStories from "./pages/e-stories"
// import AIlounchpad from "./pages/ai-lounchpad"
// import IoTProject from "./pages/iot-project"
// import CodingRobotics from "./pages/coding&robotics"
// import About from "./pages/about"
// import Contact from "./pages/contact"
// import Footer from "./components/Footer/index"
// import Whatsap from "./pages/whatsap"
// import WhatsapLayout from "./components/whatsapLayout"
// import BuildOwnKits from "./pages/buildOwnKits"
// import GalleryPage from "./pages/gallery";
// import AiLounchpadKit from "./pages/ai-lounchpadKit" 
// import GordenOfHornamy from "./pages/GordenOfHornamy"
// import StemMeetAI from "./pages/stemMeetAI"
// import HandsOnAI from "./pages/handsOnAI"
// import AiClassRoom from "./pages/aiClassRoom"
// import EdgeAIEducation from "./pages/edgeAIEducation"
// import OwnAILounchpadKit from "./pages/ownaiLaunchpadKit"
// import DHTSensor from "./pages/dhtSensor"
// import AiChildrenEducation from "./pages/AiChildrenEducation"
// import AIToolTransferming from "./pages/aiToolTransferming"
// import Disclaimer from "./pages/disclaimer"
// import CookiePolicy from"./pages/cookiePolicy"
// import AccessibilityStatement from "./pages/accessibility";
// import TermsAndConditions from "./pages/termsAndConditions";
// import PrivacyPolicy from "./pages/privacyPolicy";



// function App() {
//   return (
//     <><Router>
//       <Header />
//       <NavBar />
//       <Whatsap />
//       <WhatsapLayout />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Blog" element={<Blog />} />
//         <Route path="/gallery" element={<GalleryPage />} />
//         <Route path="products/e-book" element={<EBook />} />
//         <Route path="products/e-book/all-products" element={<AllProducts />} />
//         <Route path="products/e-kite" element={<EKite />} />
//         <Route path="products/e-stories" element={<EStories />} />
//         <Route path="stem/ai-lounchpad" element={<AIlounchpad />} />
//         <Route path="/ai-lounchpadKit" element={<AiLounchpadKit />} />
//         <Route path="/gardenOfHornamy" element={<GordenOfHornamy />} />
//         <Route path="/stemMeetAI" element={<StemMeetAI />} />
//         <Route path="/handsOnAI" element={<HandsOnAI />} />
//         <Route path="/aiClassRoom" element={<AiClassRoom />} />
//         <Route path="/edgeAiEducation" element={<EdgeAIEducation />} />
//         <Route path="/ownaiLaunchpadKit" element={<OwnAILounchpadKit />} />
//         <Route path="/dhtSensor" element={<DHTSensor />} />
//         <Route path="/aiChildrenEducation" element={<AiChildrenEducation />} />
//         <Route path="/aiToolTransferming" element={<AIToolTransferming />} />
//         <Route path="/disclaimer" element={<Disclaimer />} />
//         <Route path="/cookiePolicy" element={<CookiePolicy />} />
//         <Route path="/accessibilityStatement" element={<AccessibilityStatement />} />
//         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />

//         <Route path="stem/iot-project" element={<IoTProject />} />
//         <Route path="stem/coding-robotics" element={<CodingRobotics />} />
//         <Route path="/buildOwnKits" element={<BuildOwnKits />} />
//         <Route path="/about-us" element={<About />} />
//         <Route path="/contact-us" element={<Contact />} />
//       </Routes>
//     </Router>
//     <Footer />
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"; // ensure default export
import NavBar from "./components/navBar"; // ensure default export
import Home from "./pages/home";
import Blog from "./pages/blog";
import GalleryPage from "./pages/gallery";
import EBook from "./pages/e-book";
import EKite from "./pages/e-kite";
import EStories from "./pages/e-stories";
import AIlounchpad from "./pages/ai-lounchpad";
import IoTProject from "./pages/iot-project";
import CodingRobotics from "./pages/coding&robotics";
import About from "./pages/about";
import Contact from "./pages/contact";
import Whatsap from "./pages/whatsap";
import WhatsapLayout from "./components/whatsapLayout";
import Footer from "./components/Footer/index";
// import AllProducts from "./pages/all-products";
import BuildOwnKits from "./pages/buildOwnKits";
import AiLounchpadKit from "./pages/ai-lounchpadKit";
import GordenOfHornamy from "./pages/GordenOfHornamy";
import StemMeetAI from "./pages/stemMeetAI";
import HandsOnAI from "./pages/handsOnAI";
import AiClassRoom from "./pages/aiClassRoom";
import EdgeAIEducation from "./pages/edgeAIEducation";
import OwnAILounchpadKit from "./pages/ownaiLaunchpadKit";
import DHTSensor from "./pages/dhtSensor";
import AiChildrenEducation from "./pages/AiChildrenEducation";
import AIToolTransferming from "./pages/aiToolTransferming";
import Disclaimer from "./pages/disclaimer";
import CookiePolicy from"./pages/cookiePolicy";
import AccessibilityStatement from "./pages/accessibility";
import TermsAndConditions from "./pages/termsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy";

// ... other imports

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <Whatsap />
        <WhatsapLayout />
        {/* Other components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="products/e-book" element={<EBook />} />
          <Route path="products/e-kite" element={<EKite />} />
          <Route path="products/e-stories" element={<EStories />} />
          <Route path="stem/ai-lounchpad" element={<AIlounchpad />} />
          <Route path="stem/iot-project" element={<IoTProject />} />
          <Route path="stem/coding-robotics" element={<CodingRobotics />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* <Route path="products/e-book/all-products" element={<AllProducts />} /> */}
          <Route path="/buildOwnKits" element={<BuildOwnKits />} />
          <Route path="/ai-lounchpadKit" element={<AiLounchpadKit />} />
          <Route path="/gardenOfHornamy" element={<GordenOfHornamy />} />
          <Route path="/stemMeetAI" element={<StemMeetAI />} />
          <Route path="/handsOnAI" element={<HandsOnAI />} />
          <Route path="/aiClassRoom" element={<AiClassRoom />} />
          <Route path="/edgeAiEducation" element={<EdgeAIEducation />} />
          <Route path="/ownaiLaunchpadKit" element={<OwnAILounchpadKit />} />
          <Route path="/dhtSensor" element={<DHTSensor />} />
          <Route path="/aiChildrenEducation" element={<AiChildrenEducation />} />
          <Route path="/aiToolTransferming" element={<AIToolTransferming />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookiePolicy" element={<CookiePolicy />} />
          <Route path="/accessibilityStatement" element={<AccessibilityStatement />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Other Routes */}
        </Routes>
        <Footer />
      </Router>
      
      {/* Footer */}
    </>
  );
}

export default App;
