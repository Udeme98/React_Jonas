import React from "react";
import "./eat.css";
import initialFriends from "./friends";
// console.log(initialFriends);

const Eat = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={initialFriends} />
      </div>
    </div>
  );
};
export default Eat;

function FriendsList({ friends }) {
  const friendss = friends;

  return (
    <ul>
      {friendss.map((friend) => (
        <li>{friend.name}</li>
      ))}
    </ul>
  );
}
