import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import useGetRouter from "../../hooks/useGetRouter";
import { RouteConfig } from "../../types/router";
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
      <div
        className={`flex justify-between items-center p-4 h-16 ${
          isExpanded ? " w-56" : ""
        }`}
      >
        <Link
          to="/"
          className={`flex items-center px-4 py-2 ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          <h2
            className={`${isExpanded ? "block" : "hidden"} text-2xl font-bold`}
          >
            Dashboard
          </h2>
        </Link>
        <button onClick={toggleSidebar}>
          <FiMenu size={24} />
        </button>
      </div>
      <ul className="mt-2 flex flex-col gap-3">
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
