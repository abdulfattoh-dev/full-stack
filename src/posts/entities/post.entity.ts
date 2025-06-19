import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    title: string;

    @Column({ type: "varchar" })
    content: string;
}
