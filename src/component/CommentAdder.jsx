import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserContext } from "../context/UserContext";
import { postComments } from "../utils/api";

export const CommentAdder = ({ setAllComments }) => {
  const { currentUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    postComments(article_id, currentUser, newComment).then((commentRes) => {
      setAllComments((currComment) => {
        return [commentRes, ...currComment];
      });
      setNewComment("");
    });
  }

  return (
    <>
      <form
        method="POST"
        className="form-comment"
        onSubmit={(e) => {
          handleSubmit(e);
          e.currentTarget.disabled = true;
          toast.success("Comment Posted", {
            autoClose: 1000,
            type: toast.TYPE.INFO,
            transition: Slide,
            position: toast.POSITION.TOP_LEFT,
          });
        }}
      >
        <TextField
          id="newComment"
          label="Add your comments"
          multiline
          rows={3}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          value={newComment}
          variant="outlined"
        ></TextField>
        {"   "}

        {/* <Button
          //type="submit"
          size="small"
          variant="contained"
          disabled={!newComment}
          onClick={(e) => {
            e.currentTarget.disabled = true;
          }}
        >
          Post Comment
        </Button> */}

        <button
          className="post-comment-button"
          type="submit"
          disabled={!newComment}
        >
          POST COMMENT
        </button>
        {/* 
        {isAlertVisible && (
          <div className="'alert-container">
            <div className="'alert-inner"> Your comment has been added!!</div>
          </div>
        )} */}
      </form>
    </>
  );
};
