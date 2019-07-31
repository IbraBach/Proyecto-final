import { Entity, model, property } from '@loopback/repository';
import { ShoppingCartItem } from '.';

@model({ settings: {} })
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  orderId?: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property.array(ShoppingCartItem, { required: true })
  products: ShoppingCartItem[];


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
