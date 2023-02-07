import { PostModel } from "../utility/interface/post-model";
import PhotoSticker from "./PhotoSticker";

interface PostProps {
	post: PostModel;
}

export default function Post(props: PostProps) {
	return (
		<div className="w-full">
			<div className="h-8 w-full flex justify-between">
				<PhotoSticker url={props.post.author.photoUrl}></PhotoSticker>
			</div>
		</div>
	)
}