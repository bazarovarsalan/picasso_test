import React from "react";
import { useNavigate } from "react-router-dom";
import { PostItemProps } from "../types/types";
import "../App.css";

const PostItemDetails = ({ userId, title, body }: PostItemProps) => {
  const navigate = useNavigate();

  const handlerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(`/`);
  };
  return (
    <div className="postItem-wrapper">
      <h4>
        {userId} {title}
      </h4>
      <div>{body}</div>
      <button className="btn" onClick={handlerClick}>
        Назад
      </button>
    </div>
  );
};

export default PostItemDetails;
