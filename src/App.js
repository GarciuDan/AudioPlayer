import React, { useState, useEffect } from "react";
import Player from "./components/Player";

const App = () => {
  const [songs] = useState([
    {
      title: "You´re Gonna Be My Ruin",
      artist: "Greenleaf",
      img_src: "./images/1.jpg",
      src: "./music/1.mp3",
    },
    {
      title: "Figure.09",
      artist: "Linkin Park",
      img_src: "./images/2.jpg",
      src: "./music/2.mp3",
    },
    {
      title: "Giga Doom Chad Slayer",
      artist: "Aaron F. Bianchi Jupiter",
      img_src: "./images/3.jpg",
      src: "./music/3.mp3",
    },
    {
      title: "Never Better",
      artist: "Vaux",
      img_src: "./images/4.jpg",
      src: "./music/4.mp3",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nexttSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  },[currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nexttSongIndex={nexttSongIndex}
        songs={songs}
      />
    </div>
  );
};

export default App;
