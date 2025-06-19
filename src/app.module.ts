import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { User } from './users/entities/user.entity';
import { Post } from './posts/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2508',
      database: 'n20',
      autoLoadEntities: true,
      synchronize: true,
      entities: [User, Post]
    }),
    UsersModule,
    PostsModule
  ],
})
export class AppModule { }
