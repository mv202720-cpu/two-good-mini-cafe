module {
  public type OrderStatus = { #pending; #confirmed };

  public type OrderItem = {
    name : Text;
    price : Nat;
    quantity : Nat;
    selectedPriceLabel : Text;
  };

  public type Order = {
    id : Nat;
    customerName : Text;
    phone : Text;
    deliveryAddress : Text;
    items : [OrderItem];
    subtotal : Nat;
    deliveryFee : Nat;
    gst : Nat;
    grandTotal : Nat;
    status : OrderStatus;
    timestamp : Int;
  };

  public type PlaceOrderRequest = {
    customerName : Text;
    phone : Text;
    deliveryAddress : Text;
    items : [OrderItem];
    subtotal : Nat;
    deliveryFee : Nat;
    gst : Nat;
    grandTotal : Nat;
  };
};
