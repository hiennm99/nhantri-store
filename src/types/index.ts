export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    category?: string; // Optional category
}

export interface NavigationItem {
    name: string;
    id: string;
}