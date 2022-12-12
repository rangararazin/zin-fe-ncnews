import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { CommentAdder } from "./CommentAdder";
import { CommentCard } from "./CommentCard";

export const Comments = ({ singleArticle }) => {
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getComments(singleArticle.article_id).then((res) => {
      setAllComments(res);
      setLoading(false);
    });
  }, [article_id]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <p className="all-comments">Read & Post Comments</p>
      <CommentAdder
        setAllComments={setAllComments}
        singleArticle={singleArticle}
      />

      {allComments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        <>
          <ul>
            {allComments.map((comment) => {
              return (
                <CommentCard
                  comment={comment}
                  allComments={allComments}
                  setAllComments={setAllComments}
                  key={comment.comment_id}
                />
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};
