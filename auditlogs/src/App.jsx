import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import EventsTable from "./EventsTable";
import ChartTable from "statistics/ChartTable";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>EVENT LOGS</div><br/><br/>
    <EventsTable/>
    <ChartTable/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
