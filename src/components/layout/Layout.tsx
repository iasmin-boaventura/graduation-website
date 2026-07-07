import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;