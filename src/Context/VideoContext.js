import { createContext, useState } from "react";
import { categories } from "../Pages/Database";
import { videos } from "../Pages/Database";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [homeData, setHomeData] = useState(categories);
  const [selectedCategoryData, setSelectedCategoryData] = useState([]);
  const [videosData, setVideosData] = useState(videos);
  const [userImg, setUserImg] = useState();
  const [videoData, setVideoData] = useState([]);
  const [videoSuggesationData, setVideoSuggesationData] = useState([]);
  const [watchLater, setWatchLaterData] = useState([]);
  const [showExploreData, setShowExploreData] = useState(videos);
  const [playlistData, setPlayListData] = useState([]);
  const [notesValue, setNotesValue] = useState("");
  const [commentData, setCommentData] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputPlaylistValue, setInputPlayListValue] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCategory = (selectedCategory, userImg) => {
    const selectedCategoryInfo = videosData.filter(
      (item) => item.category === selectedCategory
    );
    setUserImg(userImg);

    setSelectedCategoryData(selectedCategoryInfo);
  };

  const handleVideoPage = (selectedTitle) => {
    const selectedTitleData = videos.filter(
      (data) => data.title === selectedTitle
    );
    const suggestedVideo = videos
      .filter((data) => data.title !== selectedTitle)
      .slice(0, 4);

    setVideoSuggesationData(suggestedVideo);

    setVideoData(selectedTitleData);
  };

  const handleWatchLater = (item) => {
    toast.success("Added to the Watchlater", {
      autoClose: 500
    });
    setWatchLaterData([...watchLater, item]);
  };
  const removeFromWatchLater = (title) => {
    toast.error("Remove from the Watchlater", {
      autoClose: 500
    });
    const remveData = watchLater.filter((item) => item.title !== title);
    setWatchLaterData(remveData);
  };
  const handlePlayList = (item) => {
    toast.success("Added to your Playlist", {
      autoClose: 500
    });
    setPlayListData([...playlistData, item]);
  };

  const handleInput = (event) => {
    const userSearched = event.target.value;

    if (userSearched) {
      const post = videos.filter(({ title }) =>
        title.toUpperCase().includes(userSearched.toUpperCase())
      );
      setShowExploreData(post);
    } else {
      setShowExploreData(videos);
    }
  };

  const handleInputComment = (event) => {
    const comment = event.target.value;

    setCommentData(comment);
  };

  const handleSubmitButton = () => {
    setNotesValue(commentData);
    setModalOpen(false);
  };

  const deleteNotes = () => {
    toast.error("Notes deleted", {
      autoClose: 500
    });
    setNotesValue("");
  };

  const handleInputPlaylist = (event) => {
    const playList = event.target.value;
    setInputPlayListValue(playList);
  };
  const handelCreateBtn = () => {
    toast.success("Playlist Created", {
      autoClose: 500
    });
    setModalOpen(false);
  };

  const deletePlayList = () => {
    toast.error("Remove from the Watchlater", {
      autoClose: 500
    });
    setPlayListData([]);
    setModalOpen(false);
  };

  return (
    <VideoContext.Provider
      value={{
        handelCreateBtn,
        deletePlayList,
        handlePlayList,
        handleInputPlaylist,
        inputPlaylistValue,
        playlistData,
        handleInputComment,
        handleSubmitButton,
        selectedCategoryData,
        handleInput,
        showExploreData,
        setShowExploreData,
        homeData,
        deleteNotes,
        handleCategory,
        handleWatchLater,
        userImg,
        handleVideoPage,
        videoData,
        videoSuggesationData,
        watchLater,
        videos,
        isModalOpen,
        openModal,
        closeModal,
        setModalOpen,
        notesValue,
        removeFromWatchLater
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
