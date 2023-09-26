import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { LoginModule } from './modules/login/login.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    LoginModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
