import { User } from "./user";

export interface PostModel {
    authorName: string,
    authorPhotoUrl: string,
    lastUpdated: string,
    title: string,
    replyCount: number,
    videoUrl: string,
    videoPreviewUrl: string,
}