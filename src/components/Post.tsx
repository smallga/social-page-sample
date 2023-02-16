import { PostModel } from "../utility/interface/post-model";
import PhotoSticker from "./PhotoSticker";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as Heart } from '../assets/icon/heart-fill.svg'
import { ReactComponent as Message } from '../assets/icon/message.svg'
import useElementOnScreen from "../hook/useElementOnScreen";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ReplyModel } from "../utility/interface/reply-model";
import Reply from "./Reply";

interface PostProps {
	post: PostModel;
}

export default function Post(props: PostProps) {

	const option = {
		rootMargin: "0px",
		threshold: 0.2,
	};

	const videoRef = useRef<HTMLVideoElement>(null);
	const postContentRef = useRef<HTMLDivElement>(null);
	const [isLike, setIsLike] = useState<Boolean>(props.post.isLike);
	const [likeCount, setLikeCount] = useState<number>(props.post.likeCount);
	const [replyMessages, setReplyMessages] = useState<Array<ReplyModel>>([]);
	const [isComposing, setIsComposing] = useState<boolean>(false);
	const [isShow, setIsShow] = useState<boolean>(false);

	const isVisible = useElementOnScreen(option, postContentRef);

	useEffect(() => {
		if (videoRef.current) {
			if (!isVisible && isShow) {
				videoRef.current.pause();
			}
			else if(isVisible && isShow) {
				videoRef.current.play();
      }
			else if(isVisible && !isShow) {
				setIsShow(true);
      }
		}
	}, [isVisible])

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	}, [isShow])

	const ShowCount = useCallback((count: number) => {
		let result = '';
		let checkNumber = count;
		let unitStr = ['', 'K', 'M']
		let unitIndex = 0;
		while (checkNumber > 999 && unitIndex < unitStr.length) {
			checkNumber = Math.round((checkNumber) * 100) / 100000;
			unitIndex++;
		}
		if (checkNumber > 999) {
			result = '999+' + unitStr[unitIndex];
		}
		else {
			result = String(checkNumber).slice(0, 4).replace(/\.$/, '') + unitStr[unitIndex];
		}
		return result;
	}, [])

	const ShowHeart = useCallback(() => { return ShowCount(likeCount) }, [likeCount]);
	const ShowReply = useCallback(() => { return ShowCount(props.post.replyCount) }, [props.post.replyCount]);

	const hitLike = () => {
		setLikeCount(!isLike ? likeCount + 1 : likeCount - 1);
		setIsLike(!isLike);
	}

	const hitReply = () => {
		
	}

	const replyKeyupChange = (e:any) => {
		if ((e.key === 'Enter' || e.keyCode === 13) && !isComposing && e.target.value.length > 0) {
			let newReply:ReplyModel = {
				replyAccountName: 'lisa',
				replyAccountPhoto: './/images/lisa.png',
				replyMessage: e.target.value,
				replyDate: '剛剛',
			}
			setReplyMessages([...replyMessages, newReply]);
			e.target.value = '';
		}
	}

	return (
		<div className="w-full px-8 py-2">
			<div className="h-8 w-full flex items-center">
				<PhotoSticker url={props.post.authorPhotoUrl}></PhotoSticker>
				<span className="ml-2">{props.post.authorName}</span>
			</div>
			<div className="px-4">
				<div ref={postContentRef} className="my-2 min-h-[300px] relative">
					{/* <LazyLoadImage threshold={3000} alt="..." className=" w-full min-h-[300px] object-contain" src={props.post.videoPreviewUrl}></LazyLoadImage> */}
					{/* <video ref={videoRef} loop muted playsInline preload="true" className="absolute z-40 top-0 left-0 w-full min-h-[300px] object-contain" src={isShow ? props.post.videoUrl : ''}></video> */}
					<video ref={videoRef} loop muted playsInline preload="true" className="absolute z-40 top-0 left-0 w-full min-h-[300px] object-contain">
						<source src={props.post.videoUrl} type="video/webm"/>
					</video>
				</div>
				<div className="flex justify-start items-center">
					<div className={`flex justify-start items-center`}>
						<Heart className={`w-6 h-6 cursor-pointer ${isLike ? 'like pulse' : ''}`} onClick={hitLike} />
						<span className=" w-12 mx-1 text-left">{ShowHeart()}</span>
					</div>
					<div className="flex justify-start items-center" onClick={hitReply}>
						<Message className="w-6 h-6 cursor-pointer ml-1" />
						<span className=" w-12 mx-1 text-left">{ShowReply()}</span>
					</div>
				</div>
				<div className="text-left py-2">
					{props.post.title}
				</div>
				<div className="text-slate-600 text-sm text-left cursor-pointer font-bold underline py-1 hover:text-slate-500">
					{`查看全部${props.post.replyCount}則回覆`}
				</div>
				<div className="flex items-center py-2">
					<PhotoSticker url={'.//images/lisa.png'} />
					<input className="ml-2" placeholder="新增留言..." 
					onKeyUp={replyKeyupChange} 
					onCompositionStart={e => setIsComposing(true)}
					onCompositionEnd={e => setIsComposing(false)}></input>
				</div>
				<>
					{
						replyMessages.length > 0 && <div className="flex flex-col-reverse">
							{
								replyMessages.map((reply, index) => {
                  return (
                    <Reply key={index} reply={reply}/>
                  )
                })
              }
						</div>
					}
				</>
			</div>
		</div>
	)
}