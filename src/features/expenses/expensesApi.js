import { apiSlice } from "../../redux/apiSlice";

export const expensesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getExpenses: builder.query({
            query: () => "expenses/",
            providesTags: ["Expenses"]
        }),

        createExpenses: builder.mutation({
            query: (expenses) => ({
                url: "expenses/",
                method: "POST",
                body: expenses
            }),
            invalidatesTags: ["Expenses"]
        }),

        deleteExpenses: builder.mutation({
            query: (id) => ({
                url: `expenses/${id}/`,
                method: "DELETE"
            }),
            invalidatesTags: ['Expenses']
        }),
    })
})

export const {
    useGetExpensesQuery,
    useCreateExpensesMutation,
    useDeleteExpensesMutation
} = expensesApi