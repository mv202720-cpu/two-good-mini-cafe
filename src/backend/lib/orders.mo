import Types "../types/orders";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

module {
  public func placeOrder(
    orders : Map.Map<Nat, Types.Order>,
    nextId : Nat,
    req : Types.PlaceOrderRequest,
  ) : Nat {
    Runtime.trap("not implemented");
  };

  public func getOrder(
    orders : Map.Map<Nat, Types.Order>,
    id : Nat,
  ) : ?Types.Order {
    Runtime.trap("not implemented");
  };
};
