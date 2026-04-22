import Types "../types/orders";
import OrdersLib "../lib/orders";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

mixin (
  orders : Map.Map<Nat, Types.Order>,
) {
  var nextOrderId : Nat = 1;
  /// Place a new order. Returns the unique order ID.
  public func placeOrder(req : Types.PlaceOrderRequest) : async Nat {
    Runtime.trap("not implemented");
  };

  /// Retrieve an order by its ID.
  public query func getOrder(id : Nat) : async ?Types.Order {
    Runtime.trap("not implemented");
  };
};
