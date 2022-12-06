import { Table } from "@mantine/core";
import { useTable } from "react-table";
import { useMemo, forwardRef } from "react";
import { HeaderGroup } from "react-table";

interface TableProps {
  data: any[];
  columns: any[];
  loading?: boolean;
  error?: boolean;
}

const Tables = forwardRef<any, TableProps>((props, ref) => {
  const { data, columns, loading, error } = props;
  const memoData = useMemo(() => data, [data]);
  const memoColumns = useMemo(() => columns, []);

  const tableInstance = useTable({
    columns: memoColumns,
    data: memoData,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = tableInstance;

  return (
    <Table striped highlightOnHover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps()} style={column?.style}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot ref={ref}>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps()}>{column.render("Footer")}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </Table>
  );
});

export default Tables;
