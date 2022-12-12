import { useContext } from "react";

import { UserContext } from "../context/UserContext";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";

export const Header = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <CssBaseline>
        <AppBar position="relative">
          <Toolbar>
            <ArticleIcon fontSize="large" />

            <Typography variant="h3">NC NEWS</Typography>
          </Toolbar>
          <div>
            <Typography variant="h6" textAlign={"right"}>
              User: {currentUser.username}
            </Typography>
          </div>
        </AppBar>
      </CssBaseline>
    </>
  );
};
