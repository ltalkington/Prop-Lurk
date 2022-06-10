import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Table from "react-bootstrap/Table";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import FinancialsSwitcher from "./FinancialsSwitch";

function Financials() {
  let drawerWidth = 240;
  const [step, setStep] = useState(0);
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
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Button
          variant="primary"
          size="lg"
          active
          onClick={() => changeStep(1)}
        >
          Income Statement
        </Button>{" "}
        <Button
          variant="primary"
          size="lg"
          active
          onClick={() => changeStep(2)}
        >
          Balance Sheet
        </Button>{" "}
        <Button
          variant="primary"
          size="lg"
          active
          onClick={() => changeStep(3)}
        >
          Cash Flow
        </Button>{" "}
        <Button
          variant="primary"
          size="lg"
          active
          onClick={() => changeStep(4)}
        >
          Financial Ratios
        </Button>{" "}
        <Button
          variant="primary"
          size="lg"
          active
          onClick={() => changeStep(5)}
        >
          Amortization
        </Button>{" "}
        <br></br> <br></br>
        <FinancialsSwitcher step={step}></FinancialsSwitcher>
      </Box>
    </header>
  );
}
export default Financials;
