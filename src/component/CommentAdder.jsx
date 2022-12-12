import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { postComments } from "../utils/api";

export const CommentAdder = ({ setAllComments }) => {
  const { currentUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    postComments(article_id, currentUser, newComment).then((commentRes) => {
      setAllComments((currComment) => {
        return [commentRes, ...currComment];
      });
      setNewComment("");
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);
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

        <Button
          type="submit"
          size="small"
          variant="contained"
          disabled={!newComment}
          onClick={(e) => {
            e.currentTarget.disabled = true;
          }}
        >
          Post Comment
        </Button>

        {isAlertVisible && (
          <div className="'alert-container">
            <div className="'alert-inner"> Your comment has been added!!</div>
          </div>
        )}
      </form>
    </>
  );
};
