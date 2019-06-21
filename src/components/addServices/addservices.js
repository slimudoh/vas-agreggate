import React, { Component } from "react";

class AddServices extends Component {
  render() {
    return (
      <div className="addservice_container">
        <div>
          <div className="addservice__container--new">
            <div className="addservice__container--new-left">
              <img
                src={require("./../../container/assets/images/add.svg")}
                alt=""
              />
            </div>
            <div className="addservice__container--new-right">
              Click to create a new service.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddServices;
