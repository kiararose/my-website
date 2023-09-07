import { useCallback, useState, useEffect } from 'react';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`)

      try {
        // Chrome & Firefox
        media.addEventListener('change', e => updateTarget(e))
      } catch (e1) {
        try {
          // Safari
          media.addListener('change', e => updateTarget(e))
        } catch (e2) {
          console.error(e2);
        }
      }

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true)
      }
  
      return () => media.removeEventListener('change', e => updateTarget(e))
    }, [])
  
    return targetReached;
  };

  export default useMediaQuery