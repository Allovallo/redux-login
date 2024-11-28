import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster />
    </div>
  );
};
