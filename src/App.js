import React, { useEffect } from 'react';

const Redirect = () => {
  useEffect(() => {
    window.location.href = 'https://yellurkar.bio.link';
  }, []);

  return <div></div>;
};

export default Redirect;
