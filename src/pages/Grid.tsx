import { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css'
import { getMediaPosts } from '../server/post';
import { MediaPostModel } from '../utility/interface/media-post-model';


interface GridPageProps {
}

const breakpointColumnsObj = {
  default: 3,
  1024: 3,
  768: 2,
  500: 1
};

export default function GridPage(props: GridPageProps) {

  const [mediaPosts, setMediaPosts] = useState<MediaPostModel[]>([]);

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

  const handleScroll = (e:any): void => {
    e.stopPropagation() // Handy if you want to prevent event bubbling to scrollable parent
    if(e.target.scrollHeight - e.target.scrollTop < e.target.clientHeight + 300) {
      getMediaPostsFromApi();
    }
  };

  return (
    <div className='overflow-y-auto h-full p-4' onScroll={handleScroll}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {
            mediaPosts.length > 0 && mediaPosts.map((post,index) => {
              return (
                <div className='p-1'>
                  <img key={index} className={`w-full rounded-md object-cover media-post-size-${post.size}`} src={post.imageUrl}/>
                </div>
              )
            })
          }
        </Masonry>
      </div>
  )
}