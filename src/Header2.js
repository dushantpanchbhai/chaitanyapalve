import React from "react";
import "./Header.css"
import { PieChart } from "react-minimal-pie-chart";

function Header() {
  // const dataEntry = [{value:"green"},{value:"ads"},{value: "red"}];
  return (
    <>
      <div>babes this is header</div>
      <PieChart className="pie-chart"
        label={({ dataEntry }) => dataEntry.title}
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
        ]}
      />
    </>
  );
}

export default Header;
