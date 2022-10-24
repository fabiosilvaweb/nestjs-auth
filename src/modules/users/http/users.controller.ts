import { Controller, Post, Get, Put, Param, Body } from '@nestjs/common';
import { UserRequest } from '../dtos/user-request';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async show(@Param() id: string) {
    return this.usersService.findById(id);
  }

  @Post()
  async create(@Body() body: UserRequest) {}

  @Put(':id')
  async update(@Body() body: UserRequest, @Param() params: any) {}
}
