import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import { AccountProfile } from "../Components/account/account-profile";
import { AccountProfileDetails } from "../Components/account/account-profile-details";
import { Box, Container, Grid, Typography } from "@mui/material";

function Profile() {
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
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Profile
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </header>
  );
}
export default Profile;
