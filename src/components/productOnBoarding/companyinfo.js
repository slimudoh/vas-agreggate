import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionType from "./../../store/action";
import * as constant from "./../../global/constant";

class Companyinfo extends Component {
  state = {
    nameField: false,
    descriptionField: false,
    imageField: false,
    submitBtn: true,
    imgName: "",
    imageLoading: true,
    imageID: null
  };
  submitForm = e => {
    e.preventDefault();

    this.setState({
      nameField: false,
      descriptionField: false,
      imageField: false
    });

    if (this.name.value.trim() === "") {
      this.setState({
        nameField: true,
        descriptionField: false,
        imageField: false
      });
      return;
    }

    if (this.description.value.trim() === "") {
      this.setState({
        nameField: false,
        descriptionField: true,
        imageField: false
      });
      return;
    }

    if (!this.state.imageID) {
      this.setState({
        nameField: false,
        descriptionField: false,
        imageField: true
      });
      return;
    }

    const company = {
      name: this.name.value,
      description: this.description.value,
      imageID: this.state.imageID,
      providerId: Math.random()
        .toString(36)
        .substr(2, 500)
    };

    console.log(company);

    localStorage.company = JSON.stringify(company);
    this.props.sendDetails(company);

    this.props.history.push("/create-product/categories");
    return;
  };

  uploadImage = e => {
    this.setState({
      nameField: false,
      descriptionField: false,
      imageField: false,
      imageSubmit: true,
      imageLoading: false
    });

    if (e.target.files.length > 0) {
      const ext = e.target.value.split(".").pop();
      const file = e.target.value.split("\\").pop();

      if (
        ext.toLowerCase().trim() === "jpg" ||
        ext.toLowerCase().trim() === "png" ||
        ext.toLowerCase().trim() === "jpeg"
      ) {
        if (e.target.files[0].size < 1000000) {
          this.setState((prevState, props) => {
            return {
              imgName: file
            };
          });

          const elem = e.target;
          let formData = new FormData();
          formData.append("file_url", elem.files[0]);
          axios
            .post(constant.UPLOAD_API, formData)
            .then(response => {
              const uploadID = response.data.data.id;

              this.setState({
                imageID: uploadID,
                imageLoading: true
              });
            })
            .catch(error => {
              console.log(
                JSON.parse(JSON.stringify(error)).response.data.error
              );
            });

          // console.log(formData);

          return;
        }
      }
    }

    this.setState({
      nameField: false,
      descriptionField: false,
      imageField: true
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title text-center form-header header1">
            Please key in your company information
          </h4>
          <div className="navigation__indicator">
            <div className="navigation__indicator--box">
              <div className="navigation__indicator--line" />
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--inactiveLink">
                  <div className="navigation__indicator--innerlink">1</div>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--inactiveNoLink">
                  <div className="navigation__indicator--innerlinkNohover">
                    2
                  </div>
                </div>
              </div>
              <div className="navigation__indicator--inbox">
                <div className="navigation__indicator--link navigation__indicator--activeLink">
                  <div className="navigation__indicator--innerlinkNohover">
                    3
                  </div>
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
          <div className="card-body">
            <form className="onboard-stepper-form" onSubmit={this.submitForm}>
              <div className="row setup-content">
                <div className="inner--container">
                  <div className="col-md-12 text-left">
                    <div className="form-group">
                      <label>Product Name</label>
                      <input
                        type="text"
                        className="form-control required"
                        ref={input => (this.name = input)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-left">
                    <div className="form-group">
                      <label>Product Description</label>
                      <textarea
                        style={{ resize: "none" }}
                        className="form-control"
                        cols="4"
                        rows="4"
                        ref={input => (this.description = input)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-left">
                    <div className="form-group">
                      <div className="input__container">
                        <div className="image__upload--name">
                          Upload Product Image
                        </div>
                        <div className="image__upload--input">
                          {this.state.imageLoading ? (
                            <div className="image__upload--category">
                              {this.state.imgName}
                              <input
                                type="file"
                                onChange={this.uploadImage}
                                ref={input => (this.img = input)}
                                className="image__upload--input"
                              />
                            </div>
                          ) : (
                            <div className="image__upload--category">
                              <div className="page__loader">
                                <div className="spinning" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      paddingBottom: "5px",
                      color: "red"
                    }}
                  >
                    {this.state.nameField ? (
                      <span style={{ fontStyle: "italic" }}>
                        Please enter your name.
                      </span>
                    ) : null}
                    {this.state.descriptionField ? (
                      <span style={{ fontStyle: "italic" }}>
                        Please enter a description.
                      </span>
                    ) : null}
                    {this.state.imageField ? (
                      <span style={{ fontStyle: "italic" }}>
                        Please select an image not more tham 1mb in size.
                      </span>
                    ) : null}
                  </div>
                  <div
                    className="col-md-12"
                    style={{ width: "200px", margin: "auto" }}
                  >
                    {this.state.submitBtn ? (
                      <button
                        className="btn-dark-blue nextBtn btn-lg show-header2 px-3"
                        type="submit"
                        onClick={this.submitForm}
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendDetails: data =>
      dispatch({
        type: actionType.addValue,
        value: data
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Companyinfo);
