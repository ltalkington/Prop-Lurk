import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Table from "react-bootstrap/Table";
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
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  Container,
} from "@mui/material";
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
                <Form.Label>Report Names</Form.Label>
                <Form.Control
                  type="reportName"
                  placeholder="My Report.."
                  value={reportName}
                  onChange={(e) => setReportName(e.target.value)}
                />
              </Form.Group>
              <h1> Projected Purchase</h1>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Address</Form.Label>
                <Form.Control
                  type="propertyAddress"
                  placeholder="123 Easy Street"
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Property Tax</Form.Label>
                <Form.Control
                  type="annualPropertyTax"
                  placeholder="$1800"
                  value={annualPropertyTax}
                  onChange={(e) => setLoanInterest(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What Type of Property is this?</Form.Label>
                <Form.Select
                  value={propetyType}
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
                <Form.Label>Total Units</Form.Label>
                <Form.Control
                  type="totalUnits"
                  placeholder="5"
                  value={totalUnits}
                  onChange={(e) => setTotalUnits(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Square Feet</Form.Label>
                <Form.Control
                  type="sqfeet"
                  placeholder="1200"
                  value={sqFeet}
                  onChange={(e) => setSqFeet(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control
                  type="purchasePrice"
                  placeholder="$100,000"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control
                  type="bedrooms"
                  placeholder="3"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control
                  type="bathrooms"
                  placeholder="2"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Garage</Form.Label>
                <Form.Control
                  type="garage"
                  placeholder="1"
                  value={garage}
                  onChange={(e) => setGarage(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Lot Size</Form.Label>
                <Form.Control
                  type="lotSize"
                  placeholder="2000"
                  value={lotSize}
                  onChange={(e) => setLotSize(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Condition of Property (Scale 1-10)</Form.Label>
                <Form.Control
                  type="condition"
                  placeholder="5"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
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
              <h1> Sold House 1</h1>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Address</Form.Label>
                <Form.Control
                  type="propertyAddress"
                  placeholder="123 Easy Street..."
                  value={propertyAddress1}
                  onChange={(e) => setPropertyAddress1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property City</Form.Label>
                <Form.Control
                  type="propertyCity"
                  placeholder="Atlanta.."
                  value={propertyCity1}
                  onChange={(e) => setPropertyCity1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property State</Form.Label>
                <Form.Control
                  type="propertyState"
                  placeholder="Georgia"
                  value={propertyState1}
                  onChange={(e) => setPropertyState1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Zip</Form.Label>
                <Form.Control
                  type="zipCode"
                  placeholder="12345"
                  value={zipCode1}
                  onChange={(e) => setZipCode1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Property Tax</Form.Label>
                <Form.Control
                  type="propertyTax"
                  placeholder="$1,200"
                  value={propertyTax1}
                  onChange={(e) => setPropertyTax1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What Type of Property is this?</Form.Label>
                <Form.Select
                  value={propertyType1}
                  onChange={(e) => setPropertyType1(e.target.value)}
                >
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
                <Form.Control
                  type="totalUnits1"
                  placeholder="5"
                  value={totalUnits1}
                  onChange={(e) => setTotalUnits(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Square Feet</Form.Label>
                <Form.Control
                  type="sqfeet"
                  placeholder="1200"
                  value={sqFeet1}
                  onChange={(e) => setSqFeet1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control
                  type="purchasePrice"
                  placeholder="$100,000"
                  value={purchasePrice1}
                  onChange={(e) => setPurchasePrice1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control
                  type="bedrooms"
                  placeholder="3"
                  value={bedrooms1}
                  onChange={(e) => setBedrooms1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control
                  type="bathrooms"
                  placeholder="2"
                  value={bathrooms1}
                  onChange={(e) => setBathrooms1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Garage</Form.Label>
                <Form.Control
                  type="garage"
                  placeholder="1"
                  value={garage1}
                  onChange={(e) => setGarage1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Lot Size</Form.Label>
                <Form.Control
                  type="lotSize"
                  placeholder="2000"
                  value={lotSize1}
                  onChange={(e) => setLotSize1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Condition of Property (Scale 1-10)</Form.Label>
                <Form.Control
                  type="condition"
                  placeholder="5"
                  value={condition1}
                  onChange={(e) => setCondition1(e.target.value)}
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
                <Form.Control
                  type="propertyAddress"
                  placeholder="123 Easy Street..."
                  value={propertyAddress2}
                  onChange={(e) => setPropertyAddress2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property City</Form.Label>
                <Form.Control
                  type="propertyCity"
                  placeholder="Atlanta.."
                  value={propertyCity2}
                  onChange={(e) => setPropertyCity2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property State</Form.Label>
                <Form.Control
                  type="propertyState"
                  placeholder="Georgia"
                  value={propertyState2}
                  onChange={(e) => setPropertyState2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Zip</Form.Label>
                <Form.Control
                  type="zipCode"
                  placeholder="12345"
                  value={zipCode2}
                  onChange={(e) => setZipCode2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Property Tax</Form.Label>
                <Form.Control
                  type="propertyTax"
                  placeholder="$1,200"
                  value={propertyTax2}
                  onChange={(e) => setPropertyTax2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What Type of Property is this?</Form.Label>
                <Form.Select
                  value={propertyType2}
                  onChange={(e) => setPropertyType2(e.target.value)}
                >
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
                <Form.Control
                  type="totalUnits"
                  placeholder="5"
                  value={totalUnits2}
                  onChange={(e) => setTotalUnits2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Square Feet</Form.Label>
                <Form.Control
                  type="sqfeet"
                  placeholder="1200"
                  value={sqFeet2}
                  onChange={(e) => setSqFeet2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Purchase Price</Form.Label>
                <Form.Control
                  type="purchasePrice"
                  placeholder="$100,000"
                  value={purchasePrice2}
                  onChange={(e) => setPurchasePrice2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bedrooms</Form.Label>
                <Form.Control
                  type="bedrooms"
                  placeholder="3"
                  value={bedrooms2}
                  onChange={(e) => setBedrooms2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bathrooms</Form.Label>
                <Form.Control
                  type="bathrooms"
                  placeholder="2"
                  value={bathrooms2}
                  onChange={(e) => setBathrooms2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Garage</Form.Label>
                <Form.Control
                  type="garage"
                  placeholder="1"
                  value={garage2}
                  onChange={(e) => setGarage2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Lot Size</Form.Label>
                <Form.Control
                  type="lotSize"
                  placeholder="2000"
                  value={lotSize2}
                  onChange={(e) => setLotSize2(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Condition of Property (Scale 1-10)</Form.Label>
                <Form.Control
                  type="condition"
                  placeholder="5"
                  value={condition2}
                  onChange={(e) => setCondition2(e.target.value)}
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
    case 7:
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
export default SalesCompSwitcher;
