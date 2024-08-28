import { api } from '@/lib/axios';
import { Product } from '@/types/product';
import { useQuery } from '@tanstack/react-query';


const useCollectionByWomen = () => {
    return useQuery({
        queryKey: ['collection', 'women'],
        queryFn: async () => {
            const res = await api.get('/collections/woman');
            return res.data.payload as Product[];
        }
    });
}

export default useCollectionByWomen