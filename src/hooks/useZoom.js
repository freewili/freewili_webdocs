import { useEffect } from 'react';
import mediumZoom from 'medium-zoom';

const useZoom = (selector = '.markdown img', options = {}) => {
  useEffect(() => {
    const zoom = mediumZoom(selector, options);
    return () => zoom.detach();
  }, [selector, options]);
};

export default useZoom;
