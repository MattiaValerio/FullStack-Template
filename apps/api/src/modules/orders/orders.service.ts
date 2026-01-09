import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "./orders.repository";
import { ArticleInfoDto, OrderDto, OrderInfoDto, orderSummary } from "@repo/shared";

@Injectable()
export class OrdersService {
  constructor(
    private readonly repo: OrdersRepository,
  ) { }

  async getOrderSummary() : Promise<orderSummary[]> {
    const orders: orderSummary[] = await this.repo.findSummary();

    return orders.sort((a, b) => b.DataOrd.getTime() - a.DataOrd.getTime());
  }

  async getOrderDetails(id: string): Promise<OrderInfoDto> {
    const order: OrderDto = await this.repo.findById(id);
    const products: ArticleInfoDto[] = await this.repo.findOrderArticles(id);

    const response: OrderInfoDto = {
      IdOrdine: order.IdOrdine,
      DataOrdine: order.DataOrdine,
      Cliente: {
        IDCliente: order.IdCliente,
        ragsoc: order.RagioneSoc,
        indirizzo: order.Indirizzo,
        comune: order.Comune,
        cap: order.Cap,
        nazione: order.Nazione,
      },
      Articles: products.map(p => ({
        IDProdotto: p.IDProdotto,
        NomeProdotto: p.NomeProdotto,
        UnitaMisura: p.UnitaMisura,
        Quantita: p.Quantita,
        PrezzoU: Number(p.PrezzoU),
        Totale: Number(p.Totale),
      })),
      TotOrdine: order.TotOrdine,
    };
    return response;
  }
}
