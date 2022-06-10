import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Table from "react-bootstrap/Table";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";

function Financials() {
  let drawerWidth = 240;
  return (
    <header className="App-header2">
      <ResponsiveDrawer></ResponsiveDrawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Button variant="primary" size="lg" active>
          Income Statement
        </Button>{" "}
        <Button variant="primary" size="lg" active>
          Balance Sheet
        </Button>{" "}
        <Button variant="primary" size="lg" active>
          Cash Flow
        </Button>{" "}
        <Button variant="primary" size="lg" active>
          Financial Ratios
        </Button>{" "}
        <Button variant="primary" size="lg" active>
          Amortization
        </Button>{" "}
        <br></br> <br></br>
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
      </Box>
    </header>
  );
}
export default Financials;
