import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Posts from "./Pages/Posts";
import { SinglePost } from "./Pages/SinglePost";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="*" element={<Navigate to="/posts" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
