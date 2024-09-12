import { Advertisment, AdvertismentPage } from "../types";
import { api } from "./api";

export const advertismentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAdvertisments: builder.query<AdvertismentPage, { perPage?: number, page?: number }>({
      query: ({ perPage, page }) => ({
        url: '/advertisements',
        method: 'GET',
        params: {_per_page: perPage, _page: page}
      })
    }),
    getAdvertismentById: builder.query<Advertisment, { id: string }>({
      query: ({ id }) => ({
        url: `/advertisements/${id}`,
        method: 'GET',
      })
    }),
    addAdvertisment: builder.mutation<void, Omit<Advertisment, 'id'>>({
      query: (newAdvertisment) => ({
        url: '/advertisements',
        method: 'POST',
        body: newAdvertisment,
      })
    })
  })
})

export const {
  useGetAdvertismentsQuery,
  useLazyGetAdvertismentsQuery,
  useAddAdvertismentMutation,
  useGetAdvertismentByIdQuery,
  useLazyGetAdvertismentByIdQuery
} = advertismentsApi

export const {
  endpoints: {getAdvertisments, addAdvertisment, getAdvertismentById}
} = advertismentsApi