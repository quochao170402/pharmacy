import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="flex min-h-screen">
      <div className="">
        <Menu
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div>

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 bg-gray-100">
          <div className="mb-6">
            <Breadcrumb />
          </div>

          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
