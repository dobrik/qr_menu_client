export const fetchMenuData = async (restaurantSlug) => {
  const res = await fetch(`https://s3.us-east-1.amazonaws.com/my-favorite.place/public/organizations/${restaurantSlug}.json`);
  if (!res.ok) {
    throw new Error(`Failed to fetch menu data: ${res.statusText}`);
  }
  return await res.json();
};
