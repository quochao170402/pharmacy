import React from "react";

interface ListProps<T> {
  items: T[];
  keyExtractor: (item: T) => string;
  //Render the list items
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

const List = <T extends object>({
  items,
  keyExtractor,
  renderItem,
}: ListProps<T>) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={keyExtractor(item)}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
