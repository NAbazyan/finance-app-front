import { apiSlice } from "../../redux/apiSlice";

export const transactionsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTransactions: builder.query({
            query: () => "transactions/",
            providesTags: ["Transactions"]
        }),

        createTransactions: builder.mutation({
            query: (transactions) => ({
                url: "Transactions/",
                method: "POST",
                body: transactions
            }),
            invalidatesTags: ["Transactions"]
        }),

        deleteTransactions: builder.mutation({
            query: (id) => ({
                url: `transactions/${id}/`,
                method: "DELETE"
            }),
            invalidatesTags: ['Transactions']
        }),
    })
})

export const {
    useGetTransactionsQuery,
    useCreateTransactionsMutation,
    useDeleteTransactionsMutation
} = transactionsApi