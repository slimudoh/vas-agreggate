import React, { Component } from "react";

import Image from "./image";

class NavigationBar extends Component {
  state = {
    bannerDropdown: false
  };

  showDate = () => {
    if (this.state.bannerDropdown) {
      this.setState({
        bannerDropdown: false
      });
    } else {
      this.setState({
        bannerDropdown: true
      });
    }
  };

  render() {
    return (
      <nav className="service__header">
        <div className="service__header--profile">
          <div>
            <Image
              src={require("./../container/assets/images/boy.png")}
              alt={"profile"}
            />
          </div>
        </div>
        <div className="service__header--date" onClick={this.showDate}>
          <div>
            This Year
            {this.state.bannerDropdown ? (
              <div className="service__header--dropdown">
                <div>Action</div>
                <div>Another action</div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
