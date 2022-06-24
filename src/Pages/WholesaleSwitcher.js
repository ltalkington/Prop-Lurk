import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  Container,
} from "@mui/material";
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
function WholesaleSwitcher({ step, setStep }) {
  const [reportName, setReportName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyCity, setPropertyCity] = useState("");
  const [propertyState, setPropertyState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [desiredProfit, setDesiredProfit] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [estimatedRepairs, setEstimatedRepairs] = useState("");
  const [cashReturn, setCashReturn] = useState("");

  const [closingCosts, setClosingCosts] = useState("");
  const [otherMonthlyIncome, setOtherMonthlyIncome] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [ARV, setARV] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");

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
                  type="myReport"
                  placeholder="My Report"
                  value={reportName}
                  onChange={(e) => setReportName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Address</Form.Label>
                <Form.Control
                  type="propertyAddress"
                  placeholder="123 Easy Street,,,"
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property City</Form.Label>
                <Form.Control
                  type="propertyCity"
                  placeholder="Atlanta"
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
                <Form.Control type="purchasePrice" placeholder="$100,000" />
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
                <Form.Label>Desired Wholesale Profit</Form.Label>
                <Form.Control
                  type="desiredProfit"
                  placeholder="$10,000"
                  value={desiredProfit}
                  onChange={(e) => setDesiredProfit(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  Cash Buyer's Desired Cash on Cash Return
                </Form.Label>
                <Form.Control
                  type="cashReturn"
                  placeholder="5%"
                  value={cashReturn}
                  onChange={(e) => setCashReturn(e.target.value)}
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
                <Form.Label>Closing Costs</Form.Label>
                <Form.Control
                  type="closingCosts"
                  placeholder="$10,000"
                  value={closingCosts}
                  onChange={(e) => setClosingCosts(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Tax</Form.Label>
                <Form.Control
                  type="propertyTax"
                  placeholder="$1,750"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(e.target.value)}
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
                <Form.Label>Gross Monthly Rent</Form.Label>
                <Form.Control
                  type="monthlyRent"
                  placeholder="$1,200"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Other Monthly Income</Form.Label>
                <Form.Control
                  type="otherMonthlyIncome"
                  placeholder="$200"
                  value={otherMonthlyIncome}
                  onChange={(e) => setOtherMonthlyIncome(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Monthly Expenses for Buyer</Form.Label>
                <Form.Control
                  type="monthlyExpenses"
                  placeholder="$299"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(e.target.value)}
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
export default WholesaleSwitcher;
