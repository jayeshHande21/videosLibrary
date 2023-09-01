import { useContext, useState } from "react";
import React from "react";
import Modal from "react-modal";

import { VideoContext } from "../../Context/VideoContext";
export const Playlist = () => {
  const {
    playlistData,
    isModalOpen,
    closeModal,
    openModal,
    handleInputPlaylist,
    inputPlaylistValue,
    handelCreateBtn,
    deletePlayList
  } = useContext(VideoContext);
  return (
    <div>
      <h1>{inputPlaylistValue}</h1>
      {playlistData.map((selectedData) => {
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
                <div style={{ width: "300px" }}>
                  <h3>{selectedData.title}</h3>
                  {selectedData.views} | {selectedData.creator}
                  <button onClick={deletePlayList}>X</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Modal
        isOpen={isModalOpen}
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <div className="modal-container">
          <h3>Add To Playlist</h3>
          <p>new Playlist</p>
          <input
            type="text"
            className="modal-input"
            placeholder="new playlist"
            onChange={handleInputPlaylist}
          ></input>
          <div className="modal-button-container">
            <button className="modal-submit-button" onClick={handelCreateBtn}>
              Create
            </button>
            <button className="modal-close-button" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      </Modal>
      <button style={{ margin: "auto" }} onClick={openModal}>
        + Add
      </button>
    </div>
  );
};
