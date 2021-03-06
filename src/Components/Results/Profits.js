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

function Profit({
  props,
  totalMonthlyExpense,
  totalMonthlyRevenue,
  setTotalProfit,
}) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              YEARLY PROFIT
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {"$"}
              {(parseInt(totalMonthlyRevenue) - parseInt(totalMonthlyExpense)) *
                12}
              {setTotalProfit(
                parseInt(totalMonthlyRevenue) - parseInt(totalMonthlyExpense)
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

export default Profit;
