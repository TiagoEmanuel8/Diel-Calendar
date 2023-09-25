import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './repositories/users.repository';
import { PrismaService } from '../../database/prisma.service';
import { PasswordHashService } from 'src/common/encryption/password-hash';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository, PrismaService, PasswordHashService],
})
export class UsersModule {}
