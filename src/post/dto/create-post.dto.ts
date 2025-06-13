import { Types } from "mongoose";

export class CreatePostDto {
    title: string;
    content: string;
    user: Types.ObjectId;
}
