import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: (
      <Link to="/addproperty">
        <AddIcon />
      </Link>
    ),
    name: "Add Property",
  },
  {
    icon: (
      <Link to="/removeproperty">
        {" "}
        <RemoveIcon />{" "}
      </Link>
    ),
    name: "Remove Property",
  },
  {
    icon: (
      <Link to="/updateproperty">
        <UpdateIcon />
      </Link>
    ),
    name: "Update Property",
  },
];

function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default BasicSpeedDial;
