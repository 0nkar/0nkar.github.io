import React, { useEffect } from 'react';

const Redirect = () => {
  useEffect(() => {
    window.location.href = 'https://www.linkedin.com/in/yellurkar';
  }, []);

  return <div>Redirecting to LinkedIn...</div>;
};

export default Redirect;
