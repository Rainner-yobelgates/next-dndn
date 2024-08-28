import { api } from '@/lib/axios';
import { Brand } from '@/types/brand';
import { useQuery } from '@tanstack/react-query';


const useBrand = () => {
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL, 'test url');
    return useQuery({
        queryKey: ['branch'],
        queryFn: async () => {
            const res = await api.get('/brands');
            return res.data.payload as Brand[];
        },
    });
}

export default useBrand;