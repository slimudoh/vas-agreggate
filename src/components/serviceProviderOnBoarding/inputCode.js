import React, { Component } from "react";
import { Link } from "react-router-dom";

class InputCode extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <section>
              <div className="row">
                <div className="col-12">
                  <div className="card blue-border no-border-radius">
                    <div className="card-header text-center">
                      <h4 className="bold-header">
                        Input all approved Shortcode (USSD, IVR, SMS)
                      </h4>
                    </div>
                    <div>
                      <div />
                      <div className="marker mfirst timeline-icon one ">1</div>
                      <div className="marker m2 timeline-icon two active">
                        2
                      </div>
                    </div>

                    <div className="line" />
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <form action="#" className="form-plr mb-md-5 mt-md-3">
                          <div className="row">
                            <div className="col-8 offset-2">
                              <label className="strong-label">USSD</label>
                              <input
                                type="text"
                                value="53453,34543,54355,34554,42455"
                                data-role="tagsinput"
                              />
                            </div>
                            <div className="col-8 offset-2">
                              <label className="strong-label">IVR</label>
                              <input
                                type="text"
                                value="53453,34543,54355,34554,42455"
                                data-role="tagsinput"
                              />
                            </div>
                            <div className="col-8 offset-2">
                              <label className="strong-label">SMS</label>
                              <input
                                type="text"
                                value="53453,34543,54355,34554,42455"
                                data-role="tagsinput"
                              />
                            </div>
                            <div className="col-8 offset-2">
                              <div className="form-group mt-md-2 text-center">
                                <Link to="/add_service">Continue</Link>
                              </div>
                            </div>
                          </div>
                        </form>
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

export default InputCode;
