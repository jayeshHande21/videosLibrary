import { useContext, useState } from "react";
import { VideoContext } from "../../Context/VideoContext";
export const Watchlater = () => {
  const { watchLater, userImg, removeFromWatchLater } = useContext(
    VideoContext
  );
  return (
    <div>
      <h3>Here is the WatchLater Page</h3>
      {watchLater.map((selectedData) => {
        return (
          <div
            className="selectedData"
            key={selectedData._id}
            style={{ display: "inline-flex" }}
          >
            <div>
              <div>
                {" "}
                <img
                  alt="categoryImg"
                  src={selectedData.thumbnail}
                  style={{
                    display: "inline-flex",
                    width: "300px",
                    marginRight: "40px",
                    height: "300px"
                  }}
                />{" "}
              </div>
              <div style={{ display: "flex" }}>
                <img
                  src={userImg}
                  alt="userImg"
                  style={{ width: "30px", height: "30px" }}
                />
                <div style={{ width: "300px" }}>
                  <h3>{selectedData.title}</h3>
                  {selectedData.views} | {selectedData.creator}
                </div>
              </div>
              <button onClick={() => removeFromWatchLater(selectedData.title)}>
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
