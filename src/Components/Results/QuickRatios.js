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

function QuickRatios(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Rent to Value
            </Typography>
            <Typography color="textPrimary" variant="h4">
              3%
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Gross Rent Multiplier
            </Typography>
            <Typography color="textPrimary" variant="h4">
              6.44
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Equity Multiple
            </Typography>
            <Typography color="textPrimary" variant="h4">
              3.2
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Break Even Ratio
            </Typography>
            <Typography color="textPrimary" variant="h4">
              75%
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Return on Equity
            </Typography>
            <Typography color="textPrimary" variant="h4">
              5%
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Internal Rate of Return
            </Typography>
            <Typography color="textPrimary" variant="h4">
              100%
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Debt Yield
            </Typography>
            <Typography color="textPrimary" variant="h4">
              10%
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Debt Coverage Ratio
            </Typography>
            <Typography color="textPrimary" variant="h4">
              2.2
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default QuickRatios;
