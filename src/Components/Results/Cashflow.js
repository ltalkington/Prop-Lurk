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

function Cashflow({
  props,
  totalMonthlyExpense,
  totalMonthlyRevenue,
  totalProfit,
  annualGrowth,
  annualPVGrowth,
  annualExpenseGrowth,
}) {
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
          <td>
            {"$"}
            {(totalMonthlyRevenue * 12).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
              12 *
              (1 + parseInt(annualGrowth) / 100)
            ).toFixed(2)}
          </td>
          <td>
            {" "}
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
              12 *
              ((1 + parseInt(annualGrowth) / 100) * 2)
            ).toFixed(2)}
          </td>
          <td>
            {" "}
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
              12 *
              ((1 + parseInt(annualGrowth) / 100) * 3)
            ).toFixed(2)}
          </td>
          <td>
            {" "}
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
              12 *
              ((1 + parseInt(annualGrowth) / 100) * 4)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
              12 *
              ((1 + parseInt(annualGrowth) / 100) * 5)
            ).toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Expenses</td>
          <td>
            {" "}
            {"$"}
            {(totalMonthlyExpense * 12).toFixed(2)}
          </td>
          <td>
            {" "}
            {"$"}{" "}
            {(
              totalMonthlyExpense *
              12 *
              (1 + parseInt(annualExpenseGrowth) / 100)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyExpense *
              12 *
              ((1 + parseInt(annualExpenseGrowth) / 100) * 2)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyExpense *
              12 *
              ((1 + parseInt(annualExpenseGrowth) / 100) * 3)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyExpense *
              12 *
              ((1 + parseInt(annualExpenseGrowth) / 100) * 4)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}
            {(
              totalMonthlyExpense *
              12 *
              ((1 + parseInt(annualExpenseGrowth) / 100) * 5)
            ).toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Profit</td>
          <td>
            {"$"}
            {(totalMonthlyRevenue * 12 - totalMonthlyExpense * 12).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyRevenue * 12 * (1 + parseInt(annualGrowth) / 100) -
              totalMonthlyExpense *
                12 *
                (1 + parseInt(annualExpenseGrowth) / 100)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
                12 *
                ((1 + parseInt(annualGrowth) / 100) * 2) -
              totalMonthlyExpense *
                12 *
                ((1 + parseInt(annualExpenseGrowth) / 100) * 2)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
                12 *
                ((1 + parseInt(annualGrowth) / 100) * 3) -
              totalMonthlyExpense *
                12 *
                ((1 + parseInt(annualExpenseGrowth) / 100) * 3)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
                12 *
                ((1 + parseInt(annualGrowth) / 100) * 4) -
              totalMonthlyExpense *
                12 *
                ((1 + parseInt(annualExpenseGrowth) / 100) * 4)
            ).toFixed(2)}
          </td>
          <td>
            {"$"}{" "}
            {(
              totalMonthlyRevenue *
                12 *
                ((1 + parseInt(annualGrowth) / 100) * 5) -
              totalMonthlyExpense *
                12 *
                ((1 + parseInt(annualExpenseGrowth) / 100) * 5)
            ).toFixed(2)}
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Cashflow;
