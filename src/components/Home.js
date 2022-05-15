import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs} from "firebase/firestore";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const colRef = collection(db, "posts");
    getDocs(colRef).then((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log("post", posts);
      setPosts(posts);
    });
  }, []);


  return (
    <div className="home">
      <h1>Blog App</h1>
      <div id="blog-by">Vikas</div>

      {posts.map((post, index) => (
        <div className="post" key={`post-${index}`}>
          <Link to={`/post/${post.id}`}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.subTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
