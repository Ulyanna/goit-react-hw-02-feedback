import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from '@emotion/react';

import './index.css';

const theme = {
  colors: {
    good: 'rgba(0, 115, 168, 0.596)',
    neutral: 'rgba(20, 168, 0, 0.596)',
    bad: 'rgba(168, 67, 0, 0.596)',
  },
  hoverColors: {
    good: 'rgba(2, 92, 134, 0.596)',
    neutral: 'rgba(14, 117, 1, 0.596)',
    bad: 'rgba(122, 49, 1, 0.596)',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
