import { Button, Card, CardContent, Grid } from "@mui/material";
import { useContext } from "react";

import { Slide, toast, ToastContainer } from "react-toastify";
import { UserContext } from "../context/UserContext";
import { deleteCommentByID } from "../utils/api";
import "react-toastify/dist/ReactToastify.css";

export const CommentCard = ({ comment, allComments, setAllComments }) => {
  const { currentUser } = useContext(UserContext);

  function handleDeleteComment(e, comment_id) {
    e.preventDefault();
    deleteCommentByID(comment_id).then((res) => {
      const newAllComments = allComments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      setAllComments(newAllComments);
    });
  }

  return (
    <>
      <Grid container>
        <Grid item className="card-content">
          <Card>
            <CardContent>
              <div className="card-header">
                <div className="author">
                  <p>
                    {comment.author} <br /> {comment.created_at.slice(0, 10)}
                  </p>
                </div>
              </div>
              <p>{comment.body}</p>
              <p>
                {comment.votes} Votes <br />{" "}
              </p>
              {comment.author === currentUser.username ? (
                <Button
                  size="small"
                  variant="contained"
                  onClick={(e) => {
                    handleDeleteComment(e, comment.comment_id);
                    e.currentTarget.disabled = true;
                    toast.success("Comment deleted", {
                      autoClose: 1000,
                      type: toast.TYPE.INFO,
                      transition: Slide,
                      position: toast.POSITION.TOP_LEFT,
                    });
                  }}
                >
                  <ToastContainer />
                  Delete
                </Button>
              ) : null}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
