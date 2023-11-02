import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { HttpModule } from '@nestjs/axios';
import {SimpleController} from "./simple.controller";

@Module({
  imports: [HttpModule],
  controllers: [BookController, SimpleController],
  providers: [BookService],
})
export class BookModule {}
