import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as constant from "./../../global/constant";

class Payment extends Component {
  state = {
    submitBtn: true,
    switchBtn: false,
    trial: false,
    pageError: false,
    newFields: [
      {
        plan: "plan",
        amount: "amount",
        validity: "validity"
      }
    ],
    inc: 1,
    change: []
  };

  createPayment = () => {
    const item = this.state.newFields;

    item.push({
      item: item
    });

    this.setState({
      newFields: item
    });
  };

  switchBtn = () => {
    if (this.state.switchBtn) {
      this.setState({
        switchBtn: false
      });
    } else {
      this.setState({
        switchBtn: true
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const formElements = e.target.elements;
    const formValues = {
      plans: []
    };

    Object.keys(formElements).forEach(key => {
      if (
        formElements[key].type === "text" ||
        formElements[key].type === "select-one"
      ) {
        if (formElements[key].value.trim() !== "") {
          if (formValues.plans.length > 0) {
            for (let i of formValues.plans) {
              if (i.name === "plan") {
                if (i.value !== formElements[key].value) {
                  formValues.plans.push({
                    name: formElements[key].name,
                    value: formElements[key].value
                  });
                }

                if (i.name === "amount") {
                  formValues.plans.push({
                    name: formElements[key].name,
                    value: formElements[key].value
                  });
                }

                if (i.name === "validity") {
                  formValues.plans.push({
                    name: formElements[key].name,
                    value: formElements[key].value
                  });
                }
              }
            }
          } else {
            formValues.plans.push({
              name: formElements[key].name,
              value: formElements[key].value
            });
          }
        }
      }
    });

    const formData = {
      test: true
    };

    for (let i of formValues.plans) {
      if (i.name === "plan") {
        formData.name = i.value;
      }

      if (i.name === "validity") {
        formData.validity = i.value;
      }

      if (i.name === "amount") {
        formData.amount = parseInt(i.value, 10);
      }
    }

    formData.productId = localStorage.productId;

    formData.renewable = true;

    // console.log(formData);

    if (formValues.length === 0) {
      this.setState({
        pageError: true
      });
      return;
    }

    this.setState({
      submitBtn: false
    });

    axios
      .post(constant.PLANS_API, formData)
      .then(response => {
        console.log(response);
        alert("data sent");
        this.setState({
          submitBtn: true
        });
      })
      .catch(error => {
        this.setState({
          submitBtn: true
        });
        console.log(JSON.parse(JSON.stringify(error)));
      });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title text-center form-header header5">
            Payment Plan
          </h4>
          <div className="navigation__indicator">
            <div className="navigation__indicator--box">
              <div className="navigation__indicator--line" />
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <Link to="/">
                    <div className="navigation__indicator--innerlink">1</div>
                  </Link>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <Link to="/create-product/categories">
                    <div className="navigation__indicator--innerlink">2</div>
                  </Link>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <Link to="/create-product/register-company">
                    <div className="navigation__indicator--innerlink">3</div>
                  </Link>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <Link to="/create-product/channels">
                    <div className="navigation__indicator--innerlink">4</div>
                  </Link>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <Link to="/create-product/content">
                    <div className="navigation__indicator--innerlink">5</div>
                  </Link>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--inactiveLink">
                  <div className="navigation__indicator--innerlink">6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line mb-2" />
        <div className="card-content collapse show">
          <div className="inner--container">
            <div className="payment__card--trial">
              <div>
                <div
                  className="payment__card--btn"
                  style={
                    this.state.switchBtn
                      ? { backgroundColor: "#36c4ce" }
                      : { backgroundColor: "#dddddd" }
                  }
                  onClick={this.switchBtn}
                >
                  <div
                    className={
                      this.state.switchBtn
                        ? "payment__card--btnOn"
                        : "payment__card--btnOff"
                    }
                  />
                </div>
                <div className="payment__card--text">Trial Access</div>
              </div>
              <div>
                <select>
                  <option>Duration</option>
                  <option>7</option>
                  <option>10</option>
                  <option>20</option>
                </select>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #36c4ce" }} />
            <form onSubmit={this.onSubmit}>
              {this.state.newFields.map((data, index) => {
                return (
                  <div className="payment__card" key={index}>
                    <div>
                      <div className="payment__card--box">
                        <div className="payment__card--name">Plan Name</div>
                        <div className="payment__card--input">
                          <div className="payment__card--textinput">
                            <input type="text" name="plan" />
                          </div>
                        </div>
                      </div>
                      <div className="payment__card--box">
                        <div className="payment__card--name">Amount</div>
                        <div className="payment__card--input">
                          <div className="payment__card--selectamount">
                            <div className="payment__card--amountsign">
                              &#8358;
                            </div>
                            <div className="payment__card--amount">
                              <select name="amount">
                                <option />
                                <option value="500">500</option>
                                <option value="600">600</option>
                                <option value="800">800</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="payment__card--box">
                        <div className="payment__card--name">Validity</div>
                        <div className="payment__card--input">
                          <div className="payment__card--select">
                            <select name="validity">
                              <option />
                              <option value="7">7 days</option>
                              <option value="10">10 days</option>
                              <option value="12">12 days</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="payment__card--add">
                <div onClick={this.createPayment}>ADD CUSTOM PLAN</div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  paddingBottom: "5px",
                  color: "red"
                }}
              >
                {this.state.pageError ? (
                  <span style={{ fontStyle: "italic" }}>
                    Some inputs are empty.
                  </span>
                ) : null}
              </div>

              <div>
                {this.state.submitBtn ? (
                  <button className="page__button">Next</button>
                ) : null}
                {!this.state.submitBtn ? (
                  <div className="spin__loader">
                    <div className="spinning" />
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Payment;
