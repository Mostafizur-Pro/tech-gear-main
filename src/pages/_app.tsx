// pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';

import "@/styles/globals.css";
import MainLayout from '@/components/Layouts/MainLayout';
// import MainLayout from '@/components/Layouts/MainLayout';




const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  return getLayout(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
