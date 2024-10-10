import { Routes } from "react-router-dom";
import useGetRouter from "./pages/Layout/hooks/useGetRouter";
import AppLayout from "./pages/Layout/Layout";

const App = () => {
  // const [isExpanded, setIsExpanded] = useState(true);
  const { routers, generateRoutes } = useGetRouter();

  return (
    <>
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/drugs" element={<DrugPage />} />
          <Route path="/pathologies" element={<PathologyPage />} />
          <Route path="/formulas" element={<FormulaPage />} />
        </Routes>
      </Layout> */}

      {/* <SidebarMenu
        isExpanded={isExpanded}
        toggleSidebar={() => setIsExpanded(!isExpanded)}
      /> */}

      <AppLayout>
        <Routes>{generateRoutes(routers)}</Routes>
      </AppLayout>
    </>
  );
};

export default App;
