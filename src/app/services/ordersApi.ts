import { Order, OrderStatusMap } from "../types";
import { api } from "./api";

export const ordersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<
      (Omit<Order, "status"> & { orderPrice: number; status: string })[],
      void
    >({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      transformResponse: (response: Order[]) => {
        return response.map((order) => ({
          ...order,
          orderPrice: order.items.reduce(
            (total, item) => total + item.price * item.count,
            0
          ),
          status: OrderStatusMap[order.status],
        }));
      },
    }),
  }),
});

export const { useGetOrdersQuery, useLazyGetOrdersQuery } = ordersApi;

export const {
  endpoints: { getOrders },
} = ordersApi;
