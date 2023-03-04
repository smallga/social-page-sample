import { use } from "chai";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Post from "../components/Post";
import PostModal from "../components/PostModal";
import { useAppDispatch } from "../hook/redux-hook";
import { getPostIsLoading, getPosts, getPostsFirst, getPreviosPost } from "../store/reducers/post-slice";
import { sagaAction } from "../store/sagas/sagaAction";
import { PostModel } from "../utility/interface/post-model";

interface HomePageProps {
}
export default function HomePage(props: HomePageProps) {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const posts = useSelector(getPosts);
  const postsIsLoading = useSelector(getPostIsLoading);

  useEffect(() => {
    if(dispatch && !postsIsLoading && posts.length === 0 ) {
      dispatch(getPostsFirst());
    }
  }, [dispatch])

  const handleScroll = (e:any): void => {
    e.stopPropagation() // Handy if you want to prevent event bubbling to scrollable parent
    if(e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight + 300) {
      if(!postsIsLoading) {
        dispatch(getPreviosPost());
      }
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