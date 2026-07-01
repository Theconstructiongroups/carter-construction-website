import { Routes, Route } from 'react-router-dom';
import { HomePage } from './home-page.js';
import './global.css';

/**
 * Root component for the Carter Construction Group website.
 * Renders the premium single-page marketing site.
 */
export function CarterSite() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
