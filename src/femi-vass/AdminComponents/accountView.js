import React from "react";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import { Button, Card, Icon } from "../../components/common";
import "./accountView.css";
import { DownLoad } from "../../components/common/customIcon";
import { primaryColor, secondaryColor } from "../utils/data";

function AccountView(props) {
  return (
    <AdminLayout activeSideBar={"account"} navbar={false}>
      <div className={"max-width-1200"}>
        <br />
        <div className={"goBack"} onClick={() => props.history.goBack()}>
          <Icon name={"arrowLeft"} type={"feather"} size={30} /> Back
        </div>
        <br />
        <Card className={"card-control"}>
          <div className="content-heading">Basic Information</div>
          <div className="flex flew-wrap">
            <div className="item">
              <div className="item-head">Company Name</div>
              <div className="item-content">Ibesoft</div>
              <div className="item-head">Application Date</div>
              <div className="item-content">30/01/2019</div>
            </div>
            <div className="item">
              <div className="item-head">Status</div>
              <div className="item-content">Pending</div>
              <div className="item-head">Email Address</div>
              <div className="item-content">ibesoft@email.com</div>
            </div>
            <div className="item">
              <div className="image-con">
                <img src="" alt="" />
              </div>
            </div>
          </div>
          <br />
          <div className="divider" />
          <br />

          <div className="content-heading">Company Documents</div>
          <ul>
            <li>
              Company Registration{" "}
              <DownLoad size={"20px"} color={primaryColor} />
            </li>
            <li>
              VAS License <DownLoad size={"20px"} color={primaryColor} />
            </li>
            <li>
              Short Code Approval{" "}
              <DownLoad size={"20px"} color={primaryColor} />
            </li>
          </ul>

          <br />
          <div className="divider" />
          <br />

          <div className="content-heading">Identifier Codes</div>
          <div className="code-item">
            <div className="header">USSD</div>
            <li>3049</li>
            <li>3049</li>
            <li>3049</li>
          </div>
          <div className="code-item">
            <div className="header">SMS</div>
            <li>3049</li>
            <li>3049</li>
            <li>3049</li>
          </div>
          <div className="code-item">
            <div className="header">IVR</div>
            <li>3049</li>
            <li>3049</li>
            <li>3049</li>
          </div>
          <div className="code-item">
            <div className="header">WEB</div>
            <li>3049</li>
            <li>3049</li>
            <li>3049</li>
          </div>
          <br />
          <br />
          <br />

          <div className="flex justify-content-end">
            <Button style={{ marginRight: "20px" }}>Approve</Button>
            <Button color={"danger"} variant={"outlined"}>
              Decline
            </Button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}

export default AccountView;
