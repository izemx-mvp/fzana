import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 overflow-hidden">{children}</main>
      <Footer />
    </div>
  );
}
