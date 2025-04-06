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
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.img} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="red">You and {friend.name} are even.</p>
      )}
      <button className="button">Select</button>
    </li>
  );
}
