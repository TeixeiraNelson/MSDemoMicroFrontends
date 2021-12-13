import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import ChartTable from "./ChartTable";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>STATISTICS</div><br/><br/>
    <ChartTable/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
