export const getData = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const data = await response.json()
    return data
}