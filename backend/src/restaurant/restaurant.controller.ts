import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get('menu')
  async getMenu() {
    return this.restaurantService.getMenu();
  }

  @Post('menu')
  async addMenuItem(@Body() menuItem: any) {
    // For now, require restaurantId in the body
    return this.restaurantService.addMenuItem(menuItem);
  }

  @Get('orders')
  async getOrders() {
    return this.restaurantService.getOrders();
  }

  @Patch('orders/:id')
  async updateOrderStatus(
    @Param('id') id: string,
    @Body('status') status: string,
  ) {
    return this.restaurantService.updateOrderStatus(id, status);
  }
} 