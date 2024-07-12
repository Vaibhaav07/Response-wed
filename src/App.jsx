import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Baner from "./Component/Baner";
import Cont from "./Component/Cont";
import Exports from "./Component/Exports";
import Footer from "./Component/Footer";
import HeaderA from "./Component/HeaderA";
// import Test from "./Component/Test ";
function App() {
  return (
    <Router>
      <div>
        <HeaderA />
        <Baner />
        <Exports />
        <Cont />
        <Footer />
        {/* <Routes>
          <Route path="/test" element={<Test />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
