import React, { useState } from 'react';

const tabsData = [
  { name: "Home", sectionId: "home" },
  { name: "Projects", sectionId: "projects" },
  { name: "Info", sectionId: "info" },
  { name: "Contact", sectionId: "contact" },
];

const Nav = ({ onTabChange }) => {
    const [selectedTab, setSelectedTab] = useState("home");

    const handleTabChange = (sectionId) => {
        setSelectedTab(sectionId);
        onTabChange(sectionId);
    }
  return (
    <header className="encabezado" id="Encabezado">
      <h1 className="encabezadoTitulo">Tomás E. Gandulfo</h1>
      <p className="encabezadoSubtitulo">Developer & Designer</p>
      <nav className="encabezado_nav">
        <ol>
          {tabsData.map((tab) => (
            <li key={tab.sectionId}>
              <div
                className={`_texto-container ${selectedTab === tab.sectionId ? 'is-selected' : ''}`}
                onClick={() => {
                  handleTabChange(tab.sectionId, tab.name);
                }}
              >
                {selectedTab === tab.sectionId && (<div className={`circle ${selectedTab === tab.sectionId ? "active" : ""}`}>●</div>)}
                <a
                  className="_texto"
                  href={tab.url ? tab.url : `#${tab.sectionId}`}
                  target={tab.url ? '_blank' : ''}
                >
                  {tab.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default Nav;