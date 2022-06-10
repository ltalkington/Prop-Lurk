import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "address", headerName: "Address", width: 130 },
  { field: "dateBought", headerName: "Date Bought", width: 130 },
  {
    field: "value",
    headerName: "Value",
    type: "number",
    width: 90,
  },
  {
    field: "income",
    headerName: "Income",
    type: "number",
    width: 90,
  },
  {
    field: "city",
    headerName: "City",
    width: 130,
  },
  {
    field: "state",
    headerName: "State",
    width: 130,
  },
  {
    field: "fullAddress",
    headerName: "Full Address",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 260,
    valueGetter: (params) =>
      `${params.row.address || ""} ${params.row.city || ""},  ${
        params.row.state || ""
      }`,
  },
];

const rows = [
  {
    id: 1,
    dateBought: "4/12/2022",
    address: "123 Easy Street",
    value: "$300,000",
    city: "New York",
    state: "New York",
    income: "$50,000",
  },
  {
    id: 2,
    dateBought: "4/12/2021",
    address: "124 Donkey Street",
    value: "$350,000",
    city: "New York",
    state: "New York",
    income: "$54,000",
  },
  {
    id: 3,
    dateBought: "4/12/2014",
    address: "123 Some Street",
    value: "$300,000",
    city: "Chicago",
    state: "Illinois",
    income: "$59,000",
  },
  {
    id: 4,
    dateBought: "4/12/2018",
    address: "123 Easy Street",
    value: "$800,000",
    city: "Brooklyn",
    state: "New York",
    income: "$130,000",
  },
  {
    id: 5,
    dateBought: "4/12/2017",
    address: "123 Easy Street",
    value: "$300,000",
    city: "Miami",
    state: "Florida",
    income: "$80,000",
  },
  {
    id: 6,
    dateBought: "4/12/2013",
    address: "13 Easy Street",
    value: "$3,000,000",
    city: "New York",
    state: "New York",
    income: "$520,000",
  },
  {
    id: 7,
    dateBought: "4/12/2002",
    address: "12 Easy Street",
    value: "$30,000",
    city: "New York",
    state: "New York",
    income: "$5,000",
  },
  {
    id: 8,
    dateBought: "4/12/2022",
    address: "123 Frontage Street",
    value: "$100,000",
    city: "Omaha",
    state: "Nebraska",
    income: "$1,000",
  },
  {
    id: 10,
    dateBought: "4/12/2022",
    address: "123 Dream Street",
    value: "$100,000",
    city: "Seattle",
    state: "Washington",
    income: "$30,000",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
