export interface IUser {
    userId?: string;
    imgUrl: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
    address: string;
    postCode: number;
    city: string;
    country: string;
    phoneNumber: number;
}

export interface IMe {
    name: string;
    imgUrl: string;
    surname: string;
    email: string;
    password: string;
    address: string;
    postCode: number;
    city: string;
    country: string;
    phoneNumber: number;
}