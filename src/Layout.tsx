import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Layout() {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </div>
  );
}
