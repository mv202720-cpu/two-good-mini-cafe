import Types "types/orders";
import OrdersMixin "mixins/orders-api";
import Map "mo:core/Map";

actor {
  let orders = Map.empty<Nat, Types.Order>();

  include OrdersMixin(orders);
};
