import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { RouteConfig } from "../../../pages/Layout/types";
import MenuItem from "./MenuItem";

interface Props {
  route: RouteConfig;
  isExpanded: boolean;
}

const SubMenu = ({ route, isExpanded }: Props) => {
  const { pathname } = useLocation();

  const [visibleChildren, setVisibleChildren] = useState<string | undefined>(
    undefined
  );

  const isChildrenExpanded = (path: string) => {
    if (visibleChildren === undefined || visibleChildren.length === 0)
      return false;

    return visibleChildren.length > 0
      ? visibleChildren.includes(path)
      : pathname.includes(path);
  };

  const handleToggle = (path: string) => {
    if (visibleChildren === undefined || visibleChildren.length === 0) {
      setVisibleChildren(path);
    } else {
      setVisibleChildren(undefined);
    }
  };

  return (
    <>
      <span
        className="w-full flex items-center justify-between px-4 py-2 hover:text-[#036bfc] rounded"
        onClick={() => handleToggle(route.path)}
      >
        <div className="flex items-center">
          <div className="mr-4">{route.icon}</div>
          <span
            className={pathname.includes(route.path) ? "text-[#036bfc]" : ""}
          >
            {route.label}
          </span>
        </div>
        <button className={isExpanded ? "justify-end" : "hidden"}>
          {isChildrenExpanded(route.path) ? (
            <MdExpandLess
            // onClick={() => handleToggle(undefined)}
            />
          ) : (
            <MdExpandMore
            // onClick={() => setVisibleChildren(route.path)}
            />
          )}
        </button>
      </span>
      {isExpanded && (
        <div
          className={
            isChildrenExpanded(route.path) ? "block ml-4" : "hidden ml-4"
          }
        >
          <ul className={isChildrenExpanded(route.path) ? "block" : "hidden"}>
            {route.children!.map((item) => (
              <li key={item.path}>
                <MenuItem
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  isExpanded={isExpanded}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SubMenu;
