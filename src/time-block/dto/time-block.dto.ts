import { IsNumber, IsOptional, IsString } from "class-validator";

export class TimeBlockDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  @IsOptional()
  order: number
}