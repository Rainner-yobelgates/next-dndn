import { api } from "@/lib/axios"
import { Banner } from "@/types/banner"
import { useQuery } from "@tanstack/react-query"

const useBanner = () => {
    return useQuery({
        queryKey: ["banners"],
        queryFn: async () => {
            const res = await api.get("/banners")
            return res.data.payload as Banner[]
        }
    })
}

export default useBanner