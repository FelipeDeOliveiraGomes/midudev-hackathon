import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from '@/presentation/router';
import { MainLayout } from '@/presentation/layouts';

import { LocaleContextProvider } from '@/store/contexts';
import '../presentation/styles/global.scss';

const container = document.getElementById('main');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <LocaleContextProvider>
                <MainLayout>
                    <React.Suspense fallback={<>loading...</>}>
                        <Routes />
                    </React.Suspense>
                </MainLayout>
            </LocaleContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
