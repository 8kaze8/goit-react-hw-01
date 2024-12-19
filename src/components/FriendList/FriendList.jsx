import React from "react";

const FriendList = ({ friends }) => (
  <div className="friendList-container">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <div key={id} className="friend-container">
        <div className="friend-avatar-img-container">
          <img src={avatar} alt={name} className="friend-avatar-img" />
        </div>
        <p className="friend-name">{name}</p>
        <div className={`status-container ${isOnline ? "online" : "offline"}`}>
          <div className="status-dot"></div>
          <span className="status-text">{isOnline ? "online" : "offline"}</span>
        </div>
      </div>
    ))}
  </div>
);

export default FriendList;
