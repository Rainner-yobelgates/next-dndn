import Navbar from "@/components/Navbar/Index";
import { getData } from "@/libs/dndn-api";

const FetchNavbar = async () => {
  const brands = await getData("brands")

  return (
    <Navbar brands={brands} />
  )
}

export default FetchNavbar