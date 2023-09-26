import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  state: string;

  @IsString()
  duration: string;

  @IsString()
  tags: string;

  @IsString()
  times: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
