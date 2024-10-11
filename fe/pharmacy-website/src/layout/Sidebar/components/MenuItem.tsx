import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  icon?: ReactNode;
  label: string;
  path: string;
  isExpanded: boolean;
}

const MenuItem = ({ label, icon, path, isExpanded }: Props) => {
  const { pathname } = useLocation();

  return (
    <>
      <NavLink
        onClick={() => console.log("object :>> ", path)}
        to={path}
        className={({ isActive }) =>
          `flex items-center px-4 py-2 hover:text-[#036bfc] rounded ${
            isActive ? "text-[#036bfc]" : ""
          }`
        }
      >
        <div className="mr-2">{icon}</div>
        {isExpanded ? (
          <span className={pathname === path ? "ml-4" : "ml-4"}>{label}</span>
        ) : (
          <></>
        )}
      </NavLink>
    </>
  );
};

export default MenuItem;
