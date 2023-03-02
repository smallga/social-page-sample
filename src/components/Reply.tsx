import { ReplyModel } from "../utility/interface/reply-model";
import PhotoSticker from "./PhotoSticker";

interface ReplyProps{
	reply: ReplyModel;
}
export default function Reply(props: ReplyProps) {
	const { reply } = props;

	return (
		<div className="flex items-start">
			<PhotoSticker url={reply.replyAccountPhoto}></PhotoSticker>
			<div className="flex-1 text-left pl-2">
				<div className="text-slate-600 mt-1 font-bold">
					{reply.replyAccountName}
					<span className="ml-2 text-xs text-slate-400">
            {reply.replyDate}
          </span>
				</div>
				<div aria-label="reply-message" className="text-slate-500 mt-1">
					{reply.replyMessage}
				</div>
			</div>
		</div>
	)
}