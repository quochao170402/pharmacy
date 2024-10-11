import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Sidebar/components/Menu";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="flex min-h-screen">
      <div className="">
        {/* <Sidebar
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        /> */}
        <Menu
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
