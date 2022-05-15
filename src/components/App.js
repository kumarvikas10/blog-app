import { Routes, Route } from "react-router-dom";
import { Navbar, Home, CreatePost, PostDetail} from './index'

function App() {
  return (
    <div className="container">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/post/:postId" element={<PostDetail />}>
          </Route>
          <Route path="/create-post" element={<CreatePost />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
