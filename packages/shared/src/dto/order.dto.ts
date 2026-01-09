export interface orderSummary {
  IDOrdine: string
  DataOrd: Date
  Totale: number
}


export interface OrderInfoDto {
  IdOrdine: string
  DataOrdine: string
  Cliente: CustomerInfoDto
  Articles?: ArticleInfoDto[]
  TotOrdine: number
}


export interface OrderDto {
  IdOrdine: string
  DataOrdine: string
  IdCliente: string
  RagioneSoc: string
  Indirizzo: string
  Comune: string
  Cap: string
  Nazione: string
  TotOrdine: number
}


export interface CustomerInfoDto {
  IDCliente: string
  ragsoc: string
  indirizzo: string
  comune: string
  cap: string
  nazione: string
}

export interface ArticleInfoDto {
  IDProdotto: string
  NomeProdotto: string
  Quantita: number
  UnitaMisura: string
  PrezzoU: number
  Totale?: number
}


