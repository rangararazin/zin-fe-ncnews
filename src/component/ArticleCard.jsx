import { Card, CardContent, Grid } from "@mui/material";

import { Link } from "react-router-dom";

export const ArticleCard = ({ article }) => {
  return (
    <>
      <Grid container>
        <Grid item className="card-content">
          <Card>
            <CardContent>
              <div className="card-header">
                <div className="author">
                  <p>
                    {article.author} <br /> {article.created_at.slice(0, 10)}
                  </p>
                </div>
                <p>
                  <b>{article.topic}</b>
                </p>
              </div>

              <Link
                className="card-title"
                to={`/articles/${article.article_id}`}
              >
                <h2 className="article-card-title">{article.title}</h2>
              </Link>

              <div className="card-header">
                <div className="author">
                  <p>
                    {article.votes} Votes <br />{" "}
                  </p>
                </div>
                <p>{article.comment_count} Comments</p>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
