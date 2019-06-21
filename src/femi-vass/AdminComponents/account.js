import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import { Button, Select } from "../../components/common";
import "./account.css";

const data = props => [
  {
    company_name: "Tanner Linsley",
    application_date: "30/12/2019",
    status: "Pending",
    email_address: "Ibesoft@gmail.com",
    action: (
      <Button
        color={"secondary"}
        onClick={() => props.history.push("account/hello")}
      >
        View
      </Button>
    )
  }
];

const columns = [
  {
    Header: "Company Name",
    accessor: "company_name" // String-based value accessors!
  },
  {
    Header: "Application Date",
    accessor: "application_date",
    Cell: props => <span className="number">{props.value}</span> // Custom cell components!
  },
  {
    Header: "Status", // Required because our accessor is not a string
    accessor: "status"
  },
  {
    Header: "Email Address", // Custom header components!
    accessor: "email_address"
  },
  {
    Header: "Action", // Custom header components!
    accessor: "action"
  }
];

function Account(props) {
  return (
    <AdminLayout activeSideBar={"account"}>
      <div className={"max-width-1200"}>
        <br />
        <div className={"filters"}>
          <div className={"float-r"}>
            <Select value={"all"} onChange={() => null}>
              <Select.Option value={"all"}>All</Select.Option>
              <Select.Option value={"pending"}>Pending</Select.Option>
              <Select.Option value={"approved"}>Approved</Select.Option>
            </Select>
          </div>
          <div className="clear-fix" />
        </div>
        <br />
        <br />
        <ReactTable
          data={data(props)}
          columns={columns}
          className={"react-table"}
          defaultPageSize={10}
        />
      </div>
    </AdminLayout>
  );
}

export default Account;
