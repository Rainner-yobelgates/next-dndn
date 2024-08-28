import { api } from "@/lib/axios";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query"

const useNewArrivalCollection = () => {

    return useQuery({
        queryKey: ['collection', 'new-arrival'],
        queryFn: async () => {
            const res = await api.get('/collections/new-arrival');
            return res.data.payload as Product[];
        }
    })

}

export default useNewArrivalCollection