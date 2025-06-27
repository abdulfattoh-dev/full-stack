import { ObjectType, Field } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('author')
@ObjectType()
export class Author {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar' })
  full_name: string;

  @Field(() => [Book])
  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
