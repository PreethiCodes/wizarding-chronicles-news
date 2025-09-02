import React, { useEffect, useState } from "react";
import "../App.css";

const MagicalIntro: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="magical-intro-overlay">
      <div className="magical-intro-content">
        <h1 className="magical-intro-title">Wizarding Chronicles</h1>
        <p className="magical-intro-subtitle">Where Magic Meets News</p>
        <div className="magical-intro-sparkles" />
        <div className="magical-intro-wand" />
      </div>
    </div>
  );
};

export default MagicalIntro;
