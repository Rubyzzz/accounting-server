import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { User } from './server/user';
import { TestModule } from './server/test/test.module';
import { Test } from './server/test';

@Module({
  imports: [
    UserModule,
    TestModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/account'),
  ],
  controllers: [AppController],
  providers: [AppService, User, Test],
})
export class AppModule {}
