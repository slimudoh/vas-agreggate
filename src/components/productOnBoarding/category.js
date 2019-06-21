import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import * as actionType from "./../../store/action";
import * as constant from "./../../global/constant";

class Category extends Component {
  state = {
    loading: false,
    data: null,
    submitBtn: false,
    selection: false
  };

  componentDidMount() {
    axios
      .get(constant.CATEGORIES_API)
      .then(response => {
        this.setState({
          data: response.data.data
        });

        this.setState({
          loading: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  loader = e => {
    if (this.state.selection === false) {
      const classId = e.target.getAttribute("data-index");
      const parentClass = document.querySelectorAll(".category__parent")[
        classId
      ];
      const loaderClass = document.querySelectorAll(".category__loader")[
        classId
      ];
      const textSelection = document.querySelectorAll(".category__parent > p")[
        classId
      ];

      parentClass.style.display = "none";
      loaderClass.style.display = "block";

      const selectedCategory = textSelection.innerHTML;
      localStorage.setItem("category", selectedCategory);
      this.props.getSelectedCategory(selectedCategory);
      var description, providerId;

      if (
        this.props.detail !== undefined &&
        Object.keys(this.props.detail).length > 0
      ) {
        description = this.props.detail.description;
        providerId = this.props.detail.providerId;
      } else if (localStorage.company) {
        const details = JSON.parse(localStorage.company);
        description = details.description;
        providerId = details.providerId;
      }

      for (let index of this.state.data) {
        if (
          index.name.trim().toLowerCase() ===
          selectedCategory.trim().toLowerCase()
        ) {
          var selectedList = {
            providerId: providerId,
            categoryId: index.categoryId,
            name: index.name,
            description: description,
            avatar: index.icon
          };
        }
      }

      console.log(selectedList);

      axios
        .post(constant.PRODUCT_API, selectedList)
        .then(response => {
          localStorage.productId = response.data.data.productId;

          this.props.history.push("/create-product/register-company");
        })
        .catch(error => {
          console.log(JSON.parse(JSON.stringify(error)).response.data.error);
        });

      this.setState({
        selection: true
      });
    }
  };

  // Math.random().toString(50).substr(2, 500);

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="card-title text-center form-header header2">
            Choose your Category
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
                <div className="navigation__indicator--link navigation__indicator--inactiveLink">
                  <div className="navigation__indicator--innerlink">2</div>
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
          {this.state.loading ? (
            <div className="card-body">
              <form className="onboard-stepper-form">
                <div className="row setup-content" id="step-2">
                  <div className="col-md-12">
                    <div className="row mb-3">
                      {this.state.data.map((data, index) => {
                        return (
                          <div
                            className="col-md-3"
                            key={index}
                            style={{ paddingBottom: "15px" }}
                            onClick={this.loader}
                            data-index={index}
                          >
                            <div
                              className="card-square-outline active text-center category__hover"
                              data-index={index}
                            >
                              <div
                                className="icon-holder category__parent"
                                data-index={index}
                              >
                                <img
                                  src={require("./../../container/assets/images/politic-white.svg")}
                                  // src={require(`${data.icon}`)}
                                  alt=""
                                  data-index={index}
                                />
                                <p
                                  style={{
                                    height: "30px",
                                    margin: "0",
                                    fontSize: "14px",
                                    paddingTop: "0"
                                  }}
                                  data-index={index}
                                >
                                  {data.name}
                                </p>
                              </div>
                              <div
                                className="spin__loader category__loader"
                                style={{ height: "200px" }}
                              >
                                <div className="spinning" />
                                <p>Please wait..</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="page__loader">
              <div className="spinning" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.details !== undefined && Object.keys(state.details).length > 0) {
    let details = state.details;
    return {
      detail: details
    };
  } else if (localStorage.company) {
    let details = JSON.parse(localStorage.company);
    return {
      detail: details
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getSelectedCategory: data =>
      dispatch({
        type: actionType.categoryValue,
        value: data
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
