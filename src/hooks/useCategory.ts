import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query"

const useCategory = (type: string) => {
    return useQuery({
        queryKey: ["category", type],
        queryFn: async () => {
            const response = await api.get(`/categories/${type}`);
            return response.data.payload as {
                category: {
                    id: number
                    name: string
                    slug: string
                }
            }[]
        }
    })
}

export default useCategory;