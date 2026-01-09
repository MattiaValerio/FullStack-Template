import { OrderType, SpedPurpose } from "@repo/shared";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";



@Entity('Orders')
export class OrderEntity {
  @PrimaryGeneratedColumn("uuid")
  Id: string;

  @Column({ unique: true })
  OrderCode: string;

  @Column({unique: true})
  OrderNumber: number;

  @Column()
  Year: number;
  
  @Column()
  OrderDate: Date;

  @Column({ nullable: true })
  DeliveryDate?: Date;

  @Column({
    type: "enum",
    enum: OrderType,
    default: OrderType.CUSTOMER,
  })
  OrderType: OrderType;

  @Column({
    type: "enum",
    enum: SpedPurpose,
    default: SpedPurpose.SALE,
  })
  SpedPurpose: SpedPurpose;

  @Column({default: 0}) // Acconto versato
  AdvPayment: number;
  
  @Column({default: 0}) // Netto merce
  WareAmount: number;

  @Column({default: 0}) // Imponibile
  TaxableAmount: number;

  @Column({default: 0}) // Spese (Generali, Incasso, Trasporto)
  FeeAmount: number;
  
  @Column({default: 0}) // IVA
  VatAmount: number;
  
  @Column({default: 0}) // Sconto
  DiscountAmount: number;
  
  @Column({default: 0}) // Totale
  TotalAmount: number;

  @Column()
  RegisteredBy: string;

  @Column({default: () => 'CURRENT_TIMESTAMP'})
  RegisteredAt: Date;

  @Column()
  UpdatedBy: string;

  @Column({default: () => 'CURRENT_TIMESTAMP'})
  UpdatedAt: Date;
  
  @Column({default: false})
  IsPaid: boolean;
}
