import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PlaceOrderRequest {
    gst: bigint;
    customerName: string;
    deliveryAddress: string;
    deliveryFee: bigint;
    grandTotal: bigint;
    phone: string;
    items: Array<OrderItem>;
    subtotal: bigint;
}
export interface Order {
    id: bigint;
    gst: bigint;
    customerName: string;
    status: OrderStatus;
    deliveryAddress: string;
    deliveryFee: bigint;
    grandTotal: bigint;
    timestamp: bigint;
    phone: string;
    items: Array<OrderItem>;
    subtotal: bigint;
}
export interface OrderItem {
    name: string;
    quantity: bigint;
    price: bigint;
    selectedPriceLabel: string;
}
export enum OrderStatus {
    pending = "pending",
    confirmed = "confirmed"
}
export interface backendInterface {
    getOrder(id: bigint): Promise<Order | null>;
    placeOrder(req: PlaceOrderRequest): Promise<bigint>;
}
