import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";

import { Box, Container, Typography } from "@mui/material";
import { SettingsNotifications } from "../Components/Settings/settings-notifications";
import { SettingsPassword } from "../Components/Settings/settings-password";

function Settings() {
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
            Settings
          </Typography>
          <SettingsNotifications />
          <Box sx={{ pt: 3 }}>
            <SettingsPassword />
          </Box>
        </Container>
      </Box>
    </header>
  );
}

export default Settings;
