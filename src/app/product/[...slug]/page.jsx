import { getData } from '@/libs/dndn-api';
import DetailProduct from '@/components/DetailProduct/index'

const page = async ({ params: { slug } }) => {
    const product = await getData(`product/${slug}`)
    const newArrival = await getData("collections/new-arrival-collections")

    return (
        <DetailProduct product={product} newArrival={newArrival} />
    )
}

export default page