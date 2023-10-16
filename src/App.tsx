import "./App.css";
import { Routes, Route } from "react-router-dom";
import PostsList from "./pages/PostsList";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
