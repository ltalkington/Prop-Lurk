import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import Table from "react-bootstrap/Table";

function Cashflow(props) {
  return (
    <Table responsive className="financials-table">
      <thead>
        <tr>
          <th></th>
          <th>2022</th>
          <th>2023</th>
          <th>2024</th>
          <th>2025</th>
          <th>2026</th>
          <th>2027</th>
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
          <td>Profit</td>
          <td>$12,000</td>
          <td>$0</td>
          <td>$5,000</td>
          <td>$100,000</td>
          <td>-$10,000</td>
          <td>-$72,000</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Cashflow;
