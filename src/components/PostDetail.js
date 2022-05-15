import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {db} from '../firebase';
import { getDoc, doc , deleteDoc} from 'firebase/firestore';

function PostDetail() {
  const [post, setPost] = useState({});
  const {postId} = useParams();
  useEffect( () => {
    const docRef = doc(db, 'posts', postId)
    getDoc(docRef)
      .then((doc) => {
        console.log(doc.data())
        setPost(doc.data())
      })
    },[postId])

  async function deletePost () {
    console.log(postId)
    await deleteDoc(doc(db, "posts", `${postId}`));
  }

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={deletePost}> Delete</button>
    </div>
  );
}

export default PostDetail;
