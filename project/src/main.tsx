// src/main.tsx

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ErrorBoundary from './components/ErrorBoundary';

// Ленивая загрузка домашней страницы
const Home = lazy(() => import('./components/Home'));

// Ленивая загрузка страниц из папки legal
const PrivacyPolicy = lazy(() => import('./components/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/legal/TermsOfService'));
const CookiePolicy = lazy(() => import('./components/legal/CookiePolicy'));

const App = () => (
  <Router>
    <Helmet>
      <title>VIKS AI - Professional AI Avatars for Video Marketing</title>
      <meta
        name="description"
        content="Create engaging video content with ultra-realistic AI avatars. Perfect for businesses, startups, and marketers looking to scale their video production."
      />
      <link rel="canonical" href="https://viksai.com" />
    </Helmet>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />} />

          {/* Страницы из папки legal */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />

          {/* Можно добавить другие маршруты при необходимости */}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
