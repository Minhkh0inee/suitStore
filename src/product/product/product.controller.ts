import { Controller, Get } from '@nestjs/common';
@Controller('product')
export class ProductController {
  @Get()
  findAll(): string {
    return 'fetch all success';
  }
}
