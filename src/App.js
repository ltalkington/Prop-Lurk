import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./Pages/Dashboard";
import Properties from "./Pages/Properties";
import Financials from "./Pages/Financials";
import Calculators from "./Pages/Calculators";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Contact from "./Pages/Contact";
import AddProperty from "./Pages/AddProperty";
import UpdateProperty from "./Pages/UpdateProperty";
import RemoveProperty from "./Pages/RemoveProperty";
import NewDeal from "./Pages/NewDeal";
import FlipDeal from "./Pages/FlipDeal";
import CompCalculator from "./Pages/SalesComp";
import WholesaleCalculator from "./Pages/Wholesale";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard></Dashboard>}></Route>
          <Route
            path="/properties"
            exact
            element={<Properties></Properties>}
          ></Route>
          <Route
            path="/financials"
            exact
            element={<Financials></Financials>}
          ></Route>
          <Route
            path="/calculators"
            exact
            element={<Calculators></Calculators>}
          ></Route>
          <Route
            path="/addproperty"
            exact
            element={<AddProperty></AddProperty>}
          ></Route>
          <Route
            path="/updateproperty"
            exact
            element={<UpdateProperty></UpdateProperty>}
          ></Route>
          <Route
            path="/removeproperty"
            exact
            element={<RemoveProperty></RemoveProperty>}
          ></Route>
          <Route
            path="/newdealanalyzer"
            exact
            element={<NewDeal></NewDeal>}
          ></Route>
          <Route
            path="/flipanalyzer"
            exact
            element={<FlipDeal></FlipDeal>}
          ></Route>
          <Route
            path="/compcalculator"
            exact
            element={<CompCalculator></CompCalculator>}
          ></Route>
          <Route
            path="/wholesalecalculator"
            exact
            element={<WholesaleCalculator></WholesaleCalculator>}
          ></Route>
          <Route path="/profile" exact element={<Profile></Profile>}></Route>
          <Route path="/settings" exact element={<Settings></Settings>}></Route>
          <Route path="/contact" exact element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
