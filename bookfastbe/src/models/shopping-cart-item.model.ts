import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ShoppingCartItem extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  productId?: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;


  constructor(data?: Partial<ShoppingCartItem>) {
    super(data);
  }
}

export interface ShoppingCartItemRelations {
  // describe navigational properties here
}

export type ShoppingCartItemWithRelations = ShoppingCartItem & ShoppingCartItemRelations;
