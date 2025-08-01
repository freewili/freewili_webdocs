import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import useZoom from '../hooks/useZoom';

export default function Layout(props) {
  useZoom('.markdown img', {
    background: 'rgba(0, 0, 0, 0.85)',
  });

  return <OriginalLayout {...props} />;
}
