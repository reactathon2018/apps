import React from "react";

const getTableHeaders = tableHeadings => {
  const { thStyle } = styles;
  return tableHeadings.map(heading => {
    return (
      <th scope="col" key={heading} style={thStyle}>
        {heading}
      </th>
    );
  });
};
const getTableRows = data => {
  return data.map((hacker, index) => {
    return (
      <tr key={index}>
        <td>{hacker.rank}</td>
        <td>{hacker.name}</td>
        <td>{hacker.score}</td>
        <td>
          <a href={hacker.source} target="_blank">
            <i class="fa fa-github fa-lg" />
          </a>
        </td>
      </tr>
    );
  });
};
const LeaderBoard = ({ data }) => {
  const { tableStyle, thStyle } = styles;
  const tableHeadings = ["Rank", "Hacker", "Score", "Solution"];
  return (
    <table className="table" style={tableStyle}>
      <thead>
        <tr>{getTableHeaders(tableHeadings)}</tr>
      </thead>
      <tbody>{getTableRows(data)}</tbody>
    </table>
  );
};

const styles = {
  tableStyle: {
    backgroundColor: "white",
    boxShadow: "5px 5px 10px grey",
    fontFamily: "initial"
  },
  thStyle: {
    color: "#968c8c"
  }
};

export default LeaderBoard;
