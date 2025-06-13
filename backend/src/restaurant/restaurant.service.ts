import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class RestaurantService {
  constructor(private prisma: PrismaService) {}

  async getMenu() {
    return this.prisma.$queryRaw`
      SELECT * FROM "MenuItem"
      WHERE "available" = true
    `;
  }

  async addMenuItem(menuItem: any) {
    if (!menuItem.restaurantId) {
      throw new Error('restaurantId is required');
    }

    // Validate category
    const validCategories = ['APPETIZER', 'MAIN', 'DESSERT', 'BEVERAGE'];
    const category = validCategories.includes(menuItem.category) ? menuItem.category : 'MAIN';

    return this.prisma.$executeRaw`
      INSERT INTO "MenuItem" (
        "id", "name", "description", "price", "category", "available", "restaurantId", "createdAt", "updatedAt"
      ) VALUES (
        gen_random_uuid(), ${menuItem.name}, ${menuItem.description}, ${menuItem.price}, ${category}, true, ${menuItem.restaurantId}, NOW(), NOW()
      )
    `;
  }

  async getOrders() {
    return this.prisma.$queryRaw`
      SELECT o.*, 
        json_agg(
          json_build_object(
            'id', oi.id,
            'quantity', oi.quantity,
            'price', oi.price,
            'menuItem', json_build_object(
              'id', mi.id,
              'name', mi.name,
              'description', mi.description,
              'price', mi.price
            )
          )
        ) as items
      FROM "Order" o
      LEFT JOIN "OrderItem" oi ON o.id = oi."orderId"
      LEFT JOIN "MenuItem" mi ON oi."menuItemId" = mi.id
      WHERE o.status != 'DELIVERED'
      GROUP BY o.id
      ORDER BY o."createdAt" DESC
    `;
  }

  async updateOrderStatus(id: string, status: string) {
    if (!Object.values(OrderStatus).includes(status as OrderStatus)) {
      throw new Error('Invalid status');
    }

    return this.prisma.$executeRaw`
      UPDATE "Order"
      SET status = ${status}, "updatedAt" = NOW()
      WHERE id = ${id}
    `;
  }
} 