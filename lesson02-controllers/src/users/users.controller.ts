/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
   GET /users
   GET /users/interns
   GET /users/:id
   POST /users
   PATCH /users/:id
   DELETE /users/:id
   */

  @Get() // GET /users
  findAll() {
    return [];
  }

  /**
   * IMPORTANT: Static routes must come BEFORE dynamic routes.
   * If this was below ':id', Nest would treat 'interns' as an 'id'.
   */
  // @Get('interns') // GET /users/interns, order of routes matter
  // findAllInterns() {
  //   return [];
  // }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, userUpdate };
  }
}
