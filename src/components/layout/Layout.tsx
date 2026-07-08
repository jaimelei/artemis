import { Outlet } from 'react-router-dom';
import { SkipToContent } from '../common/SkipToContent';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-moon-ivory text-ink-black">
      <SkipToContent />
      <Navbar />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
