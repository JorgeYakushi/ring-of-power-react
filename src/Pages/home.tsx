import LogoutYoutube from "Common/Hooks/Youtube/LogoutYoutube";
import React, { FC, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { environment } from "Environments/environment";
import Videos from "Common/Components/Videos";
interface youtubeSubResponse {
  items: youtubeSubItem[];
}
interface youtubeSubItem {
  contentDetails: { newItemCount: number; totalItemCount: number };
  snippet: { title: string; resourceId: { channelId: string } };
}

const Home: FC = () => {
  const [localData, setLocalData] = useState(() => {
    const local = JSON.parse(localStorage.getItem("YoutubeLocal") || "{}");
    if (Object.keys(local).length === 0) {
      return false;
    }
    console.log(local);
    return local;
  });
  const [subData, setSubData] = useState({});
  const [subVideos, setSubVideos] = useState<any[]>([]);
  useEffect(() => {
    if (!localData) return;
    fetchData().then((data: youtubeSubResponse) => {
      setSubData(data);
      console.log(data);
      data.items.map((item) => {
        if (item.contentDetails.newItemCount > 0) {
          fetchVideos(item.snippet.resourceId.channelId).then((res) => {
            setSubVideos((old) => [...old, res]);
          });
        }
      });
    });
  }, []);
  if (!localData) {
    return <Redirect to="/login" />;
  }
  const fetchVideos = (channelId: string) => {
    let playListId = "UU" + channelId.substring(2);
    let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=${playListId}&key=${environment.youtubeApiKey} HTTP/1.1`;
    let options = {
      crossDomain: true,
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + localData.accessToken,
        Accept: "application/json",
      }),
    };
    return fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      });
  };
  const fetchData = () => {
    let url = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${environment.youtubeApiKey}`;
    let options = {
      crossDomain: true,
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + localData.accessToken,
        Accept: "application/json",
      }),
    };
    return fetch(url, options)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      });
  };
  return (
    <>
      <LogoutYoutube />
      <div className="">{localData.profileObj.name}</div>
      {subVideos.map((item, index) => (
        <Videos videos={item} key={index} />
      ))}
    </>
  );
};

export default Home;
