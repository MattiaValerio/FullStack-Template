import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";
import { ApiResponse, OrderSummary } from "@repo/shared";

@Injectable()
export class OrdersService {
  constructor(
    private readonly repo: OrdersRepository,
  ) { }

  async getOrders() : Promise<ApiResponse<OrderSummary[]>> {
    try
    {

      return {
        ok: true,
        message: "Orders fetched successfully",
        
      }
    }
    catch(error){
      return {
        ok: false,
        message: "Error fetching orders",
        error: {
          code: "FETCH_ERROR",
          message: error.message,
        },
      };
    }
  }

  async getOrder(id: string): Promise<ApiResponse<OrderSummary>> {
    try{
      const order = await this.repo.findById(id);
      return {
        ok: true,
        message: "Order fetched successfully",
        data: order,
      };
    }catch(error){
      return {
        ok: false,
        message: "Error fetching order details",
        error: {
          code: "FETCH_ERROR",
          message: error.message,
        },
      };
    }
  }

  async createOrder(): Promise<ApiResponse> {
    return {
      ok: false,
      message: "Not implemented",
      error: {
        code: "NOT_IMPLEMENTED",
        message: "This endpoint is not yet implemented"
      },
    };
  }

}
