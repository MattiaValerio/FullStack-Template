import { Controller, Get, Param, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get()
  getSummary() {
    return this.service.getOrders();
  }

  @Get(':id')
  getDetails(@Param('id') id: string) {
    return this.service.getOrder(id);
  }

  @Post()
  createOrder() {
    return this.service.createOrder();
  }
}
