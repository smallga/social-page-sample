import { use } from "chai";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Post from "../components/Post";
import PostModal from "../components/PostModal";
import { getPost } from "../server/post";
import { PostModel } from "../utility/interface/post-model";

interface HomePageProps {
}
export default function HomePage(props: HomePageProps) {

  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [test, setTest] = useState(false);

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

  const goPost = useCallback((postId: string) => {
    navigate('/p/' + postId);
  }, [])

  const showPost = useMemo(() => 
    posts.length > 0 && posts.map((post,index) => {
      return (
      <Post key={index} post={post} goPost={() => {goPost('123')}}></Post>
    )})
  , [posts])


  return (
    <>
    <div className="h-full w-full overflow-y-auto" onScroll={handleScroll}>
      <div className="max-w-2xl mx-auto">
        {showPost}
      </div>
    </div>
      <Routes>
        <Route path='/p/:id' element={<PostModal />} />
      </Routes>
    </>
  )
}