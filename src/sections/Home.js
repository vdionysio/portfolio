import React from 'react';
import profile from '../images/DionysioS.png';

export default function Home() {
  return (
    <header id="home" className="section" style={{ 'min-height': '100vh' }}>
      <div className="header-container">
        <img src={profile} alt="profile" />
        <div>
          <h1>Vinícius Dionysio</h1>
          <h2>Backend Developer</h2>
        </div>
      </div>
    </header>
  );
}
