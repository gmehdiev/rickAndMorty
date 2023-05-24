import { Box, Button, Theme } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "../UI/MaterialUISwitch";
import { Nav } from "../Wrappers/Nav";
import { useContext } from "react";
import { ThemeColor } from "../../core/theme/theme";

export const Navbar = () => {
  const navigate = useNavigate();
  const toggleTheme = useContext(ThemeColor);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Nav>
          <Button onClick={() => navigate(`/posts`)}>Go to posts</Button>
          <MaterialUISwitch
            sx={{ m: 1 }}
            // defaultChecked
            onChange={() => toggleTheme.toggleColorMode()}
          />
        </Nav>
      </Box>

      <Outlet />
    </>
  );
};
