import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Table from "react-bootstrap/Table";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SalesCompSwitcher({ step, setStep }) {
  switch (step) {
    case 1:
      return (
        <header>
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Report Name</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <h1> Projected Purchase</h1>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Address</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property City</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property State</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Zip</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Property Tax</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What Type of Property is this?</Form.Label>
                <Form.Select>
                  <option>Commerical</option>
                  <option>Single Family</option>
                  <option>Multi-Family</option>
                </Form.Select>
              </Form.Group>

              <Button
                className="btnforward1"
                variant="primary"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Forward
              </Button>
            </Form>
          </Grid>
        </header>
      );
    case 2:
      return (
        <header>
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Total Units</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Square Feet</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Garage</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Lot Size</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Condition of Property (Scale 1-10)</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Button
                className="btnbackwards"
                variant="primary"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Backwards
              </Button>

              <Button
                className="btnforward"
                variant="primary"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Forward
              </Button>
            </Form>
          </Grid>
        </header>
      );
    case 3:
      return (
        <header>
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
              <h1> Sold House 1</h1>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Address</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property City</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property State</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Zip</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Property Tax</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What Type of Property is this?</Form.Label>
                <Form.Select>
                  <option>Commerical</option>
                  <option>Single Family</option>
                  <option>Multi-Family</option>
                </Form.Select>
              </Form.Group>

              <Button
                className="btnbackwards"
                variant="primary"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Backwards
              </Button>

              <Button
                className="btnforward"
                variant="primary"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Forward
              </Button>
            </Form>
          </Grid>
        </header>
      );
    case 4:
      return (
        <header>
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Total Units</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Square Feet</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Garage</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Lot Size</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Condition of Property (Scale 1-10)</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Button
                className="btnbackwards"
                variant="primary"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Backwards
              </Button>

              <Button
                className="btnforward"
                variant="primary"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Forward
              </Button>
            </Form>
          </Grid>
        </header>
      );
    case 5:
      return (
        <header>
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
              <h1> Sold House 2</h1>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Address</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property City</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property State</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Zip</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Property Tax</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What Type of Property is this?</Form.Label>
                <Form.Select>
                  <option>Commerical</option>
                  <option>Single Family</option>
                  <option>Multi-Family</option>
                </Form.Select>
              </Form.Group>

              <Button
                className="btnbackwards"
                variant="primary"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Backwards
              </Button>

              <Button
                className="btnforward"
                variant="primary"
                style={{ alignItems: "center", alignContent: "center" }}
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Forward
              </Button>
            </Form>
          </Grid>
        </header>
      );
    case 6:
      return (
        <header>
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Total Units</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Square Feet</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Garage</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Lot Size</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Condition of Property (Scale 1-10)</Form.Label>
                <Form.Control type="password" placeholder="0" />
              </Form.Group>
              <Button
                className="btnbackwards"
                variant="primary"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Backwards
              </Button>

              <Button
                className="btnforward"
                variant="primary"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Forward
              </Button>
            </Form>
          </Grid>
        </header>
      );
  }
}
export default SalesCompSwitcher;
