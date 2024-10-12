import { Menu } from "antd";
import { BiUser, BiUserPin } from "react-icons/bi";
import { FiHome, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, Route } from "react-router-dom";
import FormulaIcon from "../assets/FormulaIcon";
import PathologyIcon from "../assets/PathologyIcon";
import CustomerPage from "../pages/Customer/CustomerPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import FormulaPage from "../pages/Formula/FormulaPage";
import OrderPage from "../pages/Order/OrderPage";
import PathologyPage from "../pages/Pathology/PathologyPage";
import { RouteConfig } from "../types/router";

const useGetRouter = () => {
  const routers: RouteConfig[] = [
    {
      path: "/orders",
      label: "Đơn hàng",
      icon: <FiShoppingCart size={24} />,
      component: <OrderPage />,
    },
    {
      path: "/drugs",
      label: "Thuốc",
      icon: <FiHome size={24} />,
      component: <Dashboard />,
    },
    {
      path: "/pathologies",
      label: "Bệnh lý",
      icon: <PathologyIcon size={24} />,
      component: <PathologyPage />,
    },
    {
      path: "/formulas",
      label: "Công thúc",
      icon: <FormulaIcon size={24} />,
      component: <FormulaPage />,
    },
    {
      path: "/users",
      label: "Người dùng",
      icon: <FiUser size={24} />,
      component: <CustomerPage />,
      children: [
        {
          path: "/users/employees",
          label: "Bác sĩ",
          icon: <BiUserPin size={24} />,
          component: <CustomerPage />,
        },
        {
          path: "/users/customers",
          label: "Khách hàng",
          icon: <BiUser size={24} />,
          component: <CustomerPage />,
        },
      ],
    },
  ];

  const breadcrumbNames: Record<string, string[]> = {
    "/orders": ["Đơn hàng"],
    "/users/customers": ["Người dùng", "Khách hàng"],
    "/users/employees": ["Người dùng", "Bác sĩ"],
    "/drugs": ["Thuốc"],
    "/pathologies": ["Bệnh lý"],
    "/formulas": ["Công thức"],
  };

  const getBreadcrumbs = (
    location: string,
    routes: RouteConfig[]
  ): string[] => {
    for (const route of routes) {
      if (route.path === location) {
        return [route.label];
      }
      if (route.children) {
        const childBreadcrumbs = getBreadcrumbs(location, route.children);
        if (childBreadcrumbs.length > 0) {
          return [route.label, ...childBreadcrumbs];
        }
      }
    }
    return [];
  };

  const generateMenuItems = (routes: RouteConfig[]) => {
    return routes.map((route) => {
      if (route.children) {
        return (
          <Menu.SubMenu key={route.path} icon={route.icon} title={route.label}>
            {generateMenuItems(route.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={route.path}>
          <Link className="flex items-center gap-4" to={route.path}>
            <div>{route.icon}</div>
            <h2>{route.label}</h2>
          </Link>
        </Menu.Item>
      );
    });
  };

  const generateRoutes = (routes: RouteConfig[]): React.ReactNode => {
    return routes.map((route) => {
      if (route.children) {
        return (
          <Route key={route.path} path={route.path} element={route.component}>
            {generateRoutes(route.children)}
          </Route>
        );
      }
      return (
        <Route key={route.path} path={route.path} element={route.component} />
      );
    });
  };

  return {
    routers,
    breadcrumbNames,
    getBreadcrumbs,
    generateMenuItems,
    generateRoutes,
  };
};

export default useGetRouter;
