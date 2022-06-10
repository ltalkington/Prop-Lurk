import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Form, Button } from "react-bootstrap";

function UpdateProperty() {
  let drawerWidth = 240;
  return (
    <div className="App">
      <ResponsiveDrawer></ResponsiveDrawer>
      <header className="App-header2">
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <h1>Update Property</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Property Address</Form.Label>
              <Form.Control type="email" placeholder="Property Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>City</Form.Label>
              <Form.Control type="email" placeholder="City" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>State</Form.Label>
              <Form.Control type="email" placeholder="State" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Year Bought</Form.Label>
              <Form.Control type="password" placeholder="Year Bought" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cost Basis</Form.Label>
              <Form.Control type="password" placeholder="Cost Basis" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tenants</Form.Label>
              <Form.Control type="password" placeholder="Tenants" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Revenue this year</Form.Label>
              <Form.Control type="password" placeholder="Tenants" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Expenses this year</Form.Label>
              <Form.Control type="password" placeholder="Tenants" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Box>
      </header>
    </div>
  );
}
export default UpdateProperty;
