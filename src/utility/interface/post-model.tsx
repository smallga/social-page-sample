import { UserModel } from "./user";

export interface PostModel {
    authorName: string,
    authorPhotoUrl: string,
    lastUpdated: string,
    title: string,
    replyCount: number,
    likeCount: number,
    webmVideoUrl: string,
    videoUrl: string,
    videoPreviewUrl: string,
    isLike: boolean,
}