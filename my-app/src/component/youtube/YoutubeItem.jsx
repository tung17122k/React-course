/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const youtubeItem = (props) => {
  return (
    <div>
      <div className="youtube-item">
        <div className="youtube-image">
          <img src={props.image} alt=""></img>
        </div>
        <div className="youtube-footer">
          <img src={props.avatar} alt="" className="youtube-avatar"></img>
          <div className="youtube-infor">
            <h3 className="youtube-title">{props.title}</h3>
            <h4 className="youtube-author">{props.author}</h4>
          </div>
        </div>
      </div>
      <img src="" alt="" className="feature-image"></img>
    </div>
  );
};
{
  /* <div className="youtube-list">
  {YoutubeData.map((item, index) => (
    <youtubeItem
      key={item.id}
      image={item.image}
      title={item.title}
      author={item.author}
      avatar={item.avatar || item.image}
    ></youtubeItem>
  ))}
</div>; */
}

export default youtubeItem;
