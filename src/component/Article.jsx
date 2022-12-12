import { Button, ButtonGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticlebyID, patchVotes } from "../utils/api";

import { Comments } from "./Comments";
import { ErrorPage } from "./ErrorPage";

export const Article = () => {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUpDisabled, setIsUpDisabled] = useState(false);
  const [isDownDisabled, setIsDownDisabled] = useState(false);
  const [errorStatus, setErrorStatus] = useState("");

  useEffect(() => {
    getArticlebyID(article_id)
      .then((res) => {
        setSingleArticle(res);
        setLoading(false);
      })
      .catch((err) => {
        setErrorStatus(err.response.status);
      });
  }, [article_id]);

  function changeUpVote(article_id) {
    const params = { inc_votes: 1 };
    const newArticle = { ...singleArticle, votes: singleArticle.votes + 1 };
    setSingleArticle(newArticle);

    patchVotes(article_id, params).catch((err) => {
      setSingleArticle({ ...singleArticle, votes: singleArticle.votes - 1 });
      alert("Server error Please try again");
    });
  }

  function changeDownVote(article_id) {
    const params = { inc_votes: -1 };
    const newArticle = { ...singleArticle, votes: singleArticle.votes - 1 };
    setSingleArticle(newArticle);

    patchVotes(article_id, params).catch((err) => {
      setSingleArticle({ ...singleArticle, votes: singleArticle.votes + 1 });
      alert("Server error Please try again");
    });
  }

  if (errorStatus) {
    return <ErrorPage />;
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <ul>
        <li className="li-articles" key={singleArticle.article_id}>
          <Typography variant="h6">{singleArticle.title}</Typography>
          <Typography paragraph={true}>
            {" "}
            By {singleArticle.author} in {singleArticle.topic} ||{" "}
            {singleArticle.created_at.slice(0, 9)}
          </Typography>

          <br />
          <Typography paragraph={true}>{singleArticle.body}</Typography>
          <Typography paragraph={true}>
            {singleArticle.votes} Votes || {singleArticle.comment_count}{" "}
            Comments
          </Typography>

          <br />

          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={(e) => {
                setIsUpDisabled(true);
                changeUpVote(article_id);
              }}
              disabled={isUpDisabled}
            >
              👍
            </Button>

            <Button
              onClick={(e) => {
                setIsDownDisabled(true);
                changeDownVote(article_id);
              }}
              disabled={isDownDisabled}
            >
              👎
            </Button>
          </ButtonGroup>

          <br />
          <br />
        </li>
      </ul>
      <Comments singleArticle={singleArticle} />
    </div>
  );
};
