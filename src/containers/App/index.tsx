import React from "react";
import ReactDOM from "react-dom/client";
import Table from "components/Table";
import "../../assets/main.css"

const htmlRoot: any = document.getElementById("root");

if (htmlRoot)
{
  const root: any = ReactDOM.createRoot(htmlRoot);

  root.render(
    <React.StrictMode>
      <Table />
    </React.StrictMode>
  )
}