import Navbar from "@/components/Navbar/Index";
import { getData } from "@/libs/dndn-api";

const FetchNavbar = async () => {
  const brands = await getData("brands")
  const ManBrands = await getData("brands-type/man")
  const WomanBrands = await getData("brands-type/woman")
  const ManCategories = await getData("categories/man")
  const WomanCategories = await getData("categories/woman")
  
  return (
    <Navbar brands={brands} manBrands={ManBrands} womanBrands={WomanBrands} manCategories={ManCategories} womanCategories={WomanCategories} />
  )
}

export default FetchNavbar