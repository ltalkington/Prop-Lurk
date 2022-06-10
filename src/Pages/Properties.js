import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Budget from "../Components/Dashboard/Budget";
import BasicSpeedDial from "../Components/Utils/SpeedDial";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Properties() {
  let drawerWidth = 240;
  return (
    <header className="App-header2">
      <ResponsiveDrawer></ResponsiveDrawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexGrow: 2,
            p: 3,
            spacing: 2,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Grid item xs={6} md={4}>
            <Item>
              <h1> Property 1</h1>
              <p> 124 Easy Street</p>
              <p> Current Value: $200,000</p>
            </Item>
          </Grid>
          <Grid item xs={5} md={4}>
            <Item>
              <h1> Property 2</h1>
              <p> 123 Easy Street</p>
              <p> Current Value: $300,000</p>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <h1> Property 3</h1>
              <p> 123 Easy Street</p>
              <p> Current Value: $323,000</p>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <h1> Property 4</h1>
              <p> 123 Easy Street</p>
              <p> Current Value: $650,000</p>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <h1> Property 5</h1>
              <p> 123 Easy Street</p>
              <p> Current Value: $200,000</p>
            </Item>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>
              <h1> Property 6</h1>
              <p> 123 Easy Street</p>
              <p> Current Value: $492,000</p>
            </Item>
          </Grid>
        </Grid>
        <BasicSpeedDial></BasicSpeedDial>
      </Box>
    </header>
  );
}
export default Properties;
