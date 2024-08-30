import { api } from '@/lib/axios';
import { Brand } from '@/types/brand';
import { useQuery } from '@tanstack/react-query';


const useBrand = () => {
    return useQuery({
        queryKey: ['branch'],
        queryFn: async () => {
            const res = await api.get('/brands');
            return res.data.payload as Brand[];
        },
    });
}

export default useBrand;