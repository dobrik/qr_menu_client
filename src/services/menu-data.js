export const fetchMenuData = async (restaurantSlug, isPreview) => {
  const s3Url = process.env.NEXT_PUBLIC_S3_URL;
  const res = await fetch(`${s3Url}/${restaurantSlug}.json`);
  //TODO: fetch real data from the server and protect route
  if (!res.ok) {
    throw new Error(`Failed to fetch menu data: ${res.statusText}`);
  }
  return await res.json();
};
