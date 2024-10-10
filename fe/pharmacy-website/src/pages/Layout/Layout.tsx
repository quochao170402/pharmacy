import { Breadcrumb, Input, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import useGetRouter from "./hooks/useGetRouter";

const { Header, Sider, Content } = Layout;

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { routers, generateMenuItems, getBreadcrumbs } = useGetRouter();
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname, routers);

  return (
    <Layout className="min-h-screen">
      <Sider collapsible width={250}>
        <div className="flex justify-between items-center p-4">
          <Link
            to="/"
            className="flex items-center px-4 py-2 hover:bg-gray-700 rounded text-white text-lg font-bold"
          >
            <h1>Dashboard</h1>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
        >
          {generateMenuItems(routers)}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white shadow-md">
          <Input placeholder="Search..." />
        </Header>
        <Content>
          <Breadcrumb className="pb-4 bg-red-50">
            {breadcrumbs.map((crumb, index) => (
              <Breadcrumb.Item key={index}>{crumb}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
