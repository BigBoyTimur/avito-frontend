import { api } from "./api";

export const advertismentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<Advertisment[], { limit?: number, offset?: number }>({
      query: ({ limit, offset }) => ({
        url: '/advertisements',
        method: 'GET',
        params: {_limit: limit, _start: offset}
      })
    })
  })
})