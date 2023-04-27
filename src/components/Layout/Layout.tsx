import Head from "next/head";
import { type LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-dark-primary px-2 py-2">
        {children}
      </main>
    </>
  );
};

export default Layout;
