// pages/_app.tsx
import React from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import MainLayout from "@/components/Layouts/MainLayout";
import { AuthProvider } from "@/context/AuthProvider";
// import MainLayout from '@/components/Layouts/MainLayout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout =
    (Component as any).getLayout || ((page: React.ReactNode) => page);

  return getLayout(
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  );
};

export default MyApp;
