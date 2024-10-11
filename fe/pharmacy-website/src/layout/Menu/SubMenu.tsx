import { useEffect, useRef, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { RouteConfig } from "../../types/router";
import MenuItem from "./MenuItem";

interface Props {
  route: RouteConfig;
  isExpanded: boolean;
}

const SubMenu = ({ route, isExpanded }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        handleToggle("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <span
        className={`w-full flex items-center justify-between py-2 rounded ${
          isExpanded ? "px-4" : "pl-4"
        }`}
        onClick={() => handleToggle(route.path)}
      >
        {isExpanded ? (
          <>
            <div className="flex items-center hover:text-[#036bfc] ">
              <div className="mr-2">{route.icon}</div>
              <span
                className={`${
                  pathname.includes(route.path) ? "text-[#036bfc] ml-4" : "ml-4"
                }`}
              >
                {route.label}
              </span>
            </div>
            <button className="justify-end">
              {isChildrenExpanded(route.path) ? (
                <MdExpandLess />
              ) : (
                <MdExpandMore />
              )}
            </button>
          </>
        ) : (
          <>
            <div className="mr-4">{route.icon}</div>
            {isChildrenExpanded(route.path) && (
              <div
                ref={menuRef}
                className="absolute left-[70px] bg-white rounded"
              >
                <ul>
                  {route.children!.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        className={({ isActive }) =>
                          `flex items-center px-4 py-2 hover:text-[#036bfc] rounded ${
                            isActive ? "text-[#036bfc]" : ""
                          }`
                        }
                        to={item.path}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
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
