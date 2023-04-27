import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/utils/localStorage";

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = getLocalStorageItem("theme");
      if (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setDark(false);
      }
    }
  }, []);

  // NOTE 페이지 새로고침시 깜빡임 UX 이슈 개선 (feat isDark, setDark)
  if (isDark === null) {
    return <></>;
  }
  return (
    <>
      <Head>
        <title>Muntari Test App</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
