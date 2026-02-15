import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateLocationDto } from "src/application/dtos/location/create-location.dto";
import { UpdateLocationDto } from "src/application/dtos/location/update-location.dto";
import { CreateLocationUseCase } from "src/application/use-cases/location/create-location.use-case";
import { GetLocationsUseCase } from "src/application/use-cases/location/get-locations.use-case";
import { GetLocationUseCase } from "src/application/use-cases/location/get-location.use-case";
import { UpdateLocationUseCase } from "src/application/use-cases/location/update-location.use-case";
import { DeleteLocationUseCase } from "src/application/use-cases/location/delete-location.use-case";

@ApiTags('Locations')
@Controller('locations')
export class LocationController {
  constructor(
    private readonly createLocationUseCase: CreateLocationUseCase,
    private readonly getLocationsUseCase: GetLocationsUseCase,
    private readonly getLocationUseCase: GetLocationUseCase,
    private readonly updateLocationUseCase: UpdateLocationUseCase,
    private readonly deleteLocationUseCase: DeleteLocationUseCase,
  ) { }

  @Post()
  @ApiOperation({ summary: 'Create a new location' })
  @ApiResponse({ status: 201, description: 'Location created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async create(@Body() createLocationDto: CreateLocationDto) {
    return this.createLocationUseCase.execute(createLocationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all locations' })
  @ApiResponse({ status: 200, description: 'List of locations' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll() {
    return this.getLocationsUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a location by ID' })
  @ApiResponse({ status: 200, description: 'Location found successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findOne(@Param('id') id: string) {
    return this.getLocationUseCase.execute(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a location by ID' })
  @ApiResponse({ status: 200, description: 'Location updated successfully' })
  async update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    return this.updateLocationUseCase.execute(+id, updateLocationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a location by ID' })
  @ApiResponse({ status: 200, description: 'Location deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async remove(@Param('id') id: string) {
    return this.deleteLocationUseCase.execute(+id);
  }
}