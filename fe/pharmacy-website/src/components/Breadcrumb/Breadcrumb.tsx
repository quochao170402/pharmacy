import { IoIosArrowForward } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import useGetRouter from "../../hooks/useGetRouter";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const currentPath = pathname;
  const { breadcrumbNames } = useGetRouter();
  // Get breadcrumb names based on the current route, or fallback to an empty array
  const crumbs = ["Dashboard", ...(breadcrumbNames[currentPath] || [])];

  return (
    <>
      {pathname !== "/" && (
        <div className="flex items-center">
          {crumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              <NavLink
                className="hover:text-[#036bfc]"
                key={index}
                to={crumb === "Dashboard" ? "/" : location}
              >
                {crumb}
              </NavLink>

              {index !== crumbs.length - 1 && (
                <IoIosArrowForward className="mx-2" />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Breadcrumb;
