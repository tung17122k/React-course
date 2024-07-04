/* eslint-disable no-unused-vars */
import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const youtubeList = () => {
  return (
    <div>
      <div className="youtube-list">
        {YoutubeData.map((item, index) => (
          <YoutubeItem
            key={item.id}
            image={item.image}
            title={item.title}
            author={item.author}
            avatar={item.avatar || item.image}
          ></YoutubeItem>
        ))}
      </div>
    </div>
  );
};

export default youtubeList;
