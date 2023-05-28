import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '../presentation/styles/global.scss';

import { Routes } from '@/presentation/router';
import { MainLayout } from '@/presentation/layouts';

const container = document.getElementById('main');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MainLayout>
                <Routes />
            </MainLayout>
        </BrowserRouter>
    </React.StrictMode>
);
