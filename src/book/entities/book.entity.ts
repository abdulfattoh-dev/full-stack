import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('book')
@ObjectType()
export class Book {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar' })
  title: string;

  @Field(() => Author)
  @ManyToOne(() => Author, (author) => author.books)
  @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
  author: Author;
}
