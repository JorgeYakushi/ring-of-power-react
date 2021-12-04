import React, { FC, useEffect, useState } from "react";
interface playlistResponse {
  videos: { items: playlistItem[] };
}
interface playlistItem {
  contentDetails: { videoId: string };
  snippet: {
    thumbnails: { maxres?: { url: string }; high?: { url: string } };
    title: string;
    channelTitle: string;
    publishedAt: Date;
  };
}
const Videos: FC<playlistResponse> = ({ videos }) => {
  useEffect(() => {});
  return (
    <>
      <div className="">
        {videos.items.map((item, index) => (
          <a
            href={
              "https://www.youtube.com/watch?v=" + item.contentDetails.videoId
            }
          >
            <img
              src={
                item.snippet.thumbnails.maxres?.url ||
                item.snippet.thumbnails.high?.url
              }
              alt={item.snippet.title}
            />
            <p>{item.snippet.title}</p>
            <p>
              {item.snippet.channelTitle} - {item.snippet.publishedAt}
            </p>
          </a>
        ))}
      </div>
    </>
  );
};

export default Videos;
