import React, { useState } from "react";
import Sidebar from "../Menu/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="flex min-h-screen">
      <div className="text-white">
        <Sidebar
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div>

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 bg-gray-100">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
