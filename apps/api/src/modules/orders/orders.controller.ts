import { Controller, Get, Param } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get()
  getSummary() {
    return this.service.getOrderSummary();
  }

  @Get(':id')
  getDetails(@Param('id') id: string) {
    return this.service.getOrderDetails(id);
  }
}
