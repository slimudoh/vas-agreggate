import React, { Component } from "react";
// import { Link } from "react-router-dom";

class ChangePassword extends Component {
  state = {
    submitBtn: false
  };

  submitPassword = e => {
    e.preventDeafult();
    console.log("hello");

    console.log(this.password.value);
    console.log(this.confirmPassword.value);

    this.props.history.push("/service-product/change_password");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <section>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header text-center">
                      <img
                        src={require("./../../container/assets/images/email-message-icon.svg")}
                        alt="Angel"
                      />
                      <h2 className="gray-text bold">Angel,</h2>
                      <h4 className="gray-text px-md-5">
                        You have successfully verified your account.
                      </h4>
                      <h4 className="gray-text px-md-5">
                        Please change your password.
                      </h4>
                    </div>
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <form action="#" className="form-plr  mb-5">
                          <div className="row">
                            <div className="col-md-6 offset-md-3">
                              <div className="custom-form-field">
                                <input
                                  type="text"
                                  className="form-control custom-form-control"
                                  placeholder="Password"
                                  ref={input => (this.confirmPassword = input)}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-md-6 offset-md-3 ">
                              <div className="custom-form-field">
                                <input
                                  type="text"
                                  ref={input => (this.password = input)}
                                  className="form-control custom-form-control"
                                  placeholder="Confirm password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="text-center">
                            <a
                              href="gogoog.jgjgj"
                              className="btn btn-custom btn-dark-blue"
                            >
                              Change Password
                            </a>
                          </div>
                        </form>
                        <p className="text-center mt-2">
                          Already have an account? Sign In
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
