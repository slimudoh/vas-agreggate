import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as constant from "./../../global/constant";

class Content extends Component {
  state = {
    switchon: true,
    source: {
      custom: false,
      daily: true
    },
    sms: false,
    ussd: false,
    ivr: false,
    web: false,
    sourceSms: {
      repo: false,
      default: true,
      feed: false
    },
    sourceUssd: {
      content: false,
      default: true
    },
    sourceWeb: {
      external: false,
      default: true
    },
    sourceIvr: {
      content: true,
      sip: false,
      signal: false,
      media: false
    },
    error: {
      deliveryError: false,
      sourceError: false
    },
    contentLeft: true,
    contentRight: false,
    submitBtn: true,
    sourceSMS: {},
    sourceUSSD: {},
    sourceIVR: {},
    sourceWEB: {}
  };

  newTab = val => {
    if (val === "delivery") {
      this.setState({
        contentLeft: true,
        contentRight: false
      });
    } else if (val === "source") {
      this.setState({
        contentLeft: false,
        contentRight: true
      });
    }
  };

  handleSources = val => {
    if (val === "daily") {
      this.setState({
        source: {
          daily: true,
          custom: false
        }
      });
    } else if (val === "custom") {
      this.setState({
        source: {
          daily: false,
          custom: true
        }
      });
    }
  };

  handleDelivery = val => {
    if (val === "sms") {
      if (!this.state.sms) {
        this.setState({
          sms: true
        });
      } else {
        this.setState({
          sms: false
        });
      }
    } else if (val === "ussd") {
      if (!this.state.ussd) {
        this.setState({
          ussd: true
        });
      } else {
        this.setState({
          ussd: false
        });
      }
    } else if (val === "ivr") {
      if (!this.state.ivr) {
        this.setState({
          ivr: true
        });
      } else {
        this.setState({
          ivr: false
        });
      }
    } else if (val === "web") {
      if (!this.state.web) {
        this.setState({
          web: true
        });
      } else {
        this.setState({
          web: false
        });
      }
    }
  };

  handleSms = val => {
    if (val === "default") {
      if (!this.state.sourceSms.default) {
        this.setState(
          {
            sourceSms: {
              repo: false,
              default: true,
              feed: false
            },
            sourceSMS: {
              sms: "default",
              url: ""
            }
          },
          () => {}
        );
      }
    } else if (val === "feed") {
      if (!this.state.sourceSms.feed) {
        this.setState(
          {
            sourceSms: {
              repo: false,
              default: false,
              feed: true
            },
            sourceSMS: {
              type: "feed",
              url: this.feed ? this.feed.value : ""
            }
          },
          () => {}
        );
      }
    } else if (val === "repo") {
      if (!this.state.sourceSms.repo) {
        this.setState(
          {
            sourceSms: {
              repo: true,
              default: false,
              feed: false
            },
            sourceSMS: {
              type: "repo",
              url: this.repo ? this.repo.value : ""
            }
          },
          () => {}
        );
      }
    }
  };

  handleUssd = val => {
    if (val === "default") {
      this.setState(
        {
          sourceUssd: {
            content: false,
            default: true
          },
          sourceUSSD: {
            type: "default",
            url: ""
          }
        },
        () => {}
      );
    } else if (val === "content") {
      this.setState(
        {
          sourceUssd: {
            content: true,
            default: false
          },
          sourceUSSD: {
            type: "content",
            url: this.content ? this.content.value : ""
          }
        },
        () => {}
      );
    }
  };

  handleWeb = val => {
    if (val === "default") {
      this.setState(
        {
          sourceWeb: {
            external: false,
            default: true
          },
          sourceWEB: {
            type: "default",
            url: ""
          }
        },
        () => {}
      );
    } else if (val === "external") {
      this.setState(
        {
          sourceWeb: {
            external: true,
            default: false
          },
          sourceWEB: {
            type: "external",
            url: ""
          }
        },
        () => {}
      );
    }
  };

  handleIvr = val => {
    if (val === "content") {
      this.setState(
        {
          sourceIvr: {
            content: true,
            sip: false,
            signal: false,
            media: false
          },
          sourceIVR: {
            type: "content"
          }
        },
        () => {}
      );
    } else if (val === "sip") {
      this.setState(
        {
          sourceIvr: {
            content: false,
            sip: true,
            signal: false,
            media: false
          },
          sourceIVR: {
            type: "sip"
          }
        },
        () => {}
      );
    } else if (val === "signal") {
      this.setState(
        {
          sourceIvr: {
            content: false,
            sip: false,
            signal: true,
            media: false
          },
          sourceIVR: {
            type: "signalingGatewayIp",
            signalingGatewayIp: this.signal ? this.signal.value : ""
          }
        },
        () => {}
      );
    } else if (val === "media") {
      this.setState(
        {
          sourceIvr: {
            content: false,
            sip: false,
            signal: false,
            media: true
          },
          sourceIVR: {
            type: "mediaGatewayIp",
            mediaGatewayIp: this.media ? this.media.value : ""
          }
        },
        () => {}
      );
    }
  };

  handleSubmit = e => {
    // this.props.history.push("/create-product/payment");
    e.preventDefault();
    const productId = localStorage.productId;
    const contentdata = {
      deliveryMethod: {},
      sources: {
        sms: {},
        ussd: {},
        ivr: {},
        web: {}
      }
    };

    contentdata.test = true;
    contentdata.productId = productId;
    contentdata.deliveryMethod.name = this.name ? this.name.value : "daily";
    contentdata.deliveryMethod.type = this.type ? this.type.value : "";
    contentdata.deliveryMethod.metric = this.metric ? this.metric.value : "";
    contentdata.deliveryMethod.description = this.description
      ? this.description.value
      : "";
    contentdata.deliveryMethod.description = this.description
      ? this.description.value
      : "";
    contentdata.deliveryTime = this.deliveryTime ? this.deliveryTime.value : "";

    if (Object.keys(this.state.sourceSMS).length > 0) {
      contentdata.sources = this.state.sourceSMS;
    } else {
      contentdata.sources.sms.type = "";
      contentdata.sources.sms.url = "";
    }

    if (Object.keys(this.state.sourceUSSD).length > 0) {
      contentdata.sources = this.state.sourceUSSD;
    } else {
      contentdata.sources.ussd.type = "";
      contentdata.sources.ussd.url = "";
    }

    if (Object.keys(this.state.sourceIVR).length > 0) {
      contentdata.sources = this.state.sourceIVR;
    } else {
      contentdata.sources.ivr.type = "";
      contentdata.sources.ivr.signalingGatewayIp = "";
      contentdata.sources.ivr.mediaGatewayIp = "";
    }

    if (Object.keys(this.state.sourceWEB).length > 0) {
      contentdata.sources = this.state.sourceWEB;
    } else {
      contentdata.sources.web.type = "";
      contentdata.sources.web.url = "";
    }

    axios
      .post(constant.CONTENT_API, contentdata)
      .then(response => {
        console.log(response);
        this.props.history.push("/create-product/payment");
      })
      .catch(error => {
        console.log(JSON.parse(JSON.stringify(error)).config.data);
      });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title text-center form-header header4">
            Content
          </h4>
          <div className="navigation__indicator">
            <div className="navigation__indicator--box">
              <div className="navigation__indicator--line" />
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <Link to="">
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
                <div className="navigation__indicator--link navigation__indicator--inactiveLink">
                  <div className="navigation__indicator--innerlink">5</div>
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
          <div className="content__navigation">
            <div
              onClick={() => this.newTab("delivery")}
              className={
                this.state.contentLeft ? "content__navigation--active" : null
              }
            >
              Content Delivery
            </div>
            <div
              onClick={() => this.newTab("source")}
              className={
                this.state.contentRight ? "content__navigation--active" : null
              }
            >
              Content Sources
            </div>
          </div>
          <div
            className="content__navigation--leftcontent"
            style={{
              display: this.state.contentLeft ? "block" : "none"
            }}
          >
            <div className="inner--container">
              <div className="channel__card">
                <div className="channel__card--checkbox">
                  <div className="channel__checkbox--left">
                    <div
                      style={{ borderRadius: "60px" }}
                      onClick={() => this.handleSources("daily")}
                      className={
                        this.state.source.daily
                          ? "channel__active"
                          : "channel__inactive"
                      }
                    />
                  </div>
                  <div className="channel__checkbox--right">Daily</div>
                </div>
                <div className="channel__card--checkbox">
                  <div className="channel__checkbox--left">
                    <div
                      style={{ borderRadius: "60px" }}
                      onClick={() => this.handleSources("custom")}
                      className={
                        this.state.source.custom
                          ? "channel__active"
                          : "channel__inactive"
                      }
                    />
                  </div>
                  <div className="channel__checkbox--right">Custom</div>
                  {this.state.source.custom ? (
                    <div className="channel__dropdown--box">
                      <h4>Set Custom Attributes</h4>
                      <div className="channel__dropdown--select">
                        <p>Name</p>
                        <div>
                          <input
                            type="text"
                            ref={input => (this.name = input)}
                          />
                        </div>
                      </div>
                      <div className="channel__dropdown--select">
                        <p>Type</p>
                        <div>
                          <select ref={input => (this.type = input)}>
                            <option value="Content type 1">
                              Content type 1
                            </option>
                            <option value="Content type 1">
                              Content type 2
                            </option>
                            <option value="Content type 1">
                              Content type 3
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="channel__dropdown--select">
                        <p>Metric</p>
                        <div>
                          <select ref={input => (this.metric = input)}>
                            <option value="Content type 1">metric 1</option>
                            <option value="Content type 1">metric 2</option>
                            <option value="Content type 1">metric 3</option>
                          </select>
                        </div>
                      </div>
                      <div className="channel__dropdown--select">
                        <p>Description</p>
                        <div style={{ height: "100px" }}>
                          <textarea ref={input => (this.description = input)} />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="channel__card--checkbox">
                  <div
                    className="channel__dropdown--box"
                    style={{ borderTop: "1px solid #023054", borderRadius: 0 }}
                  >
                    <div className="channel__dropdown--select">
                      <p>Delivery Time</p>
                      <div>
                        <select ref={input => (this.deliveryTime = input)}>
                          <option value="1:30 am">1:30 am</option>
                          <option value="2:00 pm">2:00 pm</option>
                          <option value="5:00 pm">5:00 pm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="content__navigation--leftcontent"
            style={{
              display: this.state.contentRight ? "block" : "none"
            }}
          >
            <div className="inner--container">
              <div className="channel__card">
                <div className="channel__card--checkbox">
                  <div className="channel__checkbox--left">
                    <div
                      onClick={() => this.handleDelivery("sms")}
                      className={
                        this.state.sms ? "channel__active" : "channel__inactive"
                      }
                    />
                  </div>
                  <div className="channel__checkbox--right">SMS</div>
                  {this.state.sms ? (
                    <div className="channel__dropdown--box">
                      <div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleSms("default")}
                              className={
                                this.state.sourceSms.default
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            default
                          </div>
                        </div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleSms("feed")}
                              className={
                                this.state.sourceSms.feed
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            RSS feed
                          </div>
                        </div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleSms("repo")}
                              className={
                                this.state.sourceSms.repo
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            Content Repo
                          </div>
                        </div>
                      </div>

                      {this.state.sourceSms.repo ? (
                        <div className="channel__dropdown--select">
                          <p>Repo URL</p>
                          <div>
                            <input
                              type="text"
                              ref={input => (this.repo = input)}
                            />
                          </div>
                          <span>
                            <a href="google.com" target="_blank">
                              Click here to view Documentation
                            </a>
                          </span>
                        </div>
                      ) : null}
                      {this.state.sourceSms.feed ? (
                        <div className="channel__dropdown--select">
                          <p>RSS feed</p>
                          <div>
                            <input
                              type="text"
                              ref={input => (this.feed = input)}
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="channel__card--checkbox">
                  <div className="channel__checkbox--left">
                    <div
                      onClick={() => this.handleDelivery("ussd")}
                      className={
                        this.state.ussd
                          ? "channel__active"
                          : "channel__inactive"
                      }
                    />
                  </div>
                  <div className="channel__checkbox--right">USSD</div>
                  {this.state.ussd ? (
                    <div className="channel__dropdown--box">
                      <div style={{ overflow: "hidden" }}>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleUssd("default")}
                              className={
                                this.state.sourceUssd.default
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            default
                          </div>
                        </div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleUssd("content")}
                              className={
                                this.state.sourceUssd.content
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            Content Type
                          </div>
                        </div>
                      </div>

                      {this.state.sourceUssd.content ? (
                        <div className="channel__dropdown--select">
                          <p>Repo URL</p>
                          <div>
                            <input
                              type="text"
                              ref={input => (this.content = input)}
                            />
                          </div>
                          <span>
                            <a href="google.com" target="_blank">
                              Click here to view Documentation
                            </a>
                          </span>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="channel__card--checkbox">
                  <div className="channel__checkbox--left">
                    <div
                      onClick={() => this.handleDelivery("ivr")}
                      className={
                        this.state.ivr ? "channel__active" : "channel__inactive"
                      }
                    />
                  </div>
                  <div className="channel__checkbox--right">IVR</div>
                  {this.state.ivr ? (
                    <div className="channel__dropdown--box">
                      <div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleIvr("content")}
                              className={
                                this.state.sourceIvr.content
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            content API
                          </div>
                        </div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleIvr("sip")}
                              className={
                                this.state.sourceIvr.sip
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            SIP integration
                          </div>
                        </div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleIvr("signal")}
                              className={
                                this.state.sourceIvr.signal
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            Signaling Gateway
                          </div>
                        </div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleIvr("media")}
                              className={
                                this.state.sourceIvr.media
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            Media Gateway
                          </div>
                        </div>
                      </div>

                      {this.state.sourceIvr.sip ? (
                        <div className="channel__dropdown--select">
                          <p>SIP integration</p>
                          <div>
                            <input
                              type="text"
                              ref={input => (this.content = input)}
                            />
                          </div>
                        </div>
                      ) : null}
                      {this.state.sourceIvr.signal ? (
                        <div className="channel__dropdown--select">
                          <p>Signal Gateway IP</p>
                          <div>
                            <input
                              type="text"
                              ref={input => (this.signal = input)}
                            />
                          </div>
                        </div>
                      ) : null}
                      {this.state.sourceIvr.media ? (
                        <div className="channel__dropdown--select">
                          <p>Media gateway IP</p>
                          <div>
                            <input
                              type="text"
                              ref={input => (this.media = input)}
                            />
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                <div className="channel__card--checkbox">
                  <div className="channel__checkbox--left">
                    <div
                      onClick={() => this.handleDelivery("web")}
                      className={
                        this.state.web ? "channel__active" : "channel__inactive"
                      }
                    />
                  </div>
                  <div className="channel__checkbox--right">WEB</div>
                  {this.state.web ? (
                    <div className="channel__dropdown--box">
                      <div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleWeb("default")}
                              className={
                                this.state.sourceWeb.default
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            default
                          </div>
                        </div>
                        <div className="content__dropdown--radio">
                          <div className="content__dropdown--radio-left">
                            <div
                              onClick={() => this.handleWeb("external")}
                              className={
                                this.state.sourceWeb.external
                                  ? "channel__active"
                                  : "channel__inactive"
                              }
                            />
                          </div>
                          <div className="content__dropdown--radio-right">
                            External site
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inner--container">
          <div style={{ color: "red" }}>
            {this.state.deliveryError ? (
              <span style={{ fontStyle: "italic" }}>
                You have not made any selection on Content Delivery.
              </span>
            ) : null}
            {this.state.sourceError ? (
              <span style={{ fontStyle: "italic" }}>
                You have not made any selection on Content Source.
              </span>
            ) : null}
          </div>
          <div>
            {this.state.submitBtn ? (
              <div className="page__button" onClick={this.handleSubmit}>
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
    );
  }
}
export default Content;
