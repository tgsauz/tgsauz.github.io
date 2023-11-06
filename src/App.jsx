import React, { useState } from "react";
import Nav from "./assets/components/Nav";
import Contact from "./assets/components/Contact";
import Info from "./assets/components/Info.jsx";
import NotFound from "./assets/components/NotFound";
import HomePage from "./assets/components/HomePage";

import "./global.css";
import "./assets/styles/App.css";
import "./assets/styles/Nav.css";
import "./assets/styles/HomePage.css";
import "./assets/styles/Info.css";
import "./assets/styles/Contact.css";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabClick = (sectionId) => {
    setSelectedTab(sectionId);
  };


  return (
    <div className="page-content-container">
      <Nav onTabChange={handleTabClick} />

      <HomePage isVisible={selectedTab === "home"} />
      <Contact isVisible={selectedTab === "contact"} />
      <Info isVisible={selectedTab === "info"} />
      <NotFound isVisible={selectedTab === "notfound"} />
    </div>
  );
}

export default App;
