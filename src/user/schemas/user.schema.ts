import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual("posts", {
    ref: "Post",
    localField: "_id",
    foreignField: "user"
});

UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });
