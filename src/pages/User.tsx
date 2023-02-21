import Autolinker from "autolinker";
import { useCallback, useContext, useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import PhotoSticker from "../components/PhotoSticker";
import { getMediaPosts, getUserMediaPosts } from "../server/post";
import { searchUser } from "../server/user";
import { PhotoSizeEnum } from "../utility/enum/photo-size.enum";
import { MediaPostModel } from "../utility/interface/media-post-model";
import { UserDataModel } from "../utility/interface/user-data";

interface UserPageProps {
}

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 3,
  500: 2
};

export default function UserPage(props: UserPageProps) {

  const { userName } = useParams();

  const [user, setUser] = useState<UserDataModel>({
    name: 'Mike',
    photoUrl: './images/mike.png',
    description: '哈囉我是Brian, 以下是我的連結網址:\nGit:https://github.com/smallga',
    posts: 43,
    followers: 543,
    tracking: 88,
  });

  const [userPosts, setUserPosts] = useState<MediaPostModel[]>([]);

  const getMediaPostsFromApi = () => {
    getUserMediaPosts().then(
      res => {
        setUserPosts([...userPosts, ...res.data.data]);
      }
    )
  };

  const translateDes = useCallback(() => {
    const { description } = user;
    return Autolinker.link(description);
  }, [user.description])

  useEffect(() => {
    getMediaPostsFromApi();
  }, []);

  useEffect(() => {
    if (userName) {
      searchUser(userName).then(
        res => {
          setUser({
            name: res.data.data.name,
            photoUrl: res.data.data.photoUrl,
            description: '哈囉我是Brian, 以下是我的連結網址:\nGit:https://github.com/smallga',
            posts: 43,
            followers: 543,
            tracking: 88,
          });
        }
      )
    }
  }, [userName])

  return (
    <div className="w-full h-full overflow-y-auto p-4">
      <div className="max-w-xl mx-auto">
        <div className="flex p-6">
          <div className="w-32 flex justify-center">
            <PhotoSticker url='./images/mike.png' size={PhotoSizeEnum.LG} />
          </div>
          <div className="max-w-[300px] mx-auto flex flex-1 items-center justify-evenly">
            <div className="mx-2">
              <div className="font-bold">
                {user.posts}
              </div>
              <div>
                貼文
              </div>
            </div>
            <div className="mx-2">
              <div className="font-bold">
                {user.followers}
              </div>
              <div>
                粉絲
              </div>
            </div>
            <div className="mx-2">
              <div className="font-bold">
                {user.tracking}
              </div>
              <div>
                追蹤中
              </div>
            </div>
          </div>
        </div>
        <div className="text-left text-slate-600 px-6 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: translateDes() }}>
        </div>
        {/* 使用者貼文 */}
        <div className="pt-3">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
              userPosts.length > 0 && userPosts.map((userPost, index) => {
                return (
                  <div className='p-1'>
                    <img key={index} className={`w-full rounded-md object-cover media-post-size-${userPost.size}`} src={userPost.imageUrl} />
                  </div>
                )
              })
            }
          </Masonry>
        </div>
      </div>
    </div>
  )
}