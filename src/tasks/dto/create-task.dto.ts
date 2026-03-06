import { IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { TaskStatus, TaskPriority } from '@prisma/client';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(TaskStatus, {
    message: 'El estado debe ser: pending, in_progress o done',
  })
  @IsOptional()
  status?: TaskStatus;

  @IsEnum(TaskPriority, {
    message: 'La prioridad debe ser: low, medium o high',
  })
  @IsOptional()
  priority?: TaskPriority;
}