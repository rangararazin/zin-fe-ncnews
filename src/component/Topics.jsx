import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

export const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <Container className="card-grid" maxWidth="md">
      <Grid conatiner spacing={3}>
        {topics.map((topic) => {
          return (
            <Grid item key={topic.slug}>
              <Card className="topic-list-card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt={topic.slug}
                  />
                  <CardContent className="topic-card-content">
                    <Typography gutterBottom variant="h5" component="div">
                      {topic.slug.toUpperCase()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {topic.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link to={`/topics/${topic.slug}`}>MORE ARTICLES</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
