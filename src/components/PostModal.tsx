import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostModel } from "../utility/interface/post-model";
import { ReplyModel } from "../utility/interface/reply-model";
import { ReactComponent as Back } from '../assets/icon/back.svg'
import PhotoSticker from "./PhotoSticker";
import Post from "./Post";
import Reply from "./Reply";

interface PostModalProps {

}
export default function PostModal(props: PostModalProps) {

  let { id } = useParams();
  const navigate = useNavigate();
  const [replyMessages, setReplyMessages] = useState<Array<ReplyModel>>([]);
	const [isComposing, setIsComposing] = useState<boolean>(false);

  const [post, setPost] = useState<PostModel>({
    authorName: "Porty",
    authorPhotoUrl: "http://dummyimage.com/192x100.png/ff4444/ffffff",
    lastUpdated: "4/3/2022",
    title: "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
    replyCount: 78,
    likeCount: 1099000,
    webmVideoUrl: "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/DL_preview.webm",
    videoUrl: "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/DL_preview.mp4",
    videoPreviewUrl: "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg",
    isLike: false,
  });


  const closeModal = () => {
    navigate(-1);
  }

  const replyKeyupChange = (e:any) => {
		if ((e.key === 'Enter' || e.keyCode === 13) && !isComposing && e.target.value.length > 0) {
			let newReply:ReplyModel = {
				replyAccountName: 'mike',
				replyAccountPhoto: '1',
				replyMessage: e.target.value,
				replyDate: '剛剛',
			}
			setReplyMessages([...replyMessages, newReply]);
			e.target.value = '';
		}
	}



  return (
    <div aria-label="modal-background" className="fixed top-0 left-0 w-full h-full z-50 bg-opacity-40 bg-slate-800 md:py-8" onClick={closeModal}>
      <div aria-label="post-modal-content" className="mx-auto h-full animate-pulseIn">
        <div aria-label="post-modal-content" className="max-w-[568px] w-full h-[calc(100%-3rem)] bg-white py-2 overflow-y-auto mx-auto sm:rounded-t-md sm:h-[calc(100%-3rem)]" onClick={(e) => { e.stopPropagation() }}>
          <div className="flex relative items-center justify-center sm:hidden">
            <Back className="absolute left-0 w-6 h-6 sm:hidden pl-2" onClick={closeModal}/>
            <span className="font-bold">貼文</span>
          </div>

          <Post post={post} inModal={true}></Post>
          <div className="px-8">
            {
              replyMessages.length > 0 && <div className="flex flex-col-reverse">
                {
                  replyMessages.map((reply, index) => {
                    return (
                      <Reply key={index} reply={reply} />
                    )
                  })
                }
              </div>
            }
          </div>
        </div>
        <div className="max-w-[568px] h-12 flex items-center px-3 bg-white  mx-auto border-t border-slate-200 sm:rounded-b-md" onClick={(e) => { e.stopPropagation() }}>
          <PhotoSticker url='/social-page-sample/dist/images/mike.png' />
          <input className="ml-2 w-full" placeholder="新增留言..."
            onKeyUp={replyKeyupChange}
            onCompositionStart={e => setIsComposing(true)}
            onCompositionEnd={e => setIsComposing(false)}></input>
        </div>
      </div>
    </div>
  )
}