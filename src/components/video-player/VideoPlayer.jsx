import video from "../../assets/pitz-video.mp4";
import ReactPlayer from "react-player";
import "./video.css";

const VideoPlayer = () => {
  return (
    <ReactPlayer
      className="react-player"
      width="60%"
      height="60%"
      url={video}
      controls
    />
  );
};

export default VideoPlayer;
