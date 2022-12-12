import axios from "axios";

const myApi = axios.create({
  baseURL: "https://smoggy-blazer-bee.cyclic.app/api",
});

export const getArticles = (sort_by, order) => {
  return myApi.get("/articles", { params: { sort_by, order } }).then((res) => {
    return res.data.articles;
  });
};

export const getArticlebyID = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchVotes = (article_id, params) => {
  return myApi.patch(`/articles/${article_id}`, params).then((res) => {});
};

export const postComments = (article_id, user, body) => {
  return myApi
    .post(`/articles/${article_id}`, {
      username: user.username,
      body: body,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const getTopics = () => {
  return myApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticleByTopic = (topic, sort_by, order) => {
  return myApi
    .get(`/articles?topic=${topic}`, { params: { sort_by, order } })
    .then((res) => {
      return res.data.articles;
    });
};

export const deleteCommentByID = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};
