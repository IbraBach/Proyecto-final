import {IShoppingCartItem } from './ishoppingcartitem'

export interface IOrder {
    orderId?: string;
    userId: string;
    total: number;
    products: [IShoppingCartItem,{
        productId: string;
        quantity: number;
        price: number;
        }]
    }
