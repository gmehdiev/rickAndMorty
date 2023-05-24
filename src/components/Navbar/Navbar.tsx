import { Box, Button, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { MaterialUISwitch } from "../UI/MaterialUISwitch";
import { Nav } from "../Wrappers/Nav";
import { useContext, useState } from "react";
import { ThemeColor } from "../../core/theme/theme";
import { AntSwitch } from "../UI/AntSwitch";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const navigate = useNavigate();
  const toggleTheme = useContext(ThemeColor);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(true);

  const changeLang = () => {
    setLanguage(!language);
    i18n.changeLanguage(language ? "ru" : "en");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "text.primary",
        }}
      >
        <Nav>
          <Button onClick={() => navigate(`/posts`)}>{t("Posts")}</Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "200px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>En</Typography>
              <AntSwitch sx={{ m: 1 }} onChange={() => changeLang()} />
              <Typography>Ru</Typography>
            </Box>
            <MaterialUISwitch
              sx={{ m: 1 }}
              // defaultChecked
              onChange={() => toggleTheme.toggleColorMode()}
            />
          </Box>
        </Nav>
      </Box>

      <Outlet />
    </>
  );
};
