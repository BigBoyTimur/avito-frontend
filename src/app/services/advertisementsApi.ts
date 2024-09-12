import { api } from "./api";

export const advertismentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAdvertisments: builder.query<AdvertismentPage, { perPage?: number, page?: number }>({
      query: ({ perPage, page }) => ({
        url: '/advertisements',
        method: 'GET',
        params: {_per_page: perPage, _page: page}
      })
    })
  })
})

export const {
  useGetAdvertismentsQuery,
  useLazyGetAdvertismentsQuery
} = advertismentsApi

export const {
  endpoints: {getAdvertisments}
} = advertismentsApi