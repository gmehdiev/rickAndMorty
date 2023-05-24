import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Posts from "./Pages/Posts";
import { SinglePost } from "./Pages/SinglePost";
import { Navbar } from "./components/Navbar/Navbar";
import { CustomThemeProvider } from "./core/theme/theme";

function App() {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route path="*" element={<Navigate to="/posts" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
