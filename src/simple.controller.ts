import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './Book';

@Controller()
export class SimpleController {

  @Get()
  helloWorld(): string {
    return "It works!";
  }
}
