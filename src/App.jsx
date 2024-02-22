import React, { useState } from "react";
import Nav from "./assets/components/Nav";
import Contact from "./assets/components/Contact";
import Info from "./assets/components/Info.jsx";
import NotFound from "./assets/components/NotFound";
import HomePage from "./assets/components/HomePage";
import Canvas from "./assets/components/Canvas.jsx";

import "./global.css";
import "./assets/styles/App.css";
import "./assets/styles/Nav.css";
import "./assets/styles/HomePage.css";
import "./assets/styles/Info.css";
import "./assets/styles/Contact.css";
import "./assets/styles/Canvas.css";
import "./assets/styles/NotFound.css";
import "./assets/styles/Projects.css";
import Projects from "./assets/components/Projects.jsx";

const App = () => {
  const [selectedTab, onTabChange] = useState({ id: "home", name: "Home" });

  const handleTabClick = (sectionId, tabName) => {
    onTabChange({ id: sectionId, name: tabName });
  };

// Agregar visibilidad a CANVAS
  return (
    <div className="page-content-container">
      <Nav onTabChange={handleTabClick} />
      <Canvas />

      <HomePage isVisible={selectedTab.id === "home"} />
      <Projects isVisible={selectedTab.id === "projects"} />
      <Contact isVisible={selectedTab.id === "contact"} />
      <Info isVisible={selectedTab.id === "info"} />
      <NotFound isVisible={selectedTab.id === "notfound"} />
    </div>
  );
}

export default App;
