import React from "react";
import { Redirect } from "react-router-dom";

class AddFlatCoupon extends React.Component {
  state = {
    coupon_code: "",
    minimum_amount: 0,
    discount_amount: 0,
    validity: 0,
    navigate: false,
    data: ""
  };

  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let { coupon_code, minimum_amount, discount_amount, validity } = this.state;
    try {
      const response = await fetch(
        "https://rvrbhfrk9j.execute-api.us-east-2.amazonaws.com/production/aws/add-flat-coupon",
        {
          method: "post",
          mode: "cors",
          credentials: "same-origin",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,GET,POST"
          },
          body: JSON.stringify({
            coupon_code,
            minimum_amount,
            discount_amount,
            validity
          })
        }
      );
      const data = await response.json();
      if (data) {
        data.coupon_code = coupon_code;
        this.setState({ data });
        this.setState({ navigate: true });
      }
    } catch (err) {
      if (err) {
        alert(err);
      }
    }
  };

  render() {
    if (this.state.navigate) {
      return (
        <Redirect
          to={{
            pathname: "/status",
            state: this.state.data
          }}
        />
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Flat Coupon</h3>
        <div className="form-group">
          <label>Coupon Code</label>
          <input
            type="text"
            className="form-control"
            name="coupon_code"
            required
            onChange={evt => {
              this.setState({ coupon_code: evt.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Minimum amount</label>
          <input
            type="number"
            min="0"
            name="minimum_amount"
            className="form-control"
            required
            onChange={evt => {
              this.setState({ minimum_amount: evt.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Discount amount</label>
          <input
            type="number"
            min="0"
            name="discount_amount"
            className="form-control"
            required
            onChange={evt => {
              this.setState({ discount_amount: evt.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label>Validity (in Days)</label>
          <input
            type="number"
            name="validity"
            className="form-control"
            required
            min="1"
            max="30"
            onChange={evt => {
              this.setState({ validity: evt.target.value });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddFlatCoupon;
