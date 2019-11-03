export interface PaymentSystem {
  id: string;
  name: string;
  new_window: boolean;
  img_url: string;
  img_class: string;
  ps_type_id?: number;
  pricepoints?: {
    amount: number;
    currency: string;
    currency_converted: string;
    amount_converted: number;
  }[];
}
