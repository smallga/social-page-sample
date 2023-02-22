import { useCallback, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import PostModal from '../components/PostModal';
import SerachBar from '../components/SearchBar';
import UserDataItem from '../components/UserDataItem';
import { getMediaPosts } from '../server/post';
import { searchUser } from '../server/user';
import { MediaPostModel } from '../utility/interface/media-post-model';
import { UserModel } from '../utility/interface/user';


interface GridPageProps {
}

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1
};

export default function GridPage(props: GridPageProps) {

  const [searchedUsers, setSearchedUsers] = useState<UserModel[]>([]);
  const [showSerachUserData, setShowSerachUserData] = useState(false);
  const [mediaPosts, setMediaPosts] = useState<MediaPostModel[]>([]);
  const navigate = useNavigate();

  const getMediaPostsFromApi = () => {
    getMediaPosts().then(
      res => {
        setMediaPosts([...mediaPosts, ...res.data.data]);
      }
    )
  };

  useEffect(() => {
    getMediaPostsFromApi();
  }, []);

  const handleScroll = (e: any): void => {
    e.stopPropagation() // Handy if you want to prevent event bubbling to scrollable parent
    if (e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight + 300) {
      getMediaPostsFromApi();
    }
  };

  const goPost = (id: string): void => {
    navigate('/grid/' + id);
  }

  const searchUserFromApi = useCallback((searchQuery: string) => {
    searchUser(searchQuery).then(res => {
      if (res.data.data.length > 0) {
        setSearchedUsers(res.data.data);
      }
      else {
        setSearchedUsers([]);
      }
    })
  }, [])

  const showSearchUser = useCallback(() => {
    setShowSerachUserData(true);
  }, [])

  const closeSearchUser = useCallback(() => {
    setShowSerachUserData(false);
  }, [])

  const resetSearchUser  = useCallback(() => {
    closeSearchUser();
    searchUserFromApi('');
  }, [])

  const gotoUserPage = useCallback((user: UserModel) => {
    console.log('click');
    navigate('/user/' + user.name);
    closeSearchUser();
  }, [])

  return (
    <div className='p-4 h-full overflow-y-auto' onScroll={handleScroll}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid max-w-xl mx-auto"
        columnClassName="my-masonry-grid_column">
        {
          mediaPosts.length > 0 && mediaPosts.map((post, index) => {
            return (
              <div key={index} className='p-1 cursor-pointer' onClick={() => { goPost('123') }}>
                <img key={index} className={`w-full rounded-md object-cover media-post-size-${post.size}`} src={post.imageUrl} />
              </div>
            )
          })
        }
      </Masonry>
      <Routes>
        <Route path='/:id' element={<PostModal />} />
      </Routes>
      <div className='fixed bottom-12 left-0 h-12 w-full bg-white lg:hidden'>
        <div className='flex items-center py-1 px-4'>
          <SerachBar onSearch={searchUserFromApi} onFocus={showSearchUser} onBlur={resetSearchUser} showCancle={true}></SerachBar>
        </div>
      </div>
      {
        showSerachUserData && <div aria-label='search-backgroud' onClick={closeSearchUser} className='absolute left-0 bottom-24 w-full flex items-end bg-opacity-40 bg-slate-800 h-[calc(100%_-_6rem)] overflow-y-auto lg:hidden'>
          <div className='w-full px-2 bg-white overflow-y-auto rounded-t-md max-h-[500px]'>
            {
              searchedUsers.length > 0 ?
                searchedUsers.map((user, index) => (
                  <UserDataItem key={index} user={user} clickFun={() => (gotoUserPage(user))}></UserDataItem>
                ))
                :
                <p className="text-left text-slate-400 h-8">沒有符合結果</p>
            }
          </div>
        </div>
      }
    </div>
  )
}