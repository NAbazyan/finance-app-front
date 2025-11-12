import { apiSlice } from "../../redux/apiSlice";

export const billsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBills: builder.query({
            query: () => "bills/",
            providesTags: ["Bill"]
        }),

        createBill: builder.mutation({
            query: (bill) => ({
                url: "bills/",
                method: "POST",
                body: bill
            }),
            invalidatesTags: ["Bill"]
        }),

        updateBill: builder.mutation({
            query: ({id, ...bill}) => ({
                url: `bills/${id}/`,
                method: "PUT",
                body: bill
            }),
            invalidatesTags: ['Bill']
        }),

        deleteBill: builder.mutation({
            query: (id) => ({
                url: `bills/${id}/`,
                method: "DELETE"
            }),
            invalidatesTags: ['Bill']
        }),

        getProducts: builder.query({
            query: () => "bills/products/",
            providesTags: ['Product']
        })
    })
})

export const {
    useGetBillsQuery,
    useCreateBillMutation,
    useUpdateBillMutation,
    useDeleteBillMutation,
    useGetProductsQuery
} = billsApi