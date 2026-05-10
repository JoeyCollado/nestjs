import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController], // From users controller created
  providers: [UsersService], // from users provider created
})
export class UsersModule {}
