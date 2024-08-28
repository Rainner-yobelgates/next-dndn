import { api } from "@/lib/axios"
import { Product } from "@/types/product"
import { useQuery } from "@tanstack/react-query"

interface IUseCollection {
    query: {}
}

const useCollection = (slug: string, { query }: IUseCollection) => {
    return useQuery({
        queryKey: ['collection', slug],
        queryFn: async () => {
            const res = await api.get(`/collections/${slug}`,
                {
                    params: query,
                }
            );
            return res.data.payload as {
                current_page: number,
                data: Product[],
                first_page_url: string,
                from: number,
                last_page: number,
                last_page_url: string,
                links: [
                    {
                        url: string | null,
                        label: string,
                        active: boolean
                    }
                ],
                next_page_url: null,
                path: string,
                per_page: number | null,
                prev_page_url: number | null,
                to: number,
                total: number
            }
        }
    })
}

export default useCollection