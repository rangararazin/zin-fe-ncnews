import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { getArticles } from "../utils/api";
import { ArticleCard } from "./ArticleCard";
import { Sortby } from "./Sortby";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    getArticles(sort_by, order).then((res) => {
      setArticles(res);
      setLoading(false);
    });
  }, [sort_by, order]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Sortby />
      <div className="ArticleCard">
        <ul>
          {articles.map((article) => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    </>
  );
};
