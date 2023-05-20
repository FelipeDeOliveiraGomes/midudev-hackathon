import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './translations/i18n';

import '../presentation/styles/global.scss';

import { Routes } from '@/presentation/router';
import { GlobalDataProvider } from '@/store/contexts';

const container = document.getElementById('main');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GlobalDataProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </GlobalDataProvider>
  </React.StrictMode>
);
