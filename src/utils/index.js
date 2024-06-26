export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}&from=0&to=${limit}&`;

  const response = await fetch(url);
  const data = await response.json();

  return data?.hits;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data[0];
}

// export async function fetchRecipe(id) {
//   const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`;

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data[0]; // Assuming you expect an array with one recipe detail object
//   } catch (error) {
//     console.error('Error fetching recipe details:', error);
//     throw error; // Handle or propagate the error as needed
//   }
// }