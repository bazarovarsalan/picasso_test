import React from "react";
import { useNavigate } from "react-router-dom";
import { PostItemProps } from "../types/types";
import "../App.css";

const PostItem = ({ userId, title, body, id }: PostItemProps) => {
  const navigate = useNavigate();

  const handlerClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate(`/:${id}`);
  };
  return (
    <div className="postItem-wrapper">
      <h4>
        {userId} {title}
      </h4>
      <div className="bodyPost">{body}</div>
      <button className="btn" onClick={handlerClick}>
        Подробнее
      </button>
    </div>
  );
};

export default PostItem;
