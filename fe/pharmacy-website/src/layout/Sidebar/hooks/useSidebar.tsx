import { useState } from "react";
import { RouteConfig } from "../../../pages/Layout/types";

const useSidebar = () => {
  const [visibleChildren, setVisibleChildren] = useState<string | undefined>(
    undefined
  );

  const isChildrenExpanded = (path: string) => {
    if (visibleChildren === undefined || visibleChildren.length === 0)
      return false;

    return visibleChildren.length > 0
      ? visibleChildren.includes(path)
      : location.pathname.includes(path);
  };

  const isActive = (path: string) => path === location.pathname;

  const hasChildren = (item: RouteConfig) =>
    item.children && item.children.length > 0;

  const [current, setCurrent] = useState<string | undefined>(undefined);

  return {
    visibleChildren,
    isChildrenExpanded,
    isActive,
    hasChildren,
    setVisibleChildren,
    current,
    setCurrent,
  };
};

export default useSidebar;
