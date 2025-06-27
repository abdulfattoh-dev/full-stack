import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field()
  full_name: string;
}
