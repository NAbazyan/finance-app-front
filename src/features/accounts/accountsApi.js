import { apiSlice } from "../../redux/apiSlice";

export const accountsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => "accounts/",
            providesTags: ["Account"]
        }),

        createAccount: builder.mutation({
            query: (account) => ({
                url: "accounts/",
                method: "POST",
                body: account
            }),
            invalidatesTags: ['Account']
        }),

        updateAccount: builder.mutation({
            query: ({id, ...account}) => ({
                url: `accounts/${id}/`,
                method: "PUT",
                body: account
            }),
            invalidatesTags: ['Account']
        }),

        deleteAccount: builder.mutation({
            query: (id) => ({
                url: `accounts/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: ['Account']
        }) 
    })
})

export const {
    useGetAccountsQuery,
    useCreateAccountMutation,
    useUpdateAccountMutation,
    useDeleteAccountMutation
} = accountsApi