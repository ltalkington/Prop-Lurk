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

function LoanInfo(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Loan Amount
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $100,000
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Potential BRRRR Value
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $125,000
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Total Cost Of Loan
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $200,000
            </Typography>

            <Typography color="textSecondary" gutterBottom variant="overline">
              Loan Years
            </Typography>
            <Typography color="textPrimary" variant="h4">
              30 Years
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Interest Rate
            </Typography>
            <Typography color="textPrimary" variant="h4">
              5%
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Loan to Cost
            </Typography>
            <Typography color="textPrimary" variant="h4">
              80%
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Loan to Value
            </Typography>
            <Typography color="textPrimary" variant="h4">
              50%
            </Typography>

            <Typography color="textSecondary" gutterBottom variant="overline">
              Closing Cost %
            </Typography>
            <Typography color="textPrimary" variant="h4">
              3%
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default LoanInfo;
