import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('PRO_COM_ORDINI')
export class OrderEntity {
  @PrimaryColumn()
  IdOrdine: string;

  @Column({ name: 'IDCliente' })
  IdCliente: number;

  @Column({ name: 'DataOrdine' })
  DataOrdine: Date;
  
  @Column({ name: 'Stato' })
  Stato: string;
  
  @Column({ name: 'TotOrd' })
  Totale: number;
}
