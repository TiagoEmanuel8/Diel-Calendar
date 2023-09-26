import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { TaskDto } from '../dto/task-response.dto';
import { TaskEntity } from '../entities/task.entity';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  private mapTaskToDto(task: any): any {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      state: task.state,
      duration: task.duration,
      tags: task.tags,
      times: task.times,
      userId: task.userId,
    };
  }

  async create(createTaskDto: CreateTaskDto): Promise<TaskDto> {
    const newTask = await this.prisma.tasks.create({
      data: createTaskDto,
    });
    return this.mapTaskToDto(newTask);
  }

  async findAll(): Promise<TaskDto[]> {
    const tasks = await this.prisma.tasks.findMany();
    return tasks.map(this.mapTaskToDto);
  }

  async findOne(id: number): Promise<TaskDto> {
    const task = await this.prisma.tasks.findUnique({
      where: { id },
    });
    if (!task) return null;
    return this.mapTaskToDto(task);
  }

  async findTags(tags: string): Promise<TaskDto[] | TaskDto> {
    const findTags = await this.prisma.tasks.findMany({ where: { tags } });
    return findTags.map(this.mapTaskToDto);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskDto> {
    await this.prisma.tasks.update({
      where: {
        id,
      },
      data: updateTaskDto,
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.prisma.tasks.delete({
      where: {
        id,
      },
    });
  }
}
