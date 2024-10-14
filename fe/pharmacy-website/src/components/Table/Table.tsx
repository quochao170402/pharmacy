import { ReactElement } from "react";

interface Props<T> {
  columns: Array<ColumnProps<T>>;
  data?: T[];
  height?: number;
}

export interface ColumnProps<T> {
  key: string;
  title: string | ReactElement;
  render?: (column: ColumnProps<T>, item: T, index?: number) => ReactElement;
}

const Table = <T,>({ data, columns, height }: Props<T>) => {
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
              ? column.render(column, row as T, index)
              : (row[column.key as keyof typeof row] as string);

            return (
              <td className="pt-4" key={`cell-${index2}`}>
                {value}
              </td>
            );
          })}
        </tr>
      );
    })
  );
  return (
    <div
      className={`p-4 bg-white overflow-y-auto rounded-sm ${
        height ? `h-[${height}px]` : "h-screen"
      }`}
    >
      <table className="table-auto w-full">
        <thead className="text-left top-0 bg-red-600 sticky z-10">
          <tr>{headers}</tr>
        </thead>

        <tbody className="relative">{rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
