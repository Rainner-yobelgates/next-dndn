import { api } from "@/lib/axios"
import { Brand } from "@/types/brand";
import { useQuery } from "@tanstack/react-query"

const useTypeBrand = (type: string) => {
    return useQuery({
        queryKey: ["brand-type", type],
        queryFn: async () => {
            const response = await api.get(`brands-type/${type}`);
            return response.data.payload as {
                brand: {
                    id: number
                    name: string
                }
            }[]
        }
    })
}

export default useTypeBrand;