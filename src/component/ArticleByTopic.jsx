import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleByTopic } from "../utils/api";
import { ArticleCard } from "./ArticleCard";

export const ArticleByTopic = () => {
  const [articleBytopic, setArticleByTopic] = useState([]);
  const [loading, setLoading] = useState(true);

  const { topic } = useParams();
  const [newSortValue, setNewSortValue] = useState("created_at");
  const [newOrderValue, setNewOrderValue] = useState("desc");
  useEffect(() => {
    getArticleByTopic(topic, newSortValue, newOrderValue).then((res) => {
      setArticleByTopic(res);
      setLoading(false);
    });
  }, [topic, newSortValue, newOrderValue]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Select
        className="select-sort-by"
        labelId="sort-by"
        name="sort_by"
        id="select-sortby"
        size="small"
        value={newSortValue ? newSortValue : "created_at"}
        onChange={(e) => {
          setNewSortValue(e.target.value);
        }}
      >
        <MenuItem value="created_at">Created On</MenuItem>
        <MenuItem value="comment_count">Comment Count</MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="votes">Votes</MenuItem>
        <MenuItem value="author">Author</MenuItem>
      </Select>
      <Select
        className="select-sort-by"
        labelId="order-by"
        name="order"
        id="select-order"
        size="small"
        value={newOrderValue ? newOrderValue : "desc"}
        onChange={(e) => {
          setNewOrderValue(e.target.value);
        }}
      >
        <MenuItem value="desc">Descending</MenuItem>
        <MenuItem value="asc">Ascending</MenuItem>
      </Select>
      <div className="ArticleCard">
        <ul>
          {articleBytopic.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    </>
  );
};
