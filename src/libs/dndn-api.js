export const getData = async (resource, query) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      // Check if the response status is OK (200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      // Try to parse the response as JSON
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle and log any errors
      console.error("Failed to fetch data:", error);
      // Optionally rethrow the error to handle it elsewhere
      throw error;
    }
  };