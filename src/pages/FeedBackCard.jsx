import React from "react";

const FeedBackCard = ({ feedback }) => {
  const { name, userImg, review } = feedback || {};

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-md border p-4">
      <div className="flex items-center space-x-4 mb-3">
        <img
          src={userImg || "https://i.ibb.co/svZ0V7L/default-user.png"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-lg">{name || "Anonymous"}</h2>
        </div>
      </div>
      <p className="text-sm text-gray-600 italic">"{review || "No feedback given."}"</p>
    </div>
  );
};

export default FeedBackCard;
