import { OrderType } from '../enums/order-type.enum';
import { SpedPurpose } from '../enums/sped-purpose.enum';

/**
 * DTO per il riepilogo ordini
 */
export interface OrderSummary
{
  Id: string;
  OrderCode: string;
  OrderNumber: number;
  Year: number;
  CustomerName: string;
  OrderDate: string;
  TotalAmount: number;
  IsPaid: boolean;
}


/**
 * DTO per singola riga articolo in fase di creazione ordine
 */
export interface CreateOrderArticleDto {
  IDProdotto: string;
  Quantita: number;
  PrezzoU?: number;
  UnitaMisura?: string;
}

/**
 * DTO per la creazione di un nuovo ordine
 */
export interface CreateOrderDto {
  // Identificativo cliente obbligatorio
  IdCliente: string;

  // Date
  OrderDate: string; // ISO string
  DeliveryDate?: string;

  // Numerazione (possono essere generati lato server)
  OrderCode?: string;
  OrderNumber?: number;
  Year?: number;

  // Tipologia e scopo di spedizione (enum)
  OrderType?: OrderType;
  SpedPurpose?: SpedPurpose;

  // Importi (valori opzionali; default 0 lato server)
  AdvPayment?: number;
  WareAmount?: number;
  TaxableAmount?: number;
  FeeAmount?: number;
  VatAmount?: number;
  DiscountAmount?: number;
  TotalAmount: number;

  // Stato
  IsPaid?: boolean;

  // Linee ordine
  Articles?: CreateOrderArticleDto[];
}