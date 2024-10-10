import { FiHome, FiShoppingCart, FiUser } from "react-icons/fi";
import Dashboard from "../../Dashboard/Dashboard";
import { RouteConfig } from "../types";
import OrderPage from "../../Order/OrderPage";
import FormulaIcon from "../../../assets/FormulaIcon";
import FormulaPage from "../../Formula/FormulaPage";
import PathologyIcon from "../../../assets/PathologyIcon";
import PathologyPage from "../../Pathology/PathologyPage";
import CustomerPage from "../../Customer/CustomerPage";
import { BiUser, BiUserPin } from "react-icons/bi";
import { Menu } from "antd";
import { Link, Route } from "react-router-dom";

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
          path: "/users/employee",
          label: "Bác sĩ",
          icon: <BiUserPin size={24} />,
          component: <CustomerPage />,
        },
        {
          path: "/users/customer",
          label: "Khách hàng",
          icon: <BiUser size={24} />,
          component: <CustomerPage />,
        },
      ],
    },
  ];

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

  return { routers, getBreadcrumbs, generateMenuItems, generateRoutes };
};

export default useGetRouter;
