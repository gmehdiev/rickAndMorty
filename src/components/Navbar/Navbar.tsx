import { Box, Button } from "@mui/material";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { MaterialUISwitch } from "../UI/MaterialUISwitch";
import { Nav } from "../Wrappers/Nav";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Nav>
          <Button onClick={() => navigate(`/posts`)}>Go to posts</Button>
          <MaterialUISwitch sx={{ m: 1 }} defaultChecked />
        </Nav>
      </Box>

      <Outlet />
    </>
  );
};
