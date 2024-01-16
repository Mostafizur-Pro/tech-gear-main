import { AuthProvider } from "@/context/AuthProvider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <AuthProvider>
        <body>
          <Main />
          <NextScript />
        </body>
      </AuthProvider>
    </Html>
  );
}
