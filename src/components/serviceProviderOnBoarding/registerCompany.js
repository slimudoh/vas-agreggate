import React, { Component } from "react";

class RegisterCompany extends Component {
  state = {
    image: false,
    logo: "click here to select image",
    register: "click here to select image",
    shortcode: "click here to select image",
    vas: "click here to select image",
    logoError: false,
    registerError: false,
    codeError: false,
    vasError: false,
    submitBtn: true,
    logoCheck: false,
    registerCheck: false,
    codeCheck: false,
    vasCheck: false
  };

  uploadLogo = e => {
    const logo = e.target.value.split("\\").pop();
    this.setState((prevState, props) => {
      return {
        logo: logo
      };
    });

    if (this.uploadImage(e)) {
      this.setState({
        logoCheck: true
      });
    }
  };

  upLoadRegister = e => {
    const reg = e.target.value.split("\\").pop();

    this.setState((prevState, props) => {
      return {
        register: reg
      };
    });

    if (this.uploadImage(e)) {
      this.setState({
        registerCheck: true
      });
    }
  };

  uploadCode = e => {
    const code = e.target.value.split("\\").pop();

    this.setState((prevState, props) => {
      return {
        shortcode: code
      };
    });

    if (this.uploadImage(e)) {
      this.setState({
        codeCheck: true
      });
    }
  };

  uploadVas = e => {
    const vas = e.target.value.split("\\").pop();

    this.setState((prevState, props) => {
      return {
        vas: vas
      };
    });

    if (this.uploadImage(e)) {
      this.setState({
        vasCheck: true
      });
    }
  };

  uploadImage = e => {
    const elem = e.target;
    let formData = new FormData();
    formData.append("file", elem.files[0]);
    console.log(formData);
    return true;
  };

  onSubmit = e => {
    this.setState({
      logoError: false,
      registerError: false,
      codeError: false,
      vasError: false
    });

    e.preventDefault();
    if (!this.state.logoCheck) {
      this.setState({
        logoError: true
      });
      return;
    }

    if (!this.state.registerCheck) {
      this.setState({
        registerError: true
      });
      return;
    }

    if (!this.state.codeCheck) {
      this.setState({
        codeError: true
      });
      return;
    }

    if (!this.state.vasCheck) {
      this.setState({
        vasError: true
      });
      return;
    }

    this.setState({
      submitBtn: false
    });

    this.props.history.push("/add-services");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <section>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title text-center form-header header5">
                        Company Registration
                      </h4>

                      <div className="navigation__indicator">
                        <div
                          className="navigation__indicator--box"
                          style={{ width: "200px" }}
                        >
                          <div className="navigation__indicator--line" />
                          <div className="navigation__indicator--inbox">
                            <div
                              className="navigation__indicator--link navigation__indicator--activeLink"
                              style={{ float: "left" }}
                            >
                              <div className="navigation__indicator--innerlink">
                                1
                              </div>
                            </div>
                          </div>
                          <div className="navigation__indicator--inbox">
                            <div
                              className="navigation__indicator--link navigation__indicator--activeLink"
                              style={{ float: "right" }}
                            >
                              <div className="navigation__indicator--innerlinkNohover">
                                2
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="line mb-2" />
                    <div className="card-content collapse show">
                      <div className="inner--container">
                        <div className="card-body">
                          <form className="onboard-stepper-form">
                            <div className="row mt-2">
                              <div className="upload__card">
                                <span>Company Logo</span>
                                <p>
                                  Please upload a scanned copy of your Company
                                  Logo
                                </p>
                                <div>
                                  {this.state.logo}
                                  <input
                                    type="file"
                                    onChange={this.uploadLogo}
                                    ref={input => (this.logo = input)}
                                  />
                                </div>
                              </div>

                              <div className="upload__card">
                                <span>Company Registration</span>
                                <p>
                                  Please upload a scanned copy of your Company
                                  Registration Certificate
                                </p>
                                <div>
                                  {this.state.register}
                                  <input
                                    type="file"
                                    onChange={this.upLoadRegister}
                                    ref={input => (this.register = input)}
                                  />
                                </div>
                              </div>

                              <div className="upload__card">
                                <span>Shortcode Approval</span>
                                <p>
                                  Please upload a scanned copy of your Shortcode
                                  Approval
                                </p>
                                <div>
                                  {this.state.shortcode}
                                  <input
                                    type="file"
                                    onChange={this.uploadCode}
                                    ref={input => (this.shortcode = input)}
                                  />
                                </div>
                              </div>

                              <div className="upload__card">
                                <span>VAS LIcense</span>
                                <p>
                                  Please upload a scanned copy of your VAS
                                  license
                                </p>
                                <div>
                                  {this.state.vas}
                                  <input
                                    type="file"
                                    onChange={this.uploadVas}
                                    ref={input => (this.vas = input)}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                textAlign: "center",
                                paddingBottom: "5px",
                                color: "red",
                                height: "20px"
                              }}
                            >
                              {this.state.logoError ? (
                                <span style={{ fontStyle: "italic" }}>
                                  Please upload your company's logo.
                                </span>
                              ) : null}
                              {this.state.registerError ? (
                                <span style={{ fontStyle: "italic" }}>
                                  Please upload your company's regsitration.
                                </span>
                              ) : null}
                              {this.state.codeError ? (
                                <span style={{ fontStyle: "italic" }}>
                                  Please upload your Shortcode approval.
                                </span>
                              ) : null}
                              {this.state.vasError ? (
                                <span style={{ fontStyle: "italic" }}>
                                  Please upload your VAS LIcense.
                                </span>
                              ) : null}
                            </div>
                            <div>
                              {this.state.submitBtn ? (
                                <button
                                  className="btn btn-dark-blue nextBtn btn-lg show-header2 px-3"
                                  type="submit"
                                  onClick={this.onSubmit}
                                >
                                  Next
                                </button>
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

export default RegisterCompany;
