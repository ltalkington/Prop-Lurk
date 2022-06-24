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

function HomeValue(props) {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              After Repair Value
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $170,000
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              ARV Per Square Foot
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $145.22
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Price Per SQ Foot
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $100
            </Typography>

            <Typography color="textSecondary" gutterBottom variant="overline">
              Rehab Per Square Foot
            </Typography>
            <Typography color="textPrimary" variant="h4">
              $10
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Total Bedrooms
            </Typography>
            <Typography color="textPrimary" variant="h4">
              4 Beds
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Total Bathrooms
            </Typography>
            <Typography color="textPrimary" variant="h4">
              3 Baths
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Garage Size
            </Typography>
            <Typography color="textPrimary" variant="h4">
              1 Car
            </Typography>

            <Typography color="textSecondary" gutterBottom variant="overline">
              Total Lot Size (SQ Feet)
            </Typography>
            <Typography color="textPrimary" variant="h4">
              4,000
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default HomeValue;
