import React, { useState, useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import { Add, Award } from "../../components/common/customIcon";

import "./category.css";
import { categoryUrl, primaryColor, secondaryColor } from "../utils/data";
import { NavLink } from "react-router-dom";
import { Spinner, Notification } from "../../components/common";
import { axiosFunc } from "../utils/helper";

function Services(props) {
  const [categories, setCategories] = useState([]);
  const [catFetching, setCatFetching] = useState(true);

  const getCats = (status, payload) => {
    if (status) {
      setCatFetching(false);
      setCategories(payload.data.data);
    } else {
      Notification.bubble({
        type: "error",
        content: "Unable to fetch content, Try again later..."
      });
    }
  };

  useEffect(() => {
    axiosFunc("get", categoryUrl, null, null, getCats);
  }, []);

  return (
    <AdminLayout activeSideBar={"subscribers"} navbar={false}>
      <div className={"category-container max-width-1200"}>
        <br />
        <br />
        <div className="flex justify-content-between align-c">
          <div className="content-heading">Categories</div>
          <NavLink to={"/admin/add"}>
            <div className={"flex align-c c-pointer"}>
              <Add size={"20px"} color={primaryColor} /> &nbsp;{" "}
              <span className={"add-content"}>Add Category</span>
            </div>
          </NavLink>
        </div>

        <br />

        <div className={"content-inner"}>
          <br />
          <br />

          {catFetching ? (
            <Spinner color={secondaryColor} />
          ) : (
            <div className={"service-container grid-4"}>
              {categories.length < 1 ? (
                <h3>No Content found...</h3>
              ) : (
                categories.map((item, key) => (
                  <div key={key} className={"service-item"}>
                    <div className={"content-box"}>
                      <img src={item.icon} alt="" />
                      <h3>{item.name}</h3>
                    </div>
                    <ul>
                      {item.dependencies.map((it, id) => (
                        <li key={id}>{it.name}</li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default Services;
