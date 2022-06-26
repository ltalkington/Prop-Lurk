import ResponsiveDrawer from "../Components/Sidebar/Sidebar";
import Toolbar from "@mui/material/Toolbar";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
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
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";
import ResultPage from "./ResultPage";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#293145" : "#293145",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary === "dark" ? "#fff" : "#fff",
}));
function NewDealSwitcher({ step, setStep }) {
  const [reportName, setReportName] = useState(0);
  const [propertyAddress, setPropertyAddress] = useState(0);
  const [city, setCity] = useState(0);
  const [propertyState, setPropertyState] = useState(0);
  const [zipCode, setZipCode] = useState(0);
  const [propertyTaxAmount, setPropertyTaxAmount] = useState(0);
  const [propertyType, setPropertyType] = useState(0);
  const [numberOfUnits, setNumberOfUnits] = useState(0);
  const [squareFootage, setSquareFootage] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [afterRepairValue, setAfterRepairValue] = useState(0);
  const [closingCosts, setClosingCosts] = useState(0);
  const [repairs, setRepairs] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanInterest, setLoanInterest] = useState(0);
  const [loanLength, setLoanLength] = useState(0);
  const [pointsCharged, setPointsCharged] = useState(0);
  const [otherLenderCharges, setOtherLenderCharges] = useState(0);
  const [loanAndPoints, setLoanAndPoints] = useState(0);
  const [grossRent, setGrossRent] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [purchaseMethod, setPurchaseMethod] = useState(0);
  const [electricExpense, setElectricExpense] = useState(0);
  const [waterAndSewer, setWaterAndSewer] = useState(0);
  const [PMI, setPMI] = useState(0);
  const [garbageExpense, setGarbageExpense] = useState(0);
  const [HOAS, setHOAS] = useState(0);
  const [monthlyInsurance, setMonthlyInsurance] = useState(0);
  const [vacancyRate, setVacancyRate] = useState(0);
  const [CapEx, setCapEx] = useState(0);
  const [otherExpenses, setOtherExpenses] = useState(0);
  const [repairsAndMaintenance, setRepairsAndMaintenance] = useState(0);
  const [managementFees, setManagementFees] = useState(0);
  const [annualGrowth, setAnnualGrowth] = useState(0);
  const [annualPVGrowth, setAnnualPVGrowth] = useState(0);
  const [annualExpenseGrowth, setAnnualExpenseGrowth] = useState(0);
  const [salesExpenseGrowth, setSalesExpenseGrowth] = useState(0);
  const [totalMonthlyRevenue, setTotalMonthlyRevenue] = useState(0);
  const [totalMonthlyExpense, setTotalMonthlyExpense] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
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
                  placeholder="Report Name..."
                  value={reportName}
                  onChange={(e) => setReportName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Address</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Address..."
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property City</Form.Label>
                <Form.Control
                  type="city"
                  placeholder="Atlanta..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property State</Form.Label>
                <Form.Control
                  type="state"
                  placeholder="Georgia..."
                  value={propertyState}
                  onChange={(e) => setPropertyState(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Property Zip</Form.Label>
                <Form.Control
                  type="zipCode"
                  placeholder="12345..."
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Property Tax</Form.Label>
                <Form.Control
                  type="propertyTax"
                  placeholder="$1,000.00..."
                  value={propertyTaxAmount}
                  onChange={(e) => setPropertyTaxAmount(e.target.value)}
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
                <Form.Label>Number of Units</Form.Label>
                <Form.Control
                  type="units"
                  placeholder="100..."
                  value={numberOfUnits}
                  onChange={(e) => setNumberOfUnits(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Square Feet</Form.Label>
                <Form.Control
                  type="squareFootage"
                  placeholder="1100 sqft.."
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
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
                <Form.Label>After Repair Value</Form.Label>
                <Form.Control
                  type="ARV"
                  placeholder="$120,000"
                  value={afterRepairValue}
                  onChange={(e) => setAfterRepairValue(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Purchase Closing Costs</Form.Label>
                <Form.Control
                  type="closingCosts"
                  placeholder="$10,000..."
                  value={closingCosts}
                  onChange={(e) => setClosingCosts(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Estimated Repairs</Form.Label>
                <Form.Control
                  type="repairs"
                  placeholder="$14,000..."
                  value={repairs}
                  onChange={(e) => setRepairs(e.target.value)}
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Purchase Method</Form.Label>
                <Form.Select
                  value={purchaseMethod}
                  onChange={(e) => setPurchaseMethod(e.target.value)}
                >
                  <option>Cash</option>
                  <option>Mortgage/Hard Money</option>
                  <option>Investor</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Down Payment</Form.Label>
                <Form.Control
                  type="downPayment"
                  placeholder="$40,000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Loan Interest Percentage</Form.Label>
                <Form.Control
                  type="loanInterest"
                  placeholder="8%..."
                  value={loanInterest}
                  onChange={(e) => setLoanInterest(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Loan Length</Form.Label>
                <Form.Control
                  type="loanLength"
                  placeholder="30 years..."
                  value={loanLength}
                  onChange={(e) => setLoanLength(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Points Charged By Lender</Form.Label>
                <Form.Control
                  type="pointsCharged"
                  placeholder="0"
                  value={pointsCharged}
                  onChange={(e) => setPointsCharged(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Other Charges from Lender</Form.Label>
                <Form.Control
                  type="lenderCharges"
                  placeholder="$410"
                  value={otherLenderCharges}
                  onChange={(e) => setOtherLenderCharges(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Loan Fees and Points</Form.Label>
                <Form.Select
                  value={loanAndPoints}
                  onChange={(e) => setLoanAndPoints(e.target.value)}
                >
                  <option>Wrap loan/points into the loan</option>
                  <option>Pay loan/points out of pocket</option>
                  <option>Investor</option>
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
                <Form.Label>Total Gross Monthly Rent</Form.Label>
                <Form.Control
                  type="monthlyRent"
                  placeholder="$1,000"
                  value={grossRent}
                  onChange={(e) => setGrossRent(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Other Income</Form.Label>
                <Form.Control
                  type="otherIncome"
                  placeholder="$130"
                  value={otherIncome}
                  onChange={(e) => setOtherIncome(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Electricity</Form.Label>
                <Form.Control
                  type="electricExpense"
                  placeholder="$105"
                  value={electricExpense}
                  onChange={(e) => setElectricExpense(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Water and Sewer</Form.Label>
                <Form.Control
                  type="waterAndSewer"
                  placeholder="$70.00"
                  value={waterAndSewer}
                  onChange={(e) => setWaterAndSewer(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PMI</Form.Label>
                <Form.Control
                  type="PMI"
                  placeholder="$130"
                  value={PMI}
                  onChange={(e) => setPMI(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Garbage</Form.Label>
                <Form.Control
                  type="garbage"
                  placeholder="$40"
                  value={garbageExpense}
                  onChange={(e) => setGarbageExpense(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>HOAs</Form.Label>
                <Form.Control
                  type="HOAS"
                  placeholder="$20"
                  value={HOAS}
                  onChange={(e) => setHOAS(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Monthly Insurance</Form.Label>
                <Form.Control
                  type="monthlyInsurance"
                  placeholder="$100"
                  value={monthlyInsurance}
                  onChange={(e) => setMonthlyInsurance(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Other Expenses</Form.Label>
                <Form.Control
                  type="otherExpenses"
                  placeholder="0"
                  value={otherExpenses}
                  onChange={(e) => setOtherExpenses(e.target.value)}
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Vacancy Rate</Form.Label>
                <Form.Control
                  type="vacancy"
                  placeholder="10%"
                  value={vacancyRate}
                  onChange={(e) => setVacancyRate(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repairs and Maintenance</Form.Label>
                <Form.Control
                  type="repairsAndMaintenance"
                  placeholder="$40"
                  value={repairsAndMaintenance}
                  onChange={(e) => setRepairsAndMaintenance(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Capital Expenditures</Form.Label>
                <Form.Control
                  type="CapEX"
                  placeholder="$10"
                  value={CapEx}
                  onChange={(e) => setCapEx(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Management Fees</Form.Label>
                <Form.Control
                  type="managementFees"
                  placeholder="$50"
                  value={managementFees}
                  onChange={(e) => setManagementFees(e.target.value)}
                />
              </Form.Group>
              <h1> Future Assumptions</h1>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Income Growth %</Form.Label>
                <Form.Control
                  type="annualGrowth"
                  placeholder="10%"
                  value={annualGrowth}
                  onChange={(e) => setAnnualGrowth(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual PV Growth %</Form.Label>
                <Form.Control
                  type="PVGrowth"
                  placeholder="10%"
                  value={annualPVGrowth}
                  onChange={(e) => setAnnualPVGrowth(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Annual Expenses Growth %</Form.Label>
                <Form.Control
                  type="annualExpensesGrowth"
                  placeholder="10%"
                  value={annualExpenseGrowth}
                  onChange={(e) => setAnnualExpenseGrowth(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Sales Expense</Form.Label>
                <Form.Control
                  type="salesExpense"
                  placeholder="10%"
                  value={salesExpenseGrowth}
                  onChange={(e) => setSalesExpenseGrowth(e.target.value)}
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
                style={{ alignItems: "center", alignContent: "center" }}
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Submit Report
              </Button>
            </Form>
          </Grid>
        </header>
      );
    case 6:
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
                  <Revenue
                    grossRent={grossRent}
                    otherIncome={otherIncome}
                    totalMonthlyRevenue={totalMonthlyRevenue}
                    setTotalMonthlyRevenue={setTotalMonthlyRevenue}
                  ></Revenue>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <Expenses
                    electricExpense={electricExpense}
                    waterAndSewer={waterAndSewer}
                    PMI={PMI}
                    garbageExpense={garbageExpense}
                    HOAS={HOAS}
                    monthlyInsurance={monthlyInsurance}
                    CapEx={CapEx}
                    otherExpenses={otherExpenses}
                    repairsAndMaintenance={repairsAndMaintenance}
                    setTotalMonthlyExpense={setTotalMonthlyExpense}
                    totalMonthlyExpense={totalMonthlyExpense}
                  ></Expenses>
                </Grid>
                <Grid item xl={3} lg={3} sm={6} xs={12}>
                  <Profits
                    totalMonthlyExpense={totalMonthlyExpense}
                    totalMonthlyRevenue={totalMonthlyRevenue}
                    setTotalProfit={setTotalProfit}
                  ></Profits>
                </Grid>
                <Grid item lg={12} md={12} xl={12} xs={12}>
                  <Cashflow
                    totalMonthlyExpense={totalMonthlyExpense}
                    totalMonthlyRevenue={totalMonthlyRevenue}
                    totalProfit={totalProfit}
                    annualGrowth={annualGrowth}
                    annualPVGrowth={annualPVGrowth}
                    annualExpenseGrowth={annualExpenseGrowth}
                  ></Cashflow>
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
export default NewDealSwitcher;
