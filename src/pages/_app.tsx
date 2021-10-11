import "@styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "ui/themes/theme";
import Head from "next/head";
import Header from "ui/components/surfaces/header/Header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>e-diaristas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link href="/fonts/tw-icons/css/treinaweb-icons.css" rel="stylesheet" />
      </head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
