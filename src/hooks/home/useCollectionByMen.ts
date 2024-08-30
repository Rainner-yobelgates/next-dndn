import { api } from '@/lib/axios';
import { Product } from '@/types/product';
import { useQuery } from '@tanstack/react-query';


const useCollectionByMen = () => {
    return useQuery({
        queryKey: ['collection', 'men'],
        queryFn: async () => {
            const res = await api.get('/collections/man');
            return res.data.payload as Product[];
        }
    });
}

export default useCollectionByMen