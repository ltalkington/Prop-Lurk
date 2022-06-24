import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Table from "react-bootstrap/Table";
import Grid from "@mui/material/Grid";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Grade from "../Components/Results/Grade";
import Revenue from "../Components/Results/Revenue";
import Expenses from "../Components/Results/Expenses";
import Profits from "../Components/Results/Profits";
import Cashflow from "../Components/Results/Cashflow";
import CashReturn from "../Components/Results/CashReturn";
import ROI from "../Components/Results/ROI";
import CapRate from "../Components/Results/CapRate";
import QuickRatios from "../Components/Results/QuickRatios";
import LoanInfo from "../Components/Results/LoanInfo";
import HomeValue from "../Components/Results/HomeValue";
import DealCrit from "../Components/Results/DealCrit";
import MonthlyFlow from "../Components/Results/MonthlyFlow";
import {
  Avatar,
  Card,
  CardContent,
  LinearProgress,
  Typography,
  Container,
} from "@mui/material";
function FlipDealSwitcher({ step, setStep }) {
  const [reportName, setReportName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyCity, setPropertyCity] = useState("");
  const [propertyState, setPropertyState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [desiredProfit, setDesiredProfit] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [estimatedRepairs, setEstimatedRepairs] = useState("");
  const [holdingCosts, setHoldingCosts] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [lengthToFlip, setLengthToFlip] = useState("");
  const [closingCosts, setClosingCosts] = useState("");
  const [agentCommission, setAgentCommission] = useState("");
  const [ARV, setARV] = useState("");
  
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
                <Form.Control
                  type="reportName"
                  placeholder="My report..."
                  value={reportName}
                  onChange={(e) => setReportName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Address</Form.Label>
                <Form.Control
                  type="propertyAddress"
                  placeholder="123 Easy Street..."
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property City</Form.Label>
                <Form.Control
                  type="propertyCity"
                  placeholder="Atlanta..."
                  value={propertyCity}
                  onChange={(e) => setPropertyCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property State</Form.Label>
                <Form.Control
                  type="propertyState"
                  placeholder="Georgia"
                  value={propertyState}
                  onChange={(e) => setPropertyState(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Zip</Form.Label>
                <Form.Control
                  type="zipCode"
                  placeholder="12345"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What Type of Property is this?</Form.Label>
                <Form.Select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
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
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control
                  type="purchasePrice"
                  placeholder="$120,000"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>After Repair Value</Form.Label>
                <Form.Control
                  type="ARV"
                  placeholder="$200,000"
                  value={ARV}
                  onChange={(e) => setARV(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Desired Profit</Form.Label>
                <Form.Control
                  type="desiredProfit"
                  placeholder="$20,000"
                  value={desiredProfit}
                  onChange={(e) => setDesiredProfit(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Purchase Closing Costs</Form.Label>
                <Form.Control
                  type="closingCosts"
                  placeholder="0"
                  value={closingCosts}
                  onChange={(e) => setClosingCosts(e.target.value)}
                />
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Estimated Repairs</Form.Label>
                <Form.Control
                  type="estimatedRepairs"
                  placeholder="$20,000"
                  value={estimatedRepairs}
                  onChange={(e) => setEstimatedRepairs(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Holding Costs</Form.Label>
                <Form.Control
                  type="holdingCosts"
                  placeholder="$5,000"
                  value={holdingCosts}
                  onChange={(e) => setHoldingCosts(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Length in Months to Flip</Form.Label>
                <Form.Control
                  type="lengthToFlip"
                  placeholder="10 months..."
                  value={lengthToFlip}
                  onChange={(e) => setLengthToFlip(e.target.value)}
                />
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
                <Form.Label>Agent Commission %</Form.Label>
                <Form.Control
                  type="agentCommission"
                  placeholder="5%"
                  value={agentCommission}
                  onChange={(e) => setAgentCommission(e.target.value)}
                />
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
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8,
            }}
          >
            <Container maxWidth={false}>
              <Grid container spacing={3}>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <Grade></Grade>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <Revenue></Revenue>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <Expenses></Expenses>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <Profits></Profits>
                </Grid>
                <Grid item lg={12} md={12} xl={12} xs={12}>
                  <Cashflow></Cashflow>
                </Grid>

                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <ROI></ROI>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <CashReturn></CashReturn>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <MonthlyFlow></MonthlyFlow>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <CapRate></CapRate>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <QuickRatios></QuickRatios>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <LoanInfo></LoanInfo>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <HomeValue></HomeValue>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <DealCrit></DealCrit>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </header>
      );
  }
}
export default FlipDealSwitcher;
