import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticleByTopic } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Sortby } from "./Sortby";

export const ArticleByTopic = () => {
  const [articleBytopic, setArticleByTopic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const { topic } = useParams();

  useEffect(() => {
    getArticleByTopic(topic, sort_by, order).then((res) => {
      setArticleByTopic(res);
      setLoading(false);
    });
  }, [topic, sort_by, order]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Sortby />
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
