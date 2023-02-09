import { PostModel } from "../utility/interface/post-model";
import PhotoSticker from "./PhotoSticker";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as Heart}  from '../assets/icon/heart.svg'
import { ReactComponent as Message}  from '../assets/icon/message.svg'

interface PostProps {
	post: PostModel;
}

export default function Post(props: PostProps) {
	return (
		<div className="w-full p-8">
			<div className="h-8 w-full flex items-center">
				<PhotoSticker url={props.post.authorPhotoUrl}></PhotoSticker>
				<span className="ml-2">{props.post.authorName}</span>
			</div>
			<div className="p-4">
				<LazyLoadImage threshold={3000} alt="..." className="w-full min-h-[300px] object-contain" src={props.post.videoPreviewUrl}></LazyLoadImage>
			</div>
			<div className="flex justify-start">
				<Heart className="w-6 h-6 cursor-pointer mr-2"/>
				<Message className="w-6 h-6 cursor-pointer"/>
			</div>
			<div className="text-left text-xs">
				{props.post.title}
			</div>
		</div>
	)
}