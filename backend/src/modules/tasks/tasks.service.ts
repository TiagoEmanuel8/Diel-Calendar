import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { TaskRepository } from './repositories/task.repository';

@Injectable()
export class TasksService {
  constructor(private readonly repository: TaskRepository) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.repository.create(createTaskDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    const task = await this.repository.findOne(id);
    if (!task) throw new NotFoundError(`Task ${id} is not found`);
    return task;
  }

  async findTag(tags: string) {
    const tag = await this.repository.findTags(tags);
    if (!tag) throw new NotFoundError(`Task ${tags} is not found`);
    return tag;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.repository.findOne(id);
    if (!task) throw new NotFoundError(`Task ${id} is not found`);
    return await this.repository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    const task = await this.repository.findOne(id);
    if (!task) throw new NotFoundError(`Task ${id} is not found`);
    await this.repository.remove(id);
  }
}
