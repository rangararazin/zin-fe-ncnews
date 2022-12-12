import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Article } from "./component/Article";
import { Articles } from "./component/Articles";
import { Header } from "./component/Header";
import { UserProvider } from "../src/context/UserContext";
import Navbar from "./component/Navbar";
import { Topics } from "./component/Topics";
import { ArticleByTopic } from "./component/ArticleByTopic";
import { Container } from "@mui/material";
import { ErrorPage } from "./component/ErrorPage";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Navbar />
        <Container maxWidth="md" className="app-container">
          <Routes>
            <Route path="/" element={<Articles />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="articles/:article_id" element={<Article />} />

            <Route path="/topics" element={<Topics />} />

            <Route path="/topics/:topic" element={<ArticleByTopic />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
