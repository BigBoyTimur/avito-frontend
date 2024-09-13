import { Order } from "../types";
import { api } from "./api";

export const ordersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useLazyGetOrdersQuery
} = ordersApi

export const {
 endpoints: { getOrders }
} = ordersApi