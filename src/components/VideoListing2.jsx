import { VideoCard } from "./VideoCard";

const VideoListing2 = ({ videos }) => {
  return (
    <>
      {videos?.map((video) => {
        return (
          <VideoCard key={video._id} video={video} />
        );
      })}
    </>
  );
};

export { VideoListing2 };
