import { Box } from "@mui/material";
import Posts from "./Pages/Posts";
import { Wrapper } from "./components/Wrappers/Wrapper";

function App() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Wrapper>
        <Posts />
      </Wrapper>
    </Box>
  );
}

export default App;
