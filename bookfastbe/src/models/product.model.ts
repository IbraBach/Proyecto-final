import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  productId?: string;

  @property({
    type: 'string',
    required: true,
  })
  imageUrl: string;

  @property({
    type: 'string',
    required: true,
  })
  productName: string;
  
  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'number',
    required: true,
  })
  publicationYear: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  starRating: number;

  @property({
    type: 'string',
    required: true,
  })
  category: string;


  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
