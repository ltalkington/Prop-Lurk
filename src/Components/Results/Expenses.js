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

function Expenses({
  props,
  electricExpense,
  waterAndSewer,
  PMI,
  garbageExpense,
  HOAS,
  monthlyInsurance,
  vacancyRate,
  CapEx,
  otherExpenses,
  repairsAndMaintenance,
  setTotalMonthlyExpense,
}) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              YEARLY EXPENSES
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {"$"}{" "}
              {(parseInt(electricExpense) +
                parseInt(waterAndSewer) +
                parseInt(PMI) +
                parseInt(garbageExpense) +
                parseInt(HOAS) +
                parseInt(monthlyInsurance) +
                parseInt(CapEx) +
                parseInt(repairsAndMaintenance) +
                parseInt(otherExpenses)) *
                12}
              {setTotalMonthlyExpense(
                parseInt(electricExpense) +
                  parseInt(waterAndSewer) +
                  parseInt(PMI) +
                  parseInt(garbageExpense) +
                  parseInt(HOAS) +
                  parseInt(monthlyInsurance) +
                  parseInt(CapEx) +
                  parseInt(repairsAndMaintenance) +
                  parseInt(otherExpenses)
              )}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "error.main",
                height: 56,
                width: 56,
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowDownwardIcon color="error" />
          <Typography
            color="error"
            sx={{
              mr: 1,
            }}
            variant="body2"
          >
            1%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Versus Other Deals
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Expenses;
