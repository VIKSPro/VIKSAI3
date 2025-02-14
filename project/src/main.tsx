// src/main.tsx

import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Импортируем ErrorBoundary для обработки ошибок в компонентах
import ErrorBoundary from './components/ErrorBoundary';

// Ленивая загрузка основных страниц
const Home = () => <div>Home page is under construction.</div>;
const About = () => <div>About page is under construction.</div>;

const App = () => (
  <Router>
    <Helmet>
      <title>VIKS AI - Professional AI Avatars for Video Marketing</title>
      <meta name="description" content="Create engaging video content with ultra-realistic AI avatars. Perfect for businesses, startups, and marketers looking to scale their video production." />
      <link rel="canonical" href="https://viksai.com" />
    </Helmet>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Другие маршруты */}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
