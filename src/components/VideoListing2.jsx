import { VideoCard } from "./VideoCard";

const VideoListing2 = ({ videos }) => {
  return (
    <>
      {videos?.map((video) => {
        return (
          <VideoCard video={video} key={video._id} />
        );
      })}
    </>
  );
};

export { VideoListing2 };
