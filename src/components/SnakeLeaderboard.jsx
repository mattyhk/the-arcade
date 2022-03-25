import React from "react";
import { useTable } from "react-table";
import "../styles/components/table.css";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          console.log(headerGroup);
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          );
        })}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
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
    </table>
  );
}

const SnakeLeaderboard = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Score",
        accessor: "score",
      },
    ],
    []
  );

  const data = [
    {
      name: "Test",
      score: 999,
    },
    {
      name: "Test",
      score: 999,
    },

    {
      name: "Test",
      score: 999,
    },

    {
      name: "Test",
      score: 999,
    },

    {
      name: "Test100",
      score: 100,
    },

    {
      name: "Test",
      score: 999,
    },

    {
      name: "Test",
      score: 999,
    },

    {
      name: "Test",
      score: 999,
    },

    {
      name: "TestLow",
      score: 99,
    },

    {
      name: "Test",
      score: 999,
    },

    {
      name: "Test",
      score: 999,
    },
  ]
    .sort((a, b) => parseFloat(b.score) - parseFloat(a.score))
    .map((record, index) => {
      return {
        ...record,
        rank: index + 1,
      };
    });

  return <Table columns={columns} data={data} />;
};

export default SnakeLeaderboard;
