import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as constant from "./../../global/constant";

class Channel extends Component {
  state = {
    sms: false,
    ussd: false,
    ivr: false,
    web: false,
    submitBtn: true,
    pageError: false,
    webOptions: {
      default: true,
      external: false
    }
  };

  handleSms = () => {
    if (!this.state.sms) {
      this.setState({
        sms: true
      });
    } else {
      this.setState({
        sms: false
      });
    }
  };

  handleUssd = () => {
    if (!this.state.ussd) {
      this.setState({
        ussd: true
      });
    } else {
      this.setState({
        ussd: false
      });
    }
  };

  handleIvr = () => {
    if (!this.state.ivr) {
      this.setState({
        ivr: true
      });
    } else {
      this.setState({
        ivr: false
      });
    }
  };

  handleWeb = () => {
    if (!this.state.web) {
      this.setState({
        web: true
      });
    } else {
      this.setState({
        web: false
      });
    }
  };

  selectDeafult = () => {
    this.setState({
      webOptions: {
        default: true,
        external: false
      }
    });
  };

  selectExternal = () => {
    this.setState({
      webOptions: {
        default: false,
        external: true
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      submitBtn: false
    });

    const channelData = {
      sms: {},
      ussd: {},
      ivr: {}
    };

    const productId = localStorage.productId;

    channelData.productId = productId;

    if (this.smsServiceCode) {
      channelData.sms.shortCode = this.smsServiceCode.value;
    } else {
      channelData.sms.shortCode = "";
    }

    if (this.smsServiceAccess) {
      channelData.sms.accessKeyword = this.smsServiceAccess.value;
    } else {
      channelData.sms.accessKeyword = "";
    }

    if (this.ussdServiceAccess) {
      channelData.ussd.accessString = this.ussdServiceAccess.value;
    } else {
      channelData.ussd.accessString = "";
    }

    if (this.ussdApplication) {
      channelData.ussd.shortCode = this.ussdApplication.value;
    } else {
      channelData.ussd.shortCode = "";
    }

    if (this.ivrServiceAccess) {
      channelData.ivr.did = this.ivrServiceAccess.value;
    } else {
      channelData.ivr.did = "";
    }

    if (this.dtmfCode) {
      channelData.ivr.dtmf = this.dtmfCode.value;
    } else {
      channelData.ivr.dtmf = "";
    }

    if (this.ServiceDedicatedDid) {
      channelData.ivr.fileId = this.ServiceDedicatedDid.value;
    } else {
      channelData.ivr.fileId = "";
    }

    // if (this.web) {
    //   channelData.web = this.web.value;
    // } else {
    //   channelData.web = "";
    // }

    if (JSON.stringify(channelData) === "{}") {
      this.setState({
        pageError: true
      });

      return;
    }

    console.log(channelData);

    axios
      .post(constant.CHANNEL_API, channelData)
      .then(response => {
        this.setState({
          submitBtn: true
        });

        this.props.history.push("/create-product/content");
      })
      .catch(error => {
        console.log(JSON.parse(JSON.stringify(error)).response.data.error);
      });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title text-center form-header header3">
            Access Channels
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
                <div className="navigation__indicator--link navigation__indicator--inactiveLink">
                  <div className="navigation__indicator--innerlink">4</div>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <div className="navigation__indicator--innerlinkNohover">
                    5
                  </div>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <div className="navigation__indicator--innerlinkNohover">
                    6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="line mb-2" />
        <div className="card-content collapse show">
          <div className="inner--container">
            <div className="channel__card">
              <div className="channel__card--checkbox">
                <div className="channel__checkbox--left">
                  <div
                    onClick={this.handleSms}
                    className={
                      this.state.sms ? "channel__active" : "channel__inactive"
                    }
                  />
                </div>
                <div className="channel__checkbox--right">SMS OPTIONS</div>
                {this.state.sms ? (
                  <div className="channel__dropdown--box">
                    <div className="channel__dropdown--select">
                      <p>Service Shortcode</p>
                      <div>
                        <select ref={input => (this.smsServiceCode = input)}>
                          <option>Service Shortcode 1</option>
                          <option>Service Shortcode 2</option>
                          <option>Service Shortcode 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="channel__dropdown--select">
                      <p>Service Access Keyword</p>
                      <div>
                        <input
                          type="text"
                          ref={input => (this.smsServiceAccess = input)}
                        />{" "}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="channel__card--checkbox">
                <div className="channel__checkbox--left">
                  <div
                    onClick={this.handleUssd}
                    className={
                      this.state.ussd ? "channel__active" : "channel__inactive"
                    }
                  />
                </div>
                <div className="channel__checkbox--right">USSD OPTIONS</div>
                {this.state.ussd ? (
                  <div className="channel__dropdown--box">
                    <div className="channel__dropdown--select">
                      <p>Service Access Shortcode</p>
                      <div>
                        <select ref={input => (this.ussdServiceAccess = input)}>
                          <option>Service Shortcode 1</option>
                          <option>Service Shortcode 2</option>
                          <option>Service Shortcode 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="channel__dropdown--select">
                      <p>USSD Application URL flow</p>
                      <div>
                        <input
                          type="text"
                          ref={input => (this.ussdApplication = input)}
                        />
                      </div>
                      <span>
                        <a href="google.com" taget="_blank">
                          Click here to view Documentation
                        </a>
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="channel__card--checkbox">
                <div className="channel__checkbox--left">
                  <div
                    onClick={this.handleIvr}
                    className={
                      this.state.ivr ? "channel__active" : "channel__inactive"
                    }
                  />
                </div>
                <div className="channel__checkbox--right">IVR OPTIONS</div>
                {this.state.ivr ? (
                  <div className="channel__dropdown--box">
                    <div className="channel__dropdown--select">
                      <p>DTMF code</p>
                      <div>
                        <input
                          type="text"
                          ref={input => (this.dtmfCode = input)}
                        />
                      </div>
                    </div>
                    <div className="channel__dropdown--select">
                      <p>Service dedicated DID</p>
                      <div>
                        <select
                          ref={input => (this.ServiceDedicatedDid = input)}
                        >
                          <option>Service Shortcode 1</option>
                          <option>Service Shortcode 2</option>
                          <option>Service Shortcode 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="channel__card--checkbox">
                <div className="channel__checkbox--left">
                  <div
                    onClick={this.handleWeb}
                    className={
                      this.state.web ? "channel__active" : "channel__inactive"
                    }
                  />
                </div>
                <div className="channel__checkbox--right">WEB OPTIONS</div>
                {this.state.web ? (
                  <div className="channel__dropdown--box">
                    <div className="channel__dropdown--radio">
                      <div className="channel__dropdown--radio-left">
                        <div
                          className={
                            this.state.webOptions.default
                              ? "channel__active"
                              : "channel__inactive"
                          }
                          onClick={this.selectDeafult}
                        />
                      </div>
                      <div className="channel__dropdown--radio-right">
                        Default
                      </div>
                    </div>
                    <div className="channel__dropdown--radio">
                      <div className="channel__dropdown--radio-left">
                        <div
                          className={
                            this.state.webOptions.external
                              ? "channel__active"
                              : "channel__inactive"
                          }
                          onClick={this.selectExternal}
                        />
                      </div>
                      <div className="channel__dropdown--radio-right">
                        External Site
                      </div>
                    </div>

                    {this.state.webOptions.external ? (
                      <div>
                        <div className="channel__dropdown--select">
                          <p>Website URL</p>
                          <div>
                            <input
                              type="text"
                              ref={input => (this.web = input)}
                            />
                          </div>
                        </div>
                        <div className="channel__dropdown--select">
                          <p>Copy the link below</p>
                          <div style={{ padding: "5px" }}>www.google.com</div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
            <div style={{ color: "red" }}>
              {this.state.pageError ? (
                <span style={{ fontStyle: "italic" }}>
                  You have not made any selection.
                </span>
              ) : null}
            </div>
            <div>
              {this.state.submitBtn ? (
                <div className="page__button" onClick={this.onSubmit}>
                  Next
                </div>
              ) : null}
              {!this.state.submitBtn ? (
                <div className="spin__loader">
                  <div className="spinning" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Channel;
