import { Injectable } from "@nestjs/common";
import { ArticleInfoDto, OrderDto, orderSummary } from "@repo/shared";
import { DataSource } from "typeorm";

@Injectable()
export class OrdersRepository {
  constructor(
    private readonly dataSource: DataSource,
  ) { }

  async findById(id: string): Promise<OrderDto> {
    const ordine: OrderDto[] = await this.dataSource.query(
      `select 
        ords.IDOrdine as IdOrdine, 
        ords.DataOrd as DataOrdine,
        cli.CODICE as IdCliente,
        cli.RAGIONESOC as RagioneSoc,
        cli.INDIR1 as Indirizzo,
        cli.COMUNE as Comune,
        cli.CAP as Cap,
        cli.Nazione as Nazione,
        sum(ordrig.TotaleRiga) as TotOrdine
      from PRO_COM_ORDINI as ords
      left join CLIFO as cli
        on cli.CODICE = IDCliente
      left join PRO_COM_ORDRIGHE as ordrig
        on ords.IDOrdine = ordrig.IDOrdine
      where cli.TIPO = 'C'
        and ords.IDOrdine = @0
      group by 
        ords.IDOrdine,
        cli.CODICE,
        ords.DataOrd,
        cli.RAGIONESOC,
        cli.INDIR1,
        cli.COMUNE,
        cli.CAP,
        cli.NAZIONE
      order by DataOrdine desc;`, [id]);

      return ordine[0];
  }

  findOrderArticles(orderId: string): Promise<ArticleInfoDto[]> {
    return this.dataSource.query(`
      select 
        art.ID_Articolo as IDProdotto,
        art.Descrizione as NomeProdotto,
        ordRig.Quantita as Quantita,
        art.ID_Unita as UnitaMIsura,
        art.Prezzo as PrezzoU,
        ordRig.TotaleRiga as Totale
      from PRO_COM_ORDRIGHE as ordRig
      left join PRO_ANA_ARTICOLI as art
        on ordRig.ID_Articolo = art.ID_Articolo
      where IDOrdine = 'OC100000012024'
      `);
  }

  findSummary() : Promise<orderSummary[]> {
    return this.dataSource.query(`
      SELECT 
        ords.IDOrdine,
        ords.DataOrd,
        SUM(r.TotaleRiga) Totale
      FROM PRO_COM_ORDINI ords
      JOIN PRO_COM_ORDRIGHE r ON r.IDOrdine = ords.IDOrdine
      GROUP BY ords.IDOrdine, ords.DataOrd
    `);
  }
}
