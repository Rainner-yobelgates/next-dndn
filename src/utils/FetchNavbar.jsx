"use client"
import Navbar from "@/components/Navbar/Index";
import { getData } from "@/libs/dndn-api";
import { useEffect, useState } from "react";

const FetchNavbar = ({ fontClass }) => {
  const [brands, setBrands] = useState([]);
  const [ManBrands, setManBrands] = useState([]);
  const [WomanBrands, setWomanBrands] = useState([]);
  const [ManCategories, setManCategories] = useState([]);
  const [WomanCategories, setWomanCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchBrands = await getData("brands")
      setBrands(fetchBrands)
      const fetchManBrands = await getData("brands-type/man")
      setManBrands(fetchManBrands)
      const fetchWomanBrands = await getData("brands-type/woman")
      setWomanBrands(fetchWomanBrands)
      const fetchManCategories = await getData("categories/man")
      setManCategories(fetchManCategories)
      const fetchWomanCategories = await getData("categories/woman")
      setWomanCategories(fetchWomanCategories)
    }

    fetchData();
  }, []);

  return (
    <Navbar brands={brands} manBrands={ManBrands} womanBrands={WomanBrands} manCategories={ManCategories} womanCategories={WomanCategories} fontClass={fontClass} />
  )
}

export default FetchNavbar