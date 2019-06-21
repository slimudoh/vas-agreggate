import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import * as constant from "./../../global/constant";

class RegisterCompany extends Component {
  state = {
    submitBtn: true,
    uploadError: false,
    loading: true,
    dataSet: false,
    data: null,
    checkingUpload: null,
    uploadCount: 0,
    uploading: true
  };

  componentDidMount() {
    console.log(this.props.category);
    axios
      .get(constant.CATEGORIES_API + "?name=" + this.props.category)
      .then(response => {
        this.setState({
          data: response.data.data[0].dependencies
        });

        this.setState({
          checkingUpload: response.data.data[0].dependencies.length
        });

        this.setState({
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  uploadFile = e => {
    e.preventDefault();
    this.setState({
      uploading: false,
      uploadError: false
    });
    const formElements = e.target.elements;

    console.log(this.state.checkingUpload);
    console.log(this.state.uploadCount);

    if (this.state.checkingUpload !== this.state.uploadCount) {
      this.setState({
        uploading: false
      });
    }

    Object.keys(formElements).forEach(key => {
      if (formElements[key].type === "file") {
        if (formElements[key].files.length > 0) {
          if (formElements[key].files[0].size < 1000000) {
            const elem = formElements[key];
            let formData = new FormData();
            formData.append("file_url", elem.files[0]);

            console.log(localStorage);

            axios
              .post(constant.UPLOAD_API, formData)
              .then(response => {
                console.log(response);

                this.setState({
                  uploadCount: this.state.uploadCount + 1
                });

                if (this.state.checkingUpload === this.state.uploadCount) {
                  this.setState({
                    uploading: true
                  });
                }
                this.setState({
                  dataSet: true
                });
              })
              .catch(error => {
                console.log(error);
              });
          }
        }
      }
    });
  };

  getFileName = (index, e) => {
    e.preventDefault();
    const file = e.target.value.split("\\").pop();
    document.querySelectorAll(".upload__card--input > div ")[
      index
    ].innerHTML += file;
  };

  onSubmit = e => {
    if (!this.state.dataSet) {
      this.setState({
        uploadError: true
      });
      return;
    }

    this.props.history.push("/create-product/channels");
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title text-center form-header header5">
            Company Registration
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
                <div className="navigation__indicator--link navigation__indicator--inactiveLink">
                  <div className="navigation__indicator--innerlink">3</div>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <div className="navigation__indicator--innerlinkNohover">
                    4
                  </div>
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
            <div className="card-body">
              {this.state.loading ? (
                <div className="page__loader">
                  <div className="spinning" />
                </div>
              ) : (
                <div className="row mt-2">
                  {this.state.data.map((data, index) => {
                    return (
                      <div className="upload__card" key={index}>
                        <form
                          className="onboard-stepper-form"
                          onSubmit={this.uploadFile}
                        >
                          <div className="upload__card--name">{data.name}</div>
                          <div className="upload__card--input">
                            <div />
                            <input
                              type="file"
                              onChange={e => this.getFileName(index, e)}
                              name={index}
                            />
                          </div>
                          <div className="upload__card--btn">
                            <button>UPLOAD</button>
                          </div>
                        </form>
                      </div>
                    );
                  })}
                  <div
                    style={{
                      textAlign: "center",
                      paddingBottom: "5px",
                      color: "red",
                      height: "20px"
                    }}
                  >
                    {this.state.uploadError ? (
                      <span style={{ fontStyle: "italic" }}>
                        You have not uploaded any document.
                      </span>
                    ) : null}
                    {!this.state.uploading ? (
                      <span style={{ fontStyle: "italic" }}>
                        uploading your document, please wait a sec..
                      </span>
                    ) : null}
                  </div>
                  {this.state.uploading ? (
                    <div className="page__button">
                      {this.state.submitBtn ? (
                        <div onClick={this.onSubmit}>Next</div>
                      ) : null}
                      {!this.state.submitBtn ? (
                        <div className="spin__loader">
                          <div className="spinning" />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="page__button">
                      <div>Next</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.category !== undefined && Object.keys(state.category).length > 0) {
    let category = state.category;
    console.log(category);
    return {
      category: category
    };
  } else if (localStorage.category) {
    let category = localStorage.category;
    console.log(category);
    return {
      category: category
    };
  }
};

export default connect(
  mapStateToProps,
  null
)(RegisterCompany);
