import React from "react";
import { useTable, usePagination } from "react-table";
import "../styles/components/table.css";

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <div className="flex flex-col">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-6">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
      </div>
    </div>
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

  // -- leaderboard hardcoded data -- START
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
  // -- leaderboard hardcoded data -- END

  return <Table columns={columns} data={data} />;
};

export default SnakeLeaderboard;
