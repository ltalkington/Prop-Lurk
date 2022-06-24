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

function DealCrit(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Cash Needed
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $10,000
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Monthly Income
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $230.00
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              After Repair Value
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $170,000
            </Typography>

            <Typography color="textSecondary" gutterBottom variant="overline">
              Rehab Return
            </Typography>
            <Typography color="textPrimary" variant="h4">
              10%
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Total Future Value
            </Typography>
            <Typography color="textPrimary" variant="h4">
              25%
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Ability to BRRRR
            </Typography>
            <Typography color="textPrimary" variant="h4">
              Yes
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Garage Size
            </Typography>
            <Typography color="textPrimary" variant="h4">
              1 Car
            </Typography>

            <Typography color="textSecondary" gutterBottom variant="overline">
              Good Schools
            </Typography>
            <Typography color="textPrimary" variant="h4">
              Yes
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default DealCrit;
