import { useContext, useState } from "react";
import React from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { VideoContext } from "../Context/VideoContext";
export const SingleVideoPage = () => {
  const {
    videoData,
    videoSuggesationData,
    userImg,
    handleWatchLater,
    notesValue,
    handleSubmitButton,
    handleInputComment,
    openModal,
    closeModal,
    deleteNotes,
    isModalOpen,
    handlePlayList
  } = useContext(VideoContext);

  return (
    <div>
      <div>
        {videoData.map((data) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <iframe
                  style={{ marginTop: "30px", height: "530px", width: "90%" }}
                  src={data.src}
                  title={data.title}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Modal
                  isOpen={isModalOpen}
                  className="ReactModal__Content"
                  overlayClassName="ReactModal__Overlay"
                >
                  <div className="modal-container">
                    <h3>Write a Notes Here....</h3>
                    <input
                      type="text"
                      className="modal-input"
                      placeholder="Update or Edit Here.."
                      onChange={handleInputComment}
                    ></input>
                    <div className="modal-button-container">
                      <button
                        className="modal-submit-button"
                        onClick={handleSubmitButton}
                      >
                        Submit
                      </button>
                      <button
                        className="modal-close-button"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </Modal>

                <div style={{ display: "flex", marginLeft: "70px" }}>
                  <img
                    alt="userImg"
                    src={userImg}
                    style={{
                      width: "30px",
                      height: "30px",
                      marginTop: "10px",
                      marginRight: "10px"
                    }}
                  />
                  <h3>{data.title}</h3>
                  <div style={{ marginLeft: "120px" }}>
                    <button onClick={() => handleWatchLater(data)}>
                      watchLater
                    </button>
                    <button onClick={() => handlePlayList(data)}>
                      Playlist
                    </button>
                    <button onClick={openModal}>Notes</button>
                  </div>
                </div>
                <div>
                  <h3>My Notes</h3>

                  <div style={{ display: "flex", marginLeft: "300px" }}>
                    {" "}
                    <p>{notesValue}</p>{" "}
                    <button
                      style={{ marginLeft: "40px" }}
                      onClick={deleteNotes}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: "30px", width: "500px" }}>
                <h3>More Videos</h3>
                {videoSuggesationData.map((video) => {
                  return (
                    <div>
                      <div style={{ display: "flex" }}>
                        <iframe
                          style={{ marginBottom: "20px" }}
                          width="200px"
                          src={video.src}
                          title={video.title}
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>

                        <p className="allVidInfo" style={{ margin: "auto" }}>
                          {video.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
