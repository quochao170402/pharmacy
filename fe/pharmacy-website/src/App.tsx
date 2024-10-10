import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout/Layout";
import CustomerPage from "./pages/Customer/CustomerPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import DrugPage from "./pages/Drug/DrugPage";
import FormulaPage from "./pages/Formula/FormulaPage";
import OrderPage from "./pages/Order/OrderPage";
import PathologyPage from "./pages/Pathology/PathologyPage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/drugs" element={<DrugPage />} />
          <Route path="/pathologies" element={<PathologyPage />} />
          <Route path="/formulas" element={<FormulaPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
