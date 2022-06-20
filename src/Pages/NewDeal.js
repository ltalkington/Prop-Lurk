import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import NewDealPageSwitcher from "./NewDealPageSwitcher";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#293145" : "#293145",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary === "dark" ? "#fff" : "#fff",
}));

function NewDeal() {
  let drawerWidth = 240;
  const [step, setStep] = useState(1);
  let number = 1;
  const changeStep = (number) => {
    setStep(number);
  };
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
          <Form>
            <NewDealPageSwitcher
              step={step}
              setStep={setStep}
            ></NewDealPageSwitcher>
          </Form>
        </Grid>
      </Box>
    </header>
  );
}
export default NewDeal;
