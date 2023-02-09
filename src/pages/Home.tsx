import { useEffect, useState } from "react";
import Post from "../components/Post";
import { getPost } from "../server/post";
import { PostModel } from "../utility/interface/post-model";

interface HomePageProps {
}
export default function HomePage(props: HomePageProps) {

  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    getPost().then(res => {
      setPosts(res.data.data);
    })
  }, [])


  return (
    <>
      {
        posts.length > 0 && posts.map((post,index) => (
          <Post key={index} post={post}></Post>
        ))
      }
    </>
  )
}