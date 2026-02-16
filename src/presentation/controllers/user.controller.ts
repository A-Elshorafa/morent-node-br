import { Controller, Post, Body, Put, Delete, Param, Get } from "@nestjs/common";
import { CreateUserDto } from "src/application/dtos/user/create-user.dto";
import { UpdateUserDto } from "src/application/dtos/user/update-user.dto";
import { User } from "src/domain/entities/user.entity";
import { ApiResponse } from "@nestjs/swagger";
import { CreateUserUseCase } from "src/application/use-cases/user/create-user.use-case";
import { UpdateUserUseCase } from "src/application/use-cases/user/update-user.use-case";
import { DeleteUserUseCase } from "src/application/use-cases/user/delete-user.use-case";
import { GetUserUseCase } from "src/application/use-cases/user/get-location.use-case";
import { GetUsersUseCase } from "src/application/use-cases/user/get-locations.use-case";

@Controller('users')
export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly updateUserUseCase: UpdateUserUseCase,
        private readonly deleteUserUseCase: DeleteUserUseCase,
        private readonly getUserUseCase: GetUserUseCase,
        private readonly getUsersUseCase: GetUsersUseCase
    ) { }

    @Post()
    @ApiResponse({ status: 201, description: 'User created successfully' })
    @ApiResponse({ status: 400, description: 'Invalid request' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async create(@Body() user: CreateUserDto): Promise<User> {
        return await this.createUserUseCase.execute(user);
    }

    @Put()
    @ApiResponse({ status: 200, description: 'User updated successfully' })
    @ApiResponse({ status: 400, description: 'Invalid request' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async update(@Body() user: UpdateUserDto): Promise<User> {
        return await this.updateUserUseCase.execute(user);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'User deleted successfully' })
    @ApiResponse({ status: 400, description: 'Invalid request' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async delete(@Param('id') id: number): Promise<boolean> {
        return await this.deleteUserUseCase.execute(id);
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'User found successfully' })
    @ApiResponse({ status: 400, description: 'Invalid request' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findById(@Param('id') id: number): Promise<User | null> {
        return await this.getUserUseCase.execute(id);
    }

    @Get()
    @ApiResponse({ status: 200, description: 'Users found successfully' })
    @ApiResponse({ status: 400, description: 'Invalid request' })
    @ApiResponse({ status: 500, description: 'Internal server error' })
    async findAll(): Promise<User[]> {
        return await this.getUsersUseCase.execute();
    }
}