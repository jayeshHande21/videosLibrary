import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { VideoContext } from "../Context/VideoContext";
import { SingleVideoPage } from "./SingleVideoPage";

export const SingleCategoryPage = () => {
  const { selectedCategoryData, userImg, handleVideoPage } = useContext(
    VideoContext
  );
  return (
    <div>
      {selectedCategoryData.map((selectedData) => {
        return (
          <NavLink to="/SingleVideoPage">
            <div
              className="selectedData"
              key={selectedData._id}
              style={{
                display: "inline-flex",
                width: "400px",
                height: "300px"
              }}
            >
              <div onClick={() => handleVideoPage(selectedData.title)}>
                <div style={{ width: "400px" }}>
                  {" "}
                  <img
                    alt="categoryImg"
                    src={selectedData.thumbnail}
                    style={{
                      marginLeft: "40px",
                      weight: "400px",
                      height: "200px"
                    }}
                  />{" "}
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <div style={{ width: "100%" }}>
                    <h4>{selectedData.title}</h4>
                    {selectedData.views} | {selectedData.creator}
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
