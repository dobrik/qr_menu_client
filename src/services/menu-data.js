export const fetchMenuData = async (restaurantSlug) => {
  const res = await fetch(`https://my-favorite.place.s3.us-east-1.amazonaws.com/public/organizations/${restaurantSlug}.json`);
  if (!res.ok) {
    throw new Error(`Failed to fetch menu data: ${res.statusText}`);
  }
  return await res.json();
};
