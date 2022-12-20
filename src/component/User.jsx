import { Grid } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getUsers } from "../utils/api";
import { UserContext } from "../context/UserContext";

export const User = () => {
  const [users, setUsers] = React.useState([]);
  const { currentUser, setCurrentUser } = React.useContext(UserContext);

  React.useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);

  return (
    <Grid container spacing={3}>
      {users.map((user) => {
        return (
          <Grid item xs={12} sm={6}>
            <Card sx={{ minWidth: 345 }} className="topic-list-card">
              <CardMedia
                component="img"
                height="140"
                image={user.avatar_url}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => {
                    setCurrentUser(user);
                  }}
                  size="small"
                >
                  Click to Login as {user.name}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
