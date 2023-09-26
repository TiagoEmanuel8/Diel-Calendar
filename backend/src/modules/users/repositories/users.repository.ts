import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserDto } from '../dto/user-response.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  private mapUserToDto(user: any): any {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      mobileNumber: user.mobileNumber,
    };
  }

  async create(createUserDto: CreateUserDto): Promise<UserDto> {
    const newUser = await this.prisma.user.create({
      data: createUserDto,
    });
    return this.mapUserToDto(newUser);
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.prisma.user.findMany({
      include: { tasks: true },
    });
    return users.map(this.mapUserToDto);
  }

  async findOne(id: number): Promise<UserDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { tasks: true },
    });
    if (!user) return null;
    return this.mapUserToDto(user);
  }

  async verifyExisteField(email: string): Promise<UserEntity> {
    return this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async update(id: number, updatePositionDto: UpdateUserDto): Promise<UserDto> {
    await this.prisma.user.update({
      where: {
        id,
      },
      data: updatePositionDto,
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
