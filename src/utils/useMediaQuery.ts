import React, { useState, useLayoutEffect } from 'react';

const Breakpoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1416px',
};

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const query = `(max-width: ${Breakpoints['md']})`;

  React.useLayoutEffect = React.useEffect;
  useLayoutEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== isMobile) {
      setIsMobile(media.matches);
    }
    const listener = () => {
      setIsMobile(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [isMobile, query]);

  return isMobile;
};
