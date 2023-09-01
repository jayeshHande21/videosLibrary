import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { VideoContext } from "../../Context/VideoContext";
import { SingleCategoryPage } from "../SingleCategoryPage";

export const Explore = () => {
  const { userImg, handleInput, showExploreData } = useContext(VideoContext);

  return (
    <div>
      <input
        onChange={handleInput}
        type="text"
        placeholder="Search video here..."
        style={{
          width: "60%",
          padding: "10px",
          borderRadius: "1rem",
          boxShadow: "2px 1px ",
          marginBottom: "20px"
        }}
      />
      <div>
        {showExploreData.map((selectedData) => {
          return (
            <div
              className="selectedData"
              key={selectedData._id}
              style={{
                display: "inline-flex",
                width: "300px",
                marginRight: "40px",
                height: "300px"
              }}
            >
              <div>
                <NavLink
                  to="/SingleCategoryPage"
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    {" "}
                    <img alt="categoryImg" src={selectedData.thumbnail} />{" "}
                  </div>
                </NavLink>
                <div style={{ display: "flex" }}>
                  <img
                    src={userImg}
                    alt="userImg"
                    style={{ width: "30px", height: "30px" }}
                  />
                  <div>
                    <h3>{selectedData.title}</h3>
                    {selectedData.views} | {selectedData.creator}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
