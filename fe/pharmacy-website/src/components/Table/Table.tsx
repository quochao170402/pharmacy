import { ReactElement } from "react";

interface Props<T> {
  columns: Array<ColumnProps<T>>;
  data?: T[];
}

export interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  render?: (column: ColumnProps<T>, item: T) => ReactElement;
}

const Table = <T,>({ data, columns }: Props<T>) => {
  const headers = columns.map((column, index) => {
    return <th key={`headCell-${index}`}>{column.title}</th>;
  });

  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length} className="text-center">
        No data
      </td>
    </tr>
  ) : (
    data?.map((row, index) => {
      return (
        <tr key={`row-${index}`}>
          {columns.map((column, index2) => {
            const value = column.render
              ? column.render(column, row as T)
              : (row[column.key as keyof typeof row] as string);

            return <td key={`cell-${index2}`}>{value}</td>;
          })}
        </tr>
      );
    })
  );
  return (
    <div className="p-4">
      <table className="table-auto w-full">
        <thead className="text-left">
          <tr>{headers}</tr>
        </thead>

        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
