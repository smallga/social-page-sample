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

  const handleScroll = (e:any): void => {
    e.stopPropagation() // Handy if you want to prevent event bubbling to scrollable parent
    if(e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight + 300) {
      getPost().then(res => {
        setPosts([...posts, ...res.data.data]);
      })
    }
  };


  return (
    <div className="h-full overflow-y-auto" onScroll={handleScroll}>
      {
        posts.length > 0 && posts.map((post,index) => (
          <Post key={index} post={post}></Post>
        ))
      }
    </div>
  )
}