import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

function Settings() {
  let drawerWidth = 240;
  return (
    <div className="App">
      <ResponsiveDrawer></ResponsiveDrawer>
      <header className="App-header">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <h1>Settings</h1>
        </Box>
      </header>
    </div>
  );
}
export default Settings;
