import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Coupon from "./coupons/Coupon";
import AddFlatCoupon from "./coupons/AddFlatCoupon";
import AddPercentCoupon from "./coupons/AddPercentCoupon";
import ShowStatus from "./status/ShowStatus";
import ErrorHandler from "../error/ErrorHandler";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Coupon} />
            <Route path="/addflat" exact component={AddFlatCoupon} />
            <Route path="/addpercent" exact component={AddPercentCoupon} />
            <Route path="/status" exact component={ShowStatus} />
            <Route component={ErrorHandler} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
