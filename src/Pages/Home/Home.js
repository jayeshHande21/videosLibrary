import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { VideoContext } from "../../Context/VideoContext";
import { SingleCategoryPage } from "../SingleCategoryPage";

export const Home = () => {
  const { homeData, handleCategory } = useContext(VideoContext);
  return (
    <div>
      <h1>Categories</h1>
      <div className="HomeContainer">
        {homeData.map((home) => {
          return (
            <div
              key={home.category}
              style={{ display: "inline-flex" }}
              onClick={() => handleCategory(home.category, home.thumbnail)}
            >
              <NavLink
                to="/SingleCategoryPage"
                style={{ textDecoration: "none" }}
                className="image-link"
              >
                <div>
                  <img
                    alt="HomeImg"
                    src={home.thumbnail}
                    style={{
                      marginLeft: "40px",
                      width: "250px",
                      height: "200px"
                    }}
                  />
                  <h4>{home.category}</h4>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
