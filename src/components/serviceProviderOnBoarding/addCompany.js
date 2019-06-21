import React, { Component } from "react";

class AddCompany extends Component {
  state = {
    pageError: false,
    errorMsg: "",
    submitBtn: true
  };
  submitBtn = e => {
    e.preventDefault();

    if (this.name.value.trim() === "") {
      this.setState((prevState, props) => {
        return {
          errorMsg: "Please enter your name",
          pageError: true
        };
      });

      return;
    } else if (this.company.value.trim() === "") {
      this.setState((prevState, props) => {
        return {
          errorMsg: "Please enter your company's name",
          pageError: true
        };
      });
      return;
    } else if (
      this.email.value.trim() === "" ||
      !/\S+@\S+\.\S+/.test(this.email.value.trim())
    ) {
      this.setState((prevState, props) => {
        return {
          errorMsg: "Please enter your email address",
          pageError: true
        };
      });
      return;
    } else if (
      this.phone.value.trim() === "" ||
      isNaN(this.phone.value.trim())
    ) {
      this.setState((prevState, props) => {
        return {
          errorMsg: "Please enter your phone number",
          pageError: true
        };
      });
      return;
    } else if (this.description.value.trim() === "") {
      this.setState((prevState, props) => {
        return {
          errorMsg: "Please describe your company in a few words.",
          pageError: true
        };
      });
      return;
    } else if (this.register.value.trim() === "") {
      this.setState((prevState, props) => {
        return {
          errorMsg: "Please your CAC registration number.",
          pageError: true
        };
      });
      return;
    }

    this.setState({
      submitBtn: false
    });

    this.props.history.push("/service-product/register_company");
  };
  render() {
    return (
      <section>
        <div className="inner--container">
          <div className="card blue-border no-border-radius">
            <div className="card-header text-center mt-2">
              <h5 className="bold-header">
                Please key in your company information
              </h5>
            </div>
            <div className="line" />
            <div className="card-content collapse show">
              <div className="card-body px-0">
                <form action="#" className="mb-5 pt-lg-1">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 ">
                      <div className="form-group">
                        <label>Company name</label>
                        <input
                          type="text"
                          className="form-control required"
                          ref={input => (this.name = input)}
                        />
                      </div>
                    </div>
                    <div className="col-md-10 offset-md-1 ">
                      <div className="form-group">
                        <label>Company Address</label>
                        <input
                          type="text"
                          className="form-control required"
                          ref={input => (this.company = input)}
                        />
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1 ">
                      <div className="form-group">
                        <label>Company Email</label>
                        <input
                          type="text"
                          className="form-control required"
                          ref={input => (this.email = input)}
                        />
                      </div>
                    </div>
                    <div className="col-md-5 ">
                      <div className="form-group">
                        <label>Company Phone</label>
                        <input
                          type="text"
                          className="form-control required"
                          ref={input => (this.phone = input)}
                        />
                      </div>
                    </div>
                    <div className="col-md-10 offset-md-1 ">
                      <div className="form-group">
                        <label>Company Description</label>
                        <textarea
                          className="form-control"
                          cols="4"
                          rows="4"
                          ref={input => (this.description = input)}
                        />
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="form-group">
                        <label>CAC Registration Number</label>
                        <input
                          type="text"
                          className="form-control required"
                          ref={input => (this.register = input)}
                        />
                      </div>
                    </div>
                    <div className="col-md-5 ">
                      <div className="form-group">
                        <label>Company Url</label>
                        <input
                          type="text"
                          className="form-control required"
                          ref={input => (this.url = input)}
                        />
                      </div>
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
                          {this.state.errorMsg}
                        </span>
                      ) : null}
                    </div>

                    <div
                      className="col-md-12"
                      style={{ width: "200px", margin: "auto" }}
                    >
                      {this.state.submitBtn ? (
                        <button
                          className="btn btn-dark-blue nextBtn btn-lg show-header2 px-3"
                          type="submit"
                          style={{
                            width: "200px",
                            margin: "auto",
                            borderRadius: "5px"
                          }}
                          onClick={this.submitBtn}
                        >
                          Next
                        </button>
                      ) : null}
                      {!this.state.submitBtn ? (
                        <div
                          className="spin__loader"
                          style={{
                            width: "200px",
                            margin: "auto",
                            borderRadius: "5px"
                          }}
                        >
                          <div className="spinning" />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddCompany;
