import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ListItem = ({ children }: Props) => {
  return <div className="w-full flex justify-between">{children}</div>;
};

export default ListItem;
