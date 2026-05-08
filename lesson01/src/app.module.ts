// Main app module
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule], //Import from new module created "users"
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
