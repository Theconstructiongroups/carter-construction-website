import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { CarterSite } from './carter-site.js';

/**
 * Client-side entry point for the Carter Construction Group website.
 * Mounts the app into the #root element defined in index.html.
 */
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <CarterSite />
  </BrowserRouter>
);
