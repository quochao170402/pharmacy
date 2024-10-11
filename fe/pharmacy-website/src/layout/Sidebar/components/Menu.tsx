import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import useGetRouter from "../../../pages/Layout/hooks/useGetRouter";
import { RouteConfig } from "../../../pages/Layout/types";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

interface Props {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Menu = ({ isExpanded, toggleSidebar }: Props) => {
  const { routers } = useGetRouter();

  const hasChildren = (item: RouteConfig) =>
    item.children && item.children.length > 0;

  return (
    <>
      <div className="flex justify-between items-center p-4 ">
        <Link to="/" className="flex items-center px-4 py-2">
          <h2
            className={`${isExpanded ? "block" : "hidden"} text-2xl font-bold`}
          >
            Dashboard
          </h2>
        </Link>
        <button onClick={toggleSidebar} className="text-white">
          <FiMenu size={24} />
        </button>
      </div>
      <ul className="">
        {routers.map((route) =>
          hasChildren(route) ? (
            <div key={route.path}>
              <SubMenu isExpanded={isExpanded} route={route} />
            </div>
          ) : (
            <li key={route.path}>
              <MenuItem
                icon={route.icon}
                label={route.label}
                path={route.path}
                isExpanded={isExpanded}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Menu;
