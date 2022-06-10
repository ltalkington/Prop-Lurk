import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Table from "react-bootstrap/Table";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function FinancialsSwitcher({ step }) {
  switch (step) {
    case 1:
      return (
        <header>
          <Grid container spacing={3}>
            <Table responsive className="financials-table">
              <thead>
                <tr>
                  <th></th>
                  <th>2020</th>
                  <th>2019</th>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revenue</td>
                  <td>$200,000</td>
                  <td>$190,000</td>
                  <td>$175,000</td>
                  <td>$135,000</td>
                  <td>$100,000</td>
                  <td>$30,000</td>
                </tr>
                <tr>
                  <td>Expenses</td>
                  <td>$188,000</td>
                  <td>$190,000</td>
                  <td>$170,000</td>
                  <td>$35,000</td>
                  <td>$110,000</td>
                  <td>$102,000</td>
                </tr>
                <tr>
                  <td>Income</td>
                  <td>$12,000</td>
                  <td>$0</td>
                  <td>$5,000</td>
                  <td>$100,000</td>
                  <td>-$10,000</td>
                  <td>-$72,000</td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </header>
      );
    case 2:
      return (
        <header>
          <Grid container spacing={3}>
            <Table responsive className="financials-table">
              <thead>
                <tr>
                  <th></th>
                  <th>2020</th>
                  <th>2019</th>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Assets</td>
                  <td>$200,000</td>
                  <td>$190,000</td>
                  <td>$175,000</td>
                  <td>$135,000</td>
                  <td>$100,000</td>
                  <td>$30,000</td>
                </tr>
                <tr>
                  <td>Liabilities</td>
                  <td>$188,000</td>
                  <td>$190,000</td>
                  <td>$170,000</td>
                  <td>$35,000</td>
                  <td>$110,000</td>
                  <td>$102,000</td>
                </tr>
                <tr>
                  <td>Equity</td>
                  <td>$12,000</td>
                  <td>$0</td>
                  <td>$5,000</td>
                  <td>$100,000</td>
                  <td>-$10,000</td>
                  <td>-$72,000</td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </header>
      );
    case 3:
      return (
        <header>
          <Grid container spacing={3}>
            <Table responsive className="financials-table">
              <thead>
                <tr>
                  <th></th>
                  <th>2020</th>
                  <th>2019</th>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cash Flow</td>
                  <td>$200,000</td>
                  <td>$190,000</td>
                  <td>$175,000</td>
                  <td>$135,000</td>
                  <td>$100,000</td>
                  <td>$30,000</td>
                </tr>
                <tr>
                  <td>Depreciation</td>
                  <td>$188,000</td>
                  <td>$190,000</td>
                  <td>$170,000</td>
                  <td>$35,000</td>
                  <td>$110,000</td>
                  <td>$102,000</td>
                </tr>
                <tr>
                  <td>Cash Flow</td>
                  <td>$12,000</td>
                  <td>$0</td>
                  <td>$5,000</td>
                  <td>$100,000</td>
                  <td>-$10,000</td>
                  <td>-$72,000</td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </header>
      );
    case 4:
      return (
        <header>
          <Grid container spacing={3}>
            <Table responsive className="financials-table">
              <thead>
                <tr>
                  <th></th>
                  <th>2020</th>
                  <th>2019</th>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ratios</td>
                  <td>$200,000</td>
                  <td>$190,000</td>
                  <td>$175,000</td>
                  <td>$135,000</td>
                  <td>$100,000</td>
                  <td>$30,000</td>
                </tr>
                <tr>
                  <td>Percent</td>
                  <td>$188,000</td>
                  <td>$190,000</td>
                  <td>$170,000</td>
                  <td>$35,000</td>
                  <td>$110,000</td>
                  <td>$102,000</td>
                </tr>
                <tr>
                  <td>YTY Change</td>
                  <td>$12,000</td>
                  <td>$0</td>
                  <td>$5,000</td>
                  <td>$100,000</td>
                  <td>-$10,000</td>
                  <td>-$72,000</td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </header>
      );
    case 5:
      return (
        <header>
          <Grid container spacing={3}>
            <Table responsive className="financials-table">
              <thead>
                <tr>
                  <th></th>
                  <th>2020</th>
                  <th>2019</th>
                  <th>2018</th>
                  <th>2017</th>
                  <th>2016</th>
                  <th>2015</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mortgage</td>
                  <td>$200,000</td>
                  <td>$190,000</td>
                  <td>$175,000</td>
                  <td>$135,000</td>
                  <td>$100,000</td>
                  <td>$30,000</td>
                </tr>
                <tr>
                  <td>Principal</td>
                  <td>$188,000</td>
                  <td>$190,000</td>
                  <td>$170,000</td>
                  <td>$35,000</td>
                  <td>$110,000</td>
                  <td>$102,000</td>
                </tr>
                <tr>
                  <td>Interest</td>
                  <td>$12,000</td>
                  <td>$0</td>
                  <td>$5,000</td>
                  <td>$100,000</td>
                  <td>-$10,000</td>
                  <td>-$72,000</td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </header>
      );
  }
}
export default FinancialsSwitcher;
