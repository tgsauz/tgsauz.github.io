import React, { useState, useEffect } from 'react';

const FadeTransition = ({ isVisible, children }) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000); // Ajusta el tiempo de transición según lo necesario

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return visible ? children : null;
};

export default FadeTransition;